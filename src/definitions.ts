declare module '@capacitor/core' {
    interface PluginRegistry {
        capacitorKakaolinkPlugin: CapacitorKakaolinkPlugin;
    }
  }

export interface CapacitorKakaolinkPlugin {
    sendCustom(options: { requestUrl: string; templateId: number; templateArgs: object; }): Promise<void>;
}
