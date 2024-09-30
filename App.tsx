import React, {useEffect} from 'react';
import AppNavigation from './src/navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Settings} from 'react-native-fbsdk-next';
import {FB_APP_ID, WEB_CLIENT_ID} from '@env';

function App(): React.JSX.Element {
  Settings.setAppID(FB_APP_ID);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
