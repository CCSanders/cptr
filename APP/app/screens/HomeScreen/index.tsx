import React, { useContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { Auth } from 'aws-amplify';

import Logo from '@app/assets/images/react-logo.png';
import { Theme, MaterialColors, FontWeights, FontSizes } from '@app/theme';
import { AppContext } from '../../context';

const HomeScreen = () => {

  const {user} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>CPTR</Text>
          <Text style={styles.body}>
            Welcome {user.name}! This is the home screen!
          </Text>
        </View>
      </View>
      <Text style={styles.item}>
        <Text style={{ color: MaterialColors.purple[300] }}>Creative By Default</Text>
      </Text>

      <Button title="Test Logout button" onPress={() => Auth.signOut()} />
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

export default HomeScreen;
