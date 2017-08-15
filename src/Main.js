import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import feathersAuthentication from './feathers/auth';
import Loading from './common/Loading';
import Dashboard from './dashboard';
import Auth from './auth';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.authenticate()
      .then(() => this.setState({ isLoading: false }))
      .catch(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.props.auth.isSignedIn) return <Dashboard/>;
    if (this.state.isLoading) return <Loading/>;
    return <Auth/>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: bindActionCreators(feathersAuthentication.authenticate, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
