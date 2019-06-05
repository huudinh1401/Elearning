import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/Screen/HomeScreen';
import TestScreen from './src/Screen/TestScreen';
import ResultScreen from './src/Screen/ResultScreen';
import ShortenSkillTestScreen from './src/Screen/ShortenSkillTestScreen';
import ShortenSkillResultScreen from './src/Screen/ShortenSkillResultScreen';

import Next from './src/Screen/Next';
import NextNext from './src/Screen/NextNext';



const RoutePage = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Elearning',
        headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
        }
      }
    },
    Test: {
      screen: TestScreen,
      navigationOptions: {
        header: null,
      }
    },
    Next: {
      screen: Next,
      navigationOptions: {
        header: null,
      }
    },
    NextNext: {
      screen: NextNext,
      navigationOptions: {
        header: null,
      }
    },
  
    Result: {
      screen: ResultScreen,
      navigationOptions: {
        header: null,
      }
    },
    ShortenSkillTest: {
      screen: ShortenSkillTestScreen,
      navigationOptions: {
        header: null,
      }
    },
    ShortenSkillResult: {
      screen: ShortenSkillResultScreen,
      navigationOptions: {
        header: null,
      }
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
        fontWeight: 'bold'
      },
    },
  }
);

export default RoutePage;