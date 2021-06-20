import {Instance, types} from 'mobx-state-tree';

export const AppModel = types
  .model({
    shownOnBoarding: types.optional(types.boolean, false),
    hasNetwork: types.optional(types.boolean, true),
  })
  .actions(self => ({
    setNetworkStatus(state: 'on' | 'off') {
      self.hasNetwork = state === 'on';
    },
    completeOnBoarding() {
      self.shownOnBoarding = true;
    },
  }));

type AppSettingsType = Instance<typeof AppModel>;
export interface AppSettings extends AppSettingsType {}
