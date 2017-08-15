import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import services from '../reducers/services';
import feathersAuthentication from '../feathers/auth';
import { Error, GradientContainer, WeirdHrThing } from '../common';
import LoginSignUpForm from './LoginSignupForm';
import * as utils from '../utils';

class LoginPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
  });

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
      emailError: null,
      passwordError: null,
    };
  }

  onLogin = () => {
    if (this.state.email === "")
      this.setState({ emailError: "Email is a required field." });
    if (this.state.password === '')
      this.setState({ passwordError: "Password is a required field."});

    if (this.state.email !== "" && this.state.password !== '')
      this.props.authenticate({ strategy: 'local', email: this.state.email.toLowerCase(), password: this.state.password })
        .then(result => console.log("Login result", result))
        .catch(err => {this.setState({ error: utils.extractError(err)})});
  };

  onSignup = () => {
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
        <Error error={this.props.auth && this.props.auth.isError && this.props.auth.isError.data && this.props.auth.isError.data.message || this.state.error}/>
        <LoginSignUpForm
          email={this.state.email}
          password={this.state.password}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          onChangePassword={(password) => this.setState({password, passwordError: null})}
          onChangeEmail={(email) => this.setState({email, emailError: null})} />
        <Button
          onPress={this.onLogin}
          title="Login"
          accessibilityLabel="Login"
          raised
          containerViewStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          backgroundColor="#fff"
        />
        <WeirdHrThing>
          <Button
            onPress={this.onSignup}
            title="Sign Up"
            accessibilityLabel="Sign Up"
            containerViewStyle={styles.signUpContainer}
            textStyle={styles.signUpText}
            backgroundColor="transparent"
          />
        </WeirdHrThing>

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
  signUpContainer: {
    backgroundColor: 'transparent',
    height: 40
  },
  signUpText: {
    color: 'white'
  },
});

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: bindActionCreators(services.users.create, dispatch),
    authenticate: bindActionCreators(feathersAuthentication.authenticate, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
