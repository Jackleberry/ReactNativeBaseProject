import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import GradientContainer from './GradientContainer';

export default class LoadingPage extends React.Component {
    render() {
      console.log("inside loading.....");
      return (
          <GradientContainer style={styles.container}>
             <ActivityIndicator animating={true} size="large" color="white"/>
          </GradientContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
});
