import { WebPlugin } from '@capacitor/core';
import { CapacitorKakaolinkPlugin } from './definitions';

export class CapacitorKakaolinkWeb  extends WebPlugin implements CapacitorKakaolinkPlugin {
    constructor() {
        super({
            name: 'CapacitorKakaolink',
            platforms: ['web']
        });
    }

    async sendCustom(options: { 
      hostname: string;
      templateId: string;
      templateArgs: object; 
    }): Promise<void> {
      console.log('sendCustom', options);
    }
}

const CapacitorKakaolink = new CapacitorKakaolinkWeb();

export { CapacitorKakaolink };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorKakaolink);

