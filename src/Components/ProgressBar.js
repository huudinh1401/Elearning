import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';

export default class ProgressBar extends Component {
    render() {
        const {backgroundColor} = this.props;
        return (
            <View style={{ 
                flex: 1,
                backgroundColor: backgroundColor,
                height: 10 * ratio(height),
                borderRadius: 3 * ratio(height),
            }}>
            </View>
        );
    }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
    return (height / 568);
}
