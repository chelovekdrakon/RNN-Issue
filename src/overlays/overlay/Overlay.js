import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';

import { 
    View,
    Button
} from 'react-native';

import styles from './styles';

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const { componentId } = this.props;

        Navigation.dismissOverlay(componentId);
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button 
                    onPress={this.handlePress}
                    title="Hide Overlay"
                />
            </View>
        );
    }
}

export default Overlay;