import createPersist from '@store/persist';
import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import { AppModel } from "@store/models/app";

export const RootModel = types.model({
  app: types.optional(AppModel, {}),
});

export interface RootStore extends Instance<typeof RootModel> {}

export interface RootStoreSnap extends SnapshotOut<typeof RootModel> {}

async function createStore() {
  const {persistedState, persistStore} = await createPersist();
  const appState = RootModel.create(persistedState as any);
  persistStore(appState, ['app']);
  return appState;
}

export default createStore;
