import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import feathersAuthentication from '../feathers/auth';
import { Button } from 'react-native-elements';

class LogoutButton extends React.Component {

  onLogout = () => {
    console.log("logout?");
    this.props.logout();
  };

  render() {
    return (
      <Button
        accessibilityLabel="Logout"
        onPress={this.onLogout}
        title="Logout"
        color={this.props.type === 'link' ? "#105D89" : '#105D89'}
        backgroundColor={this.props.type === 'button' ? "#fff" : "transparent"}
        containerViewStyle={this.props.type === 'button' ? styles.buttonContainer : {}}
        textStyle={this.props.type === 'button' ? styles.buttonText : {}}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '70%',
    opacity: 0.3,
    marginBottom: 40,
  },
  buttonText: {
    fontWeight: '600'
  },
});

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(feathersAuthentication.logout, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);
