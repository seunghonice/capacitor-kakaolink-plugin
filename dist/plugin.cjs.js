'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class CapacitorKakaolinkWeb extends core.WebPlugin {
    constructor() {
        super({
            name: 'CapacitorKakaolink',
            platforms: ['web']
        });
    }
    async sendCustom(options) {
        console.log('sendCustom', options);
    }
}
const CapacitorKakaolink = new CapacitorKakaolinkWeb();
core.registerWebPlugin(CapacitorKakaolink);

exports.CapacitorKakaolink = CapacitorKakaolink;
exports.CapacitorKakaolinkWeb = CapacitorKakaolinkWeb;
//# sourceMappingURL=plugin.cjs.js.map
