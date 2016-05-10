import React,
{
    Component,
    Text,
    Image,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {clearData} from '../actions/notelist'
class Slider extends Component {
    _handleLogout(){
        this.props.actions.clearData();
        this.props.navigator.push({
            name:'Login'
        })
    }
    render() {
        let {container, profile, profilePic, profileName, navigation, controls}=styles;
        return <View style={container}>
            <View style={profile}>
                <Image source={{uri:'http://lorempixel.com/100/100/'}} style={profilePic}/>
                <Text style={profileName}>{this.props.username}</Text>
            </View>
            <View style={navigation}>
                <Text style={controls}>View Settings</Text>
                <TouchableHighlight onPress={this._handleLogout.bind(this)}>
                    <Text style={controls}>Logout</Text>
                </TouchableHighlight>
            </View>
        </View>
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 170,
        backgroundColor: '#2C3E50',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    profileName: {
        fontFamily: 'Avenir-Roman',
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 15,
        textAlign:'center'
    },
    navigation: {
        alignItems: 'center',
        marginTop: 25
    },
    controls: {
        fontFamily: 'Avenir-Roman',
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 34
    }

});

function mapStateToProps(state) {
    let {notelist}=state;
    return {
        username: notelist.get('username')
    }

}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators({clearData}, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Slider)