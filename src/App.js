import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens/config';
import { bottomTabs } from './navigator/config';
import { defaultOptions } from './navigator/options';

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
        registerScreens();

        Navigation.events().registerAppLaunchedListener(async () => { 
            Navigation.setDefaultOptions(defaultOptions);
            Navigation.setRoot({ root: { bottomTabs } });
        });
    }

    launch = () => {

    }
}