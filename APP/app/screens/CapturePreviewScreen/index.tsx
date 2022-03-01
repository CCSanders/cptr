import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '@app/assets/images/react-logo.png';
import { Theme, MaterialColors, FontWeights, FontSizes } from '@app/theme';

const CapturePreviewScreen = ({ route, navigation }) => {

  const { cptrTmpUri } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={cptrTmpUri} style={StyleSheet.absoluteFill} />
      </View>
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
