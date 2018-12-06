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

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const { componentId } = this.props;

        Navigation.pop(componentId);
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button 
                    onPres={this.handlePress}
                >
                    Back
                </Button>
            </View>
        );
    }
}

export default Pushed;