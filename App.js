

 import React from 'react';
 import { createAppContainer } from 'react-navigation';
 import RoutePage from './RoutePage'



const AppContainer = createAppContainer(RoutePage);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}