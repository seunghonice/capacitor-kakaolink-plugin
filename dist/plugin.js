var capacitorCapacitorKakaolink = (function (exports, core) {
    'use strict';

    class CapacitorKakaolinkWeb extends core.WebPlugin {
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
    core.registerWebPlugin(CapacitorKakaolink);

    exports.CapacitorKakaolink = CapacitorKakaolink;
    exports.CapacitorKakaolinkWeb = CapacitorKakaolinkWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
