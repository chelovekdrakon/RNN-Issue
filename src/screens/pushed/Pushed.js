import React, { Component } from 'react';

// var TouchID = require('react-native-touch-id');
import TouchId from 'react-native-touch-id';
import { Navigation } from 'react-native-navigation';

import { 
    View,
    Button
} from 'react-native';

import styles from './styles';

class Pushed extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleOverlayPress = this.handleOverlayPress.bind(this);
    }

    handleBackPress() {
        const { componentId } = this.props;

        Navigation.pop(componentId);
    }

    handleOverlayPress() {
        Navigation.showOverlay({
            component: {
                id: 'sk.overlay',
                name: 'sk.overlay'
            }
        });

        // TouchId.isSupported().then((bioType) => {
        //     TouchID.authenticate('to log in to the app', {}).then(() => {
        //         this.handleBackPress();
        //     });
        // }).catch(() => {
        //     console.log('lol');
        // });
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button 
                    onPress={this.handleBackPress}
                    title="Back"
                />
                <Button 
                    style={styles.button}
                    onPress={this.handleOverlayPress}
                    title="Show Overlay"
                />
            </View>
        );
    }
}

export default Pushed;