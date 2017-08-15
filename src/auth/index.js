import { StackNavigator } from 'react-navigation';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default App = StackNavigator({
  LandingPage: { screen: LandingPage },
  Login: { screen: LoginPage },
  SignUp: { screen: SignUpPage },
});
