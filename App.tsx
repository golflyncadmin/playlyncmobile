import React from 'react';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Settings} from 'react-native-fbsdk-next';
import {FB_APP_ID} from '@env';

function App(): React.JSX.Element {
  Settings.setAppID(FB_APP_ID);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
