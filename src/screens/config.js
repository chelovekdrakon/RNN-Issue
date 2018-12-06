import { Navigation } from 'react-native-navigation';

import { One } from './one'
import { Two } from './two'
import { Pushed } from './pushed'


const registerScreens = () => {
    Navigation.registerComponent('sk.tabs.one', () => Component);
    Navigation.registerComponent('sk.tabs.two', () => Component);
    Navigation.registerComponent('sk.tabs.pushed', () => Component);
};

export {
    registerScreens
};