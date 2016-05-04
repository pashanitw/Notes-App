/**
 * Created by space on 4/28/16.
 */

import React, {Component, Text, Image, StyleSheet, View, TouchableHighlight, CreateNote} from 'react-native';
export default class NavBar extends Component {
    _handleToggleMenu() {
        if (!this.props.isMenuOpen) {
            this.props.setMenuStatus(true)
        }
    }

    _handleGoBack() {
        this.props.navigator.pop();
    }

    _handleSwitchToEditScreen() {
        this.props.navigator.push({
            name: 'CreateNote'
        })
    }

    _renderIcons() {
        let {menu, compose, menuDimensions, composeDimensions, backDimensions}=styles;
        switch (this.props.routeName) {
            case 'NoteList':
                return [
                    <TouchableHighlight
                        key="1"
                        onPress={this._handleToggleMenu.bind(this)}
                        style={menu}>
                        <Image
                            source={require('../assets/navicon.png')}
                            style={menuDimensions}/>
                    </TouchableHighlight>,
                    <TouchableHighlight
                        key="2"
                        onPress={this._handleSwitchToEditScreen.bind(this)}
                        style={compose}>
                        <Image
                            source={require('../assets/ios-compose.png')}
                            style={composeDimensions}/>
                    </TouchableHighlight>
                ]
            case 'CreateNote':
                return <TouchableHighlight onPress={this._handleGoBack.bind(this)} style={menu}>
                    <Image source={require('../assets/back.png')} style={backDimensions}/>
                </TouchableHighlight>
        }

    }

    render() {
        let {container, text}=styles;
        return <View style={container}>
            <Text style={text}>Notes</Text>
            {this._renderIcons()}

        </View>
    }
}

let styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#eee'
    },
    text: {
        backgroundColor: '#2ECC71',
        fontSize: 36,
        color: '#FFFFFF',
        fontFamily: 'AvenirNext-BoldItalic',
        textAlign: 'center'
    },
    menu: {
        top: 15,
        left: 13,
        position: 'absolute'
    },
    menuDimensions: {
        width: 30,
        height: 21,
    },
    compose: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    composeDimensions: {
        width: 28,
        height: 27
    },
    backDimensions: {
        width: 27,
        height: 27,
        marginTop: -2
    }

});