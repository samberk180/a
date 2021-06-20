import {AppNavigationRoute, AppUnAuthenticatedRoute} from '@navigation/helpers';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '@screens/login';
import {RegisterScreen} from '@screens/register';
import {ResetPasswordScreen} from '@screens/reset_password';
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useTheme} from 'styled-components/native';

const {Screen, Navigator} = createNativeStackNavigator();

const AppNavigationStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerLargeTitleHideShadow: false,
        gestureEnabled: false,
      }}>
      <Screen
        getComponent={() => UnAuthenticatedStack}
        name={AppNavigationRoute.UnAuthentication}
      />
    </Navigator>
  );
};

const UnAuthenticatedStack: React.FC = () => {
  const theme = useTheme() as any;
  return (
    <Navigator
      screenOptions={{
        title: '',
        headerTranslucent: true,
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerHideShadow: true,
        headerBackTitleVisible: false,
        headerTintColor: theme.headerTintColor,
        headerLargeTitleHideShadow: false,
        gestureEnabled: true,
      }}>
      <Screen
        options={{
          headerShown: false,
        }}
        name={AppUnAuthenticatedRoute.Login}
        component={LoginScreen}
      />
      <Screen
        name={AppUnAuthenticatedRoute.ResetPassword}
        component={ResetPasswordScreen}
      />
      <Screen
        name={AppUnAuthenticatedRoute.Register}
        component={RegisterScreen}
      />
    </Navigator>
  );
};

const App: React.FC = () => (
  <NavigationContainer>
    <AppNavigationStack />
  </NavigationContainer>
);
export default React.memo(App);
