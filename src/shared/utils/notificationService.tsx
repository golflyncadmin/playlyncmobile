import {PermissionsAndroid, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Routes} from './routes';

export async function requestPermission() {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    let result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    return result === 'granted';
  }
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
}

export async function getFCMToken() {
  const enable = await requestPermission();
  if (enable) {
    let token = await messaging().getToken();
    return {fcmToken: token};
  } else {
    return {fcmToken: ''};
  }
}

export const createNotifyChannel = () => {
  PushNotification.createChannel(
    {
      channelId: 'PlayLync', // (required)
      channelName: 'PlayLync', // (required)
      channelDescription: 'A channel to categories your notifications', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created: any) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

export const notificationListener = (navigation: any) => {
  // When the application is running, but in the background
  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log('Background State Notification', remoteMessage);
    // onClickNotification(remoteMessage, navigation);
  });
  // To listen to messages in the foreground
  messaging().onMessage(async remoteMessage => {
    console.log('Foreground State Notification', remoteMessage);
    LocalNotification(remoteMessage, navigation);
  });
  // When the application is opened from a quit state
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        onClickNotification(remoteMessage, navigation);
      }
    })
    .catch(err => {
      console.log('Error ==> ', err);
    });
};

export const LocalNotification = (notify: any, navigation: any) => {
  PushNotification.localNotification({
    channelId: 'PlayLync',
    title: notify?.notification?.title,
    smallIcon: 'ic_notification',
    largeIcon: 'ic_launcher',
    message: notify?.notification?.body,
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
  });

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token: any) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification: any) {
      if (notification.userInteraction) {
        onClickNotification(notify, navigation);
      } else {
        console.log('User received notification');
      }
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios' ? true : false,
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  });
};

const onClickNotification = (notify: any, navigation: any) => {
  console.log('onClickNotification called');
  navigation.navigate(Routes.AlertsStack);
  // const notificationObj = notify?.data;
  // const payload = JSON?.parse(notificationObj?.data);
};
