import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image
} from 'react-native'

export default class ImageElement extends Component {
    render() {
        return (
            <Image source={this.props.imgsource} style={StyleSheet.image}></Image>
        );
    }
}
