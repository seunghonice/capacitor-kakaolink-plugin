declare module '@capacitor/core' {
    interface PluginRegistry {
        capacitorKakaolinkPlugin: CapacitorKakaolinkPlugin;
    }
  }

export interface CapacitorKakaolinkPlugin {
    sendCustom(options: { 
        templateId: string; 
        templateArgs: object; 
    }): Promise<void>;
}
