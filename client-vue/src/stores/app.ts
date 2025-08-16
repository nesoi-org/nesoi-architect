// Utilities
import { defineStore } from 'pinia'
import NesoiArchitect from '@nesoi/architect-for-browser/app';

export const useAppStore = defineStore('app', {
  state: () => ({
    daemon: undefined as never as NonNullable<typeof NesoiArchitect['_daemon']>
  }),
  actions: {
    async boot() {
      this.daemon = await NesoiArchitect.daemon();
    }
  }
})
