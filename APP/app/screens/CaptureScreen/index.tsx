import React, { useCallback, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

import { Camera, CameraRuntimeError, frameRateIncluded, useCameraDevices, PhotoFile } from 'react-native-vision-camera';
import Reanimated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedProps, useSharedValue } from 'react-native-reanimated';

import { FFmpegKit, FFmpegKitConfig, ReturnCode } from 'ffmpeg-kit-react-native';
import RNFS from 'react-native-fs';

import Logo from '@app/assets/images/react-logo.png';
import { Theme, MaterialColors, FontWeights, FontSizes } from '@app/theme';
import CaptureButton from './components/CaptureButton';
import { images_to_cptr_pipeline } from '../../utils/image_processing';

const CaptureScreen = ({ navigation }) => {

  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices.back;

  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const isFocused = useIsFocused();

  const isPressingButton = useSharedValue(false);

  //#region Callbacks
  const setIsPressingButton = useCallback(
    (_isPressingButton: boolean) => {
      isPressingButton.value = _isPressingButton;
    },
    [isPressingButton],
  );

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);

  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);

  const onCapture = useCallback((photo_array: PhotoFile[]) => {

    console.log(`Media captured! ${JSON.stringify(photo_array)}`);

    //process into gif
    //go to page that shows gif before publishing.. 
    let cptrPath = `${RNFS.DocumentDirectoryPath}/temp_cptr` + Date.now() + '.gif';

    images_to_cptr_pipeline(photo_array, cptrPath).then((command) => {
      FFmpegKit.executeAsync(command, async (session) => {

        const returnCode = await session.getReturnCode();

        if (ReturnCode.isSuccess(returnCode)) {
          console.log("Successfully executed image_to_cptr pipeline!")

          navigation.navigate('CapturePreviewScreen', {
            cptrTmpUri: cptrPath
          });
        } else {
          console.warn("Failed to execute image_to_cptr pipeline!");
        }
      });
    });

  }, []);

  return (
    <View style={styles.container}>
      {device != null && (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          onInitialized={onInitialized}
          onError={onError}
          photo={true}
        />
      )}

      <CaptureButton
        style={styles.captureButton}
        camera={camera}
        onCapture={onCapture}

        enabled={isCameraInitialized && isFocused}
        setIsPressingButton={setIsPressingButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.bg
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    marginLeft: 10,
  },
  logo: {
    height: 64,
    width: 64,
  },
  captureButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
  button: {
    marginBottom: 10,
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
    backgroundColor: 'rgba(140, 140, 140, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    ...FontWeights.Light,
    ...FontSizes.SubHeading,
    color: Theme.colors.text_primary
  },
  body: {
    ...FontWeights.Light,
    color: Theme.colors.text_seconday,
    ...FontSizes.Body,
  },
  item: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    marginTop: 10,
    color: Theme.colors.text_primary
  },
});

export default CaptureScreen;
