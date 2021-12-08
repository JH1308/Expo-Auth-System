import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/RootNavigator';
import { UserContextProvider } from './providers/UserContext'

const App = () => {
  return (
    <UserContextProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </UserContextProvider>
  );
};

export default App;
