import { WebPlugin } from '@capacitor/core';
import { CapacitorKakaolinkPlugin } from './definitions';

export class CapacitorKakaolinkWeb  extends WebPlugin implements CapacitorKakaolinkPlugin {
    constructor() {
        super({
            name: 'AppUpdatePlugin',
            platforms: ['web']
        });
    }

    async sendCustom(options: { requestUrl: string; templateId: number; templateArgs: object; }): Promise<void> {
    console.log('sendCustom', options);
  }
}

const CapacitorKakaolink = new CapacitorKakaolinkWeb();

export { CapacitorKakaolink };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorKakaolink);

