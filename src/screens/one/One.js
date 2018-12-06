import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';

import { 
    View,
    Button
} from 'react-native';

import styles from './styles';

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const { componentId } = this.props;

        Navigation.push(componentId, {
            component: {
                name: 'sk.tabs.pushed',
                options: {
                    bottomTabs: {
                        visible: false,
                        drawBehind: true
                    }
                }
            },
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button 
                    onPress={this.handlePress}
                    title="Push"
                />
            </View>
        );
    }
}

export default One;