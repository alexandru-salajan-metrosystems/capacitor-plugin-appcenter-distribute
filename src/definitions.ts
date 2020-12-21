declare module '@capacitor/core' {
  interface PluginRegistry {
    AppCenterDistribute: AppCenterDistributePlugin;
  }
}

export interface AppCenterDistributePlugin {
  checkForUpdate(): Promise<void>;
}
