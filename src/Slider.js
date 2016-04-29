
import React,{Component,Text,Image,StyleSheet,View} from 'react-native';
export default class Slider extends Component{
    render(){
        let {container,profile,profilePic,profileName,navigation,controls}=styles;
        return <View style={container}>
            <View style={profile}>
            <Image source={{uri:'http://lorempixel.com/100/100/'}} style={profilePic}/>
                <Text style={profileName}>TOM ORR</Text>
            </View>
            <View style={navigation}>
            <Text style={controls}>Home</Text>
            <Text style={controls}>Edit Profile</Text>
            <Text style={controls}>View Settings</Text>
            <Text style={controls}>Logout</Text>
            </View>
        </View>
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        width:170,
        /* Rectangle 10: */
        backgroundColor: '#2C3E50',
        flexDirection:'column',
        alignItems:'center',
        padding:20
    },
    profilePic:{
        width:80,
        height:80,
        borderRadius:40
    },
    profileName:{
        fontFamily: 'Avenir-Roman',
        fontSize: 18,
        color: '#FFFFFF',
        marginTop:15
    },
    navigation:{
        alignItems:'center',
        marginTop:25
    },
    controls:{
        fontFamily: 'Avenir-Roman',
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 34
    }

});