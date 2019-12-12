/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

import messaging from '@react-native-firebase/messaging';

const App: () => React$Node = () => {
  useEffect(() => {
    // get fcm token
    messaging()
      .getToken()
      .then(fcmToken => {
        console.warn(fcmToken);
      });

    // get messages when app is foreground [data-only messages]
    return messaging().onMessage((message: RemoteMessage) => {
      console.warn(message.data.p1);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Hello, World!</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
