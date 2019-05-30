

 import React from 'react';
 import { createAppContainer } from 'react-navigation';
 import { Provider } from 'react-redux';
 import RoutePage from './RoutePage'
 import store from './src/redux/store'



const AppContainer = createAppContainer(RoutePage);

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <AppContainer />
      </Provider>
    );
  }
}