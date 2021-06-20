import createStore, {RootStore} from '@store/index';
import AppTheme from '@theme/AppTheme';
import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

const useApp = () => {
  const [state, setRootState] = useState<RootStore | null>(null);
  useEffect(() => {
    async function loadStore() {
      const store = await createStore();
      setRootState(store);
    }
    loadStore();
  }, []);
  const colorScheme = useColorScheme();
  const theme = AppTheme[colorScheme ?? 'light'];
  return {theme, state, storeReady: state != null};
};

export const AppHooks = {useApp};
