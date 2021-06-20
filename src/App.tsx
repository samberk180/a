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
import AppTheme from '@theme/AppTheme';
import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const scheme = useColorScheme() ?? 'light';
  const theme = AppTheme[scheme];

  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
