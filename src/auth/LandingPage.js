import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { GradientContainer, WeirdHrThing } from '../common';

export default class LandingPage extends React.Component {

  onLogin = () => {
    this.props.navigation.navigate('Login');
  };

  onSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <GradientContainer>
        <Icon
          reverse
          name='rowing'
          containerStyle={styles.iconContainer}
          size={66}
          color="transparent"/>
        <Button
          onPress={this.onLogin}
          title="Login"
          accessibilityLabel="Login"
          raised
          containerViewStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          backgroundColor="white"
        />
        <WeirdHrThing />
        <Button
          onPress={this.onSignUp}
          title="Sign Up"
          accessibilityLabel="Sign Up"
          containerViewStyle={{marginTop: 20}}
          color="white"
          backgroundColor="transparent"
        />
      </GradientContainer>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 200
  },
  buttonContainer: {
    width: '70%',
    opacity: 0.3,
    marginBottom: 40,
  },
  buttonText: {
    color: '#105D89',
    fontWeight: '600'
  },
  signUpText: {
    color: 'white'
  },
});
