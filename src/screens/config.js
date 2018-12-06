import { Navigation } from 'react-native-navigation';

import { One } from './one'
import { Two } from './two'
import { Pushed } from './pushed'


const registerScreens = () => {
    Navigation.registerComponent('sk.tabs.one', () => One);
    Navigation.registerComponent('sk.tabs.two', () => Two);
    Navigation.registerComponent('sk.tabs.pushed', () => Pushed);
};

export {
    registerScreens
};