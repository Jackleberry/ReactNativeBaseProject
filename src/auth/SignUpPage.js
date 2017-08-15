import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import services from '../reducers/services';
import feathersAuthentication from '../feathers/auth';
import GradientContainer from '../common/GradientContainer';
import LoginSignUpForm from './LoginSignupForm';
import * as utils from '../utils';
import Error from '../common/Error';

class SignUpPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up',
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

  onSignup = () => {
    if (this.state.email === "")
      this.setState({ emailError: "Email is a required field." });
    if (this.state.password === '')
      this.setState({ passwordError: "Password is a required field."});

    if (this.state.email !== "" && this.state.password !== '')
      this.props.createUser({
        type: 'local',
        email: this.state.email,
        password: this.state.password
      }).then(() => {
        this.props.authenticate({ strategy: 'local', email: this.state.email.toLowerCase(), password: this.state.password })
          .then(result => console.log(result))
          .catch(err => this.setState({ error: utils.extractError(err)}));
      }).catch(err => this.setState({ error: utils.extractError(err)}));
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
        <Error error={this.state.error}/>
        <LoginSignUpForm
          email={this.state.email}
          password={this.state.password}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          onChangePassword={(password) => this.setState({password, passwordError: null})}
          onChangeEmail={(email) => this.setState({email, emailError: null})} />
        <Button
          onPress={this.onSignup}
          title="Signup"
          accessibilityLabel="Signup"
          containerViewStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          backgroundColor="#fff"
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
