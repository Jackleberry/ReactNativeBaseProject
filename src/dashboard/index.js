import { StackNavigator } from 'react-navigation';
import Dashboard from './Dashboard';

export default App = StackNavigator(
  {
    Dashboard: { screen: Dashboard },
  },
  {
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#CBCDCD',
      },
    },
  },
);
