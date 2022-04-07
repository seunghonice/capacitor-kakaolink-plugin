import { WebPlugin } from '@capacitor/core';
export class CapacitorKakaolinkWeb extends WebPlugin {
    constructor() {
        super({
            name: 'AppUpdatePlugin',
            platforms: ['web']
        });
    }
    async sendCustom(options) {
        console.log('sendCustom', options);
    }
}
const CapacitorKakaolink = new CapacitorKakaolinkWeb();
export { CapacitorKakaolink };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorKakaolink);
//# sourceMappingURL=web.js.map