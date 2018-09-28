import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import DefaultGrid from './components/default-grid/default-grid';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View >
        <Text style={styles.welcome}>
          Feature
        </Text>
        <DefaultGrid/>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});