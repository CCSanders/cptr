import React, { useContext } from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput } from 'react-native';

import Logo from '@app/assets/images/react-logo.png';
import { Theme, MaterialColors, FontWeights, FontSizes } from '@app/theme';

import { AppContext } from '../../context';
import createProfileData from '../../utils/auth';

const ProfileInitScreen = () => {

  const [handle, onChangeHandle] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [bio, onChangeBio] = React.useState("");

  const [showErrorMessage, updateShowErrorMessage] = React.useState(false);
  const [errorMessage, updateErrorMessage] = React.useState("Unknown error occured.");

  const { auth, updateUser } = useContext(AppContext);

  const createProfile = () => {

    updateShowErrorMessage(false);

    if (!(/^[a-zA-Z0-9_]{2,15}$/.test(handle))) {
      updateErrorMessage("Your handle can only contain letters, numbers, and underscores.\n It also must be at least 2 characters long and no longer than 15 characters.");
      updateShowErrorMessage(true);
      return;
    }

    if (auth.userEmail) {
      createProfileData(auth.userEmail, handle, name, bio, updateUser);
    } else {
      console.error("Fatal: Attempting to create a user profile when user has not been federated.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>CPTR</Text>
          <Text style={styles.body}>
            This is the profile init screen! You successfully authenticated but we don't have any info on you in the DB! Enter in your information.
          </Text>
        </View>
      </View>
      <Text style={styles.item}>
        <Text style={{ color: MaterialColors.purple[300] }}>Creative By Default</Text>
      </Text>
      <View>
        <TextInput style={styles.item} placeholder="Handle (what comes after the @, unique)" placeholderTextColor={MaterialColors.grey[600]} onChangeText={onChangeHandle} />
        <TextInput style={styles.item} placeholder="Display Name (what you want to be displayed as, not unique)" placeholderTextColor={MaterialColors.grey[600]} onChangeText={onChangeName} />
        <TextInput style={styles.item} placeholder="A little info about yourself (if you want)" placeholderTextColor={MaterialColors.grey[600]} onChangeText={onChangeBio} />
        <Button title="Create your account!" onPress={createProfile} />

        {showErrorMessage &&
          <Text style={{ color: MaterialColors.red[300] }}>{errorMessage}</Text>
        }      
      </View>
    </View >
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

export default ProfileInitScreen;
