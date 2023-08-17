/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');

  const widgetData = {
    test1,
    test2,
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>테스트</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
