import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Amplify, { Auth } from 'aws-amplify';
import config from './aws-exports';

import urlOpener from '@app/utils/browser';

Amplify.configure({
    ...config,
    oauth: {
      ...config.oauth,
      urlOpener,
    },
    graphql_headers: async() => {
      const currentSession = await Auth.currentSession();
      return { Authorization: currentSession.getIdToken().getJwtToken() };
    }
});

AppRegistry.registerComponent(appName, () => App);
