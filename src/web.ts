import { WebPlugin } from '@capacitor/core';
import { AppCenterDistributePlugin } from './definitions';

export class AppCenterDistributeWeb extends WebPlugin implements AppCenterDistributePlugin {
  constructor() {
    super({
      name: 'AppCenterDistribute',
      platforms: ['web'],
    });
  }

  async checkForUpdate(): Promise<void> {
    console.log('Checking for updates');
  }
}

const AppCenterDistribute = new AppCenterDistributeWeb();

export { AppCenterDistribute };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppCenterDistribute);
