import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class WeirdHrThing extends React.Component {
  render() {
    return (
      <View style={styles.hr}>
        <View style={styles.first}><Text>{" "}</Text></View>
        <View style={styles.second}>
          {
            this.props.children ||
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
              <Text style={{color: 'white'}}>or</Text>
            </View>
          }
        </View>
        <View style={styles.third}><Text>{" "}</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hr: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  first: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginTop: 20,
  },
  second: {
    backgroundColor: 'transparent',
  },
  third: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginTop: 20,
  }
});
