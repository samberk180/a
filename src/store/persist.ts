import AsyncStorage from '@react-native-community/async-storage';
import {onSnapshot} from 'mobx-state-tree';

import {RootStore} from './index';

const STORE_KEY = 'buxis_app';

async function createPersist() {
  let persistedState = await AsyncStorage.getItem(STORE_KEY).catch(_ => null);
  persistedState = persistedState != null ? JSON.parse(persistedState) : {};
  const persistStore = (store: RootStore, allowList: string[] = []) => {
    onSnapshot(store, (snapshot: any) => {
      setTimeout(() => {
        const data = allowList.reduce((prev, curr) => {
          const currentStateByKey = snapshot[curr];
          return currentStateByKey
            ? {...prev, [curr]: currentStateByKey}
            : prev;
        }, {});
        AsyncStorage.setItem(STORE_KEY, JSON.stringify(data)).catch(e =>
          console.log(e),
        );
      }, 10);
    });
  };

  return {persistedState, persistStore};
}

export default createPersist;
