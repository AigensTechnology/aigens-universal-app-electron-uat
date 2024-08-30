// import { CapacitorConfig } from '@capacitor/cli';
import { CapacitorElectronConfig } from '@capacitor-community/electron';

const config: CapacitorElectronConfig = {
    appId: 'com.aigens.device.app',
    appName: 'Aigens Universal App',
    webDir: 'dist/',
    bundledWebRuntime: false,
    loggingBehavior: 'debug',
    "server": {
        // Capacitor to open URLs belonging to these hosts inside its WebView.
        "allowNavigation": [
            "order.place",
            "*.order.place",
            "*.aigens.com"
        ]
    },
    "electron": {
        // customUrlScheme?: string;
        // trayIconAndMenuEnabled?: boolean;
        // splashScreenEnabled?: boolean;
        // splashScreenImageName?: string;
        // hideMainWindowOnLaunch?: boolean;
        // deepLinkingEnabled?: boolean;
        // deepLinkingCustomProtocol?: string;
        // backgroundColor?: string;
        appId: 'com.aigens.device.app',
        appName: 'Aigens Universal App'
    }
};

export default config;
