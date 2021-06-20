import {IStateTreeNode, getRoot} from 'mobx-state-tree';

import {RootModel} from './index';

/**
 * Adds a rootStore property to the node for a convenient
 * and strongly typed way for stores to access other stores.
 */
export const withRootStore = (self: IStateTreeNode) => ({
  views: {
    /**
     * The root store.
     */
    get rootStore() {
      return getRoot<typeof RootModel>(self);
    },
  },
});
