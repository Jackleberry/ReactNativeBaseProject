import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginSignupForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.label}>Username</FormLabel>
        <FormInput
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          value={this.props.email}
          keyboardType="email-address"
          autoCapitalize="none"
          spellCheck={false}
          caretHidden={false}
          onChangeText={this.props.onChangeEmail}/>
        {
          this.props.emailError &&
          <FormValidationMessage containerStyle={styles.validationContainer} labelStyle={styles.validationLabel}>
            {this.props.emailError}
          </FormValidationMessage>}

        <FormLabel labelStyle={styles.label}>Password</FormLabel>
        <FormInput
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          value={this.props.password}
          secureTextEntry={true}
          onChangeText={this.props.onChangePassword}/>
        {
          this.props.passwordError &&
          <FormValidationMessage containerStyle={styles.validationContainer} labelStyle={styles.validationLabel}>
            {this.props.passwordError}
          </FormValidationMessage>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 40,
  },
  label: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  input: {
    color: 'white',
  },
  inputContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  validationLabel: {
    fontWeight: "700",
  },
  validationContainer: {
    backgroundColor: 'transparent'
  },
});

export default LoginSignupForm;
