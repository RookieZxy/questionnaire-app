/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import PushNotification, {Importance} from 'react-native-push-notification';
import { Platform} from 'react-native';

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//   requestPermissions: Platform.OS === 'ios',
// });

// PushNotification.createChannel(
//   {
//     channelId: "1", // (required)
//     channelName: "My channel", // (required)
//     channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//     playSound: false, // (optional) default: true
//     soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//     importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//   },
//   (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
// );

AppRegistry.registerComponent(appName, () => App);
