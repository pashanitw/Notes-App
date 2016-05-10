import React, {
    Component,
    TextInput,
    Text,
    Image,
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import {setUsername} from '../actions/notelist'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            isUserNameEmpty:true
        }
    }

    _handleLogin() {
        this.props.actions.setUsername(this.state.username, this.props.navigator);
        this.setState({
            username: ''
        })
    }

    _updateText(username) {
        let isUserNameEmpty=username ? false:true
        this.setState({
            username,
            isUserNameEmpty
        })
    }

    render() {
        let {container, loginBox, loginButton,buttonWrapper}=styles;
        let textInputProps = {autoCapitalize: 'none', autoCorrect: false}
        return <View style={container}>
            <TextInput style={loginBox}
                {...textInputProps}
                       value={this.state.username}
                       onChangeText={this._updateText.bind(this)}>
            </TextInput>
            <TouchableHighlight
                onPress={this._handleLogin.bind(this)}
                style={[buttonWrapper,{opacity:this.state.isUserNameEmpty?0.5:1}]}
                disabled={this.state.isUserNameEmpty}>
                <Text style={loginButton}>Login As Guest</Text>
            </TouchableHighlight>
        </View>
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#eee'
    },
    loginBox: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        margin:20,
        paddingLeft:20
    },
    loginButton: {
        fontFamily: 'Avenir-Roman',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    buttonWrapper:{
        backgroundColor: '#384252',
        borderRadius: 4,
        padding:16,
        margin:20,
    }


})
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({setUsername}, dispatch)}
}
export default connect(null, mapDispatchToProps)(Login)
