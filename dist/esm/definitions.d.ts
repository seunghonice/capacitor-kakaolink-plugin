declare module '@capacitor/core' {
    interface PluginRegistry {
        capacitorKakaolinkPlugin: CapacitorKakaolinkPlugin;
    }
}
export interface CapacitorKakaolinkPlugin {
    sendCustom(options: {
        hostname: string;
        templateId: string;
        templateArgs: object;
    }): Promise<void>;
}
