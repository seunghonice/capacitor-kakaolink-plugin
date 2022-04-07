import { WebPlugin } from '@capacitor/core';
import { CapacitorKakaolinkPlugin } from './definitions';
export declare class CapacitorKakaolinkWeb extends WebPlugin implements CapacitorKakaolinkPlugin {
    constructor();
    sendCustom(options: {
        requestUrl: string;
        templateId: number;
        templateArgs: object;
    }): Promise<void>;
}
declare const CapacitorKakaolink: CapacitorKakaolinkWeb;
export { CapacitorKakaolink };
