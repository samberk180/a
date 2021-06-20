/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import AppNavigation from '@navigation/AppNavigation';
import {RootStoreProvider} from '@store/context';
import {RootStore} from '@store/index';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import {AppHooks} from './App.hooks';

const App = () => {
  const {theme, state, storeReady} = useApp();
  return storeReady ? (
    <RootStoreProvider value={state as RootStore}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </RootStoreProvider>
  ) : null;
};

const {useApp} = AppHooks;
export default App;
