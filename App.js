

 import React from 'react';
 import { createAppContainer } from 'react-navigation';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import RoutePage from './RoutePage'
 import { persistor, store } from './src/redux/store'



const AppContainer = createAppContainer(RoutePage);

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
        
      </Provider>
    );
  }
}