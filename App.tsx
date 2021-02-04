import React from 'react';
import Home from './source/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store from './source/redux/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <Home />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
