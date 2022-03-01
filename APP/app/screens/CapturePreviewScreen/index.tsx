import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RNFS from 'react-native-fs';
import Logo from '@app/assets/images/react-logo.png';
import CPTR from '@app/assets/images/out.gif';
import { Theme, MaterialColors, FontWeights, FontSizes } from '@app/theme';

const CapturePreviewScreen = ({ route, navigation }) => {

  const { cptrTmpUri } = route.params;

  const [imageUri, setImageUrl] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    RNFS.exists(cptrTmpUri).then( exists => {
      if(exists){
        setImageUrl('file://' + cptrTmpUri);
        setImageLoaded(true)
        console.log("image set successfully from " + cptrTmpUri)
      }
    })
  }, [])

  return (
    <View style={styles.container}>
        {imageLoaded && (
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover'
            }}
            source={{uri: imageUri}}
            defaultSource={CPTR}
            onError={(error) => { console.warn("failed to load image in capturepreviewscreen", error) }}
            onLoad={(event) => { console.log("successfully loaded image in capturepreviewscreen", event) }}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default CapturePreviewScreen;
