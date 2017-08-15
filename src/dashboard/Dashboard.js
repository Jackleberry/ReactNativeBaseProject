import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { NormalContainer, LogoutButton } from '../common';

class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dashboard',
    headerRight: <LogoutButton type="link"/>,
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    return (
      <NormalContainer style={styles.container}>
        {this.state.isLoading && <ActivityIndicator style={{flex: 1}} animating={true} size="large" color="#0A3D5A"/>}
      </NormalContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDE0E1',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
