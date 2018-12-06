/** @format */

import { AppRegistry } from 'react-native';
import App from './src/App';


export default class App {
    state = {
        appState: 'active',
        connectionType: 'wifi',
        loggedIn: false
    };

    setState = (updateState) => {
        const prevState = { ...this.state };

        this.state = {
            ...prevState,
            ...updateState
        };
    }

    start() {
        screensConfig.registerScreens();

        Navigation.events().registerAppLaunchedListener(async () => { 
            const { defaultOptions } = navigatorConfig;
            Navigation.setDefaultOptions(defaultOptions);

            const { bottomTabs } = navigatorConfig;
        
            Navigation.setRoot({ root: { bottomTabs } });
            Navigation.mergeOptions('bottomTabs', { bottomTabs: { currentTabIndex: 4 } });
        });
    }

    launch = () => {

    }
}


AppRegistry.registerComponent('issue', () => App);
