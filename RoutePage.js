import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Screen/HomeScreen';
import TestScreen from './Screen/TestScreen';
import ResultScreen from './Screen/ResultScreen';
import ShortenSkillTestScreen from './Screen/ShortenSkillTestScreen';
import ShortenSkillResultScreen from './Screen/ShortenSkillResultScreen';
import FailResultScreen from './Screen/FailResultScreen';
import FailSSTScreen from './Screen/FailSSTScreen';


const RoutePage = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Test: {
      screen: TestScreen,
    },
    Result: {
      screen: ResultScreen,
    },
    ShortenSkillTest: {
      screen: ShortenSkillTestScreen,
    },
    ShortenSkillResult: {
      screen: ShortenSkillResultScreen,
    },
    FailResult: {
      screen: FailResultScreen,
    },
    FailSST: {
      screen: FailSSTScreen,
    },
  },
  {
    initialRouteName: 'Home',
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#339966',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default RoutePage;