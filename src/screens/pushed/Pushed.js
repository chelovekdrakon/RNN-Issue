import React, { Component } from 'react';

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
        })
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