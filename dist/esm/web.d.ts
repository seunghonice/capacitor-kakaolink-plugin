import { WebPlugin } from '@capacitor/core';
import { CapacitorKakaolinkPlugin } from './definitions';
export declare class CapacitorKakaolinkWeb extends WebPlugin implements CapacitorKakaolinkPlugin {
    constructor();
    sendCustom(options: {
        hostname: string;
        templateId: string;
        templateArgs: object;
    }): Promise<void>;
}
declare const CapacitorKakaolink: CapacitorKakaolinkWeb;
export { CapacitorKakaolink };
