import React, 
{
    Component, 
    Text, Image, 
    StyleSheet, View, 
    TouchableHighlight, 
    CreateNote
} from 'react-native';
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
        let {
            menuButton,
            composeButton,
            menuButtonDimensions,
            composeButtonDimensions,
            backButtonDimensions
        }=styles;
        let commonProps = {
            underlayColor: '#2ECC71',
            activeOpacity: 0.5
        }
        switch (this.props.routeName) {
            case 'NoteList':
                return [
                    <TouchableHighlight
                        key="1"
                        style={menuButton}
                        {...commonProps}
                        onPress={this._handleToggleMenu.bind(this)}>
                        <Image
                            style={menuButtonDimensions}
                            source={require('../assets/navicon.png')}
                        />
                    </TouchableHighlight>,
                    <TouchableHighlight
                        key="2"
                        style={composeButton}
                        {...commonProps}
                        onPress={this._handleSwitchToEditScreen.bind(this)}>
                        <Image
                            source={require('../assets/ios-compose.png')}
                            style={composeButtonDimensions}
                        />
                    </TouchableHighlight>
                ]
            case 'CreateNote':
                return <TouchableHighlight
                    style={menuButton}
                    {...commonProps}
                    onPress={this._handleGoBack.bind(this)}>
                    <Image
                        style={backButtonDimensions}
                        source={require('../assets/back.png')}
                    />
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
    menuButton: {
        top: 15,
        left: 13,
        position: 'absolute'
    },
    menuButtonDimensions: {
        width: 30,
        height: 21,
    },
    composeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    composeButtonDimensions: {
        width: 28,
        height: 27
    },
    backButtonDimensions: {
        width: 27,
        height: 27,
        marginTop: -2
    }

});