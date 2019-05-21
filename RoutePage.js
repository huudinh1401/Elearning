import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/Screen/HomeScreen';
import TestScreen from './src/Screen/TestScreen';
import ResultScreen from './src/Screen/ResultScreen';
import ShortenSkillTestScreen from './src/Screen/ShortenSkillTestScreen';
import ShortenSkillResultScreen from './src/Screen/ShortenSkillResultScreen';
import FailResultScreen from './src/Screen/FailResultScreen';
import FailSSTScreen from './src/Screen/FailSSTScreen';


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