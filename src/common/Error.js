import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Error extends React.Component {
    render() {
      if (!this.props.error || this.props.error === "") return null;
      return (
          <View style={styles.container}>
             <Text style={styles.text}>{this.props.error}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#ff190c',
    fontWeight: "700",
  },
});
