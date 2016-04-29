/**
 * Created by space on 4/28/16.
 */

import React, {Component, Text, Image, StyleSheet, View, TextInput,TouchableHighlight} from 'react-native';
import NavBar from './NavBar'
export default class CreateNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            tags: '',
            note: ''
        }
    }
    _handleInputChange(type,text){
        let newState={};
        newState[type]=text;
        this.setState(newState)
    }
    _onPressButton(){
        //SAVE TO SQL LITE ACTION GOES HERE
    }

    render() {
        let multiline=true;
        let {title, tags, note}=this.state;
        let boxProps = {placeholderTextColor: '#727272',autoCorrect:false}
        let {container,subContainer, label, textbox, textarea, tagsView,submit,submitFont}=styles;
        return <View style={container}>
            <NavBar routeName='CreateNote' navigator={this.props.navigator}/>
            <View style={subContainer}>
                <Text style={label}>Create New Note</Text>
                <TextInput
                    placeholder='Enter Note Name ...'
                    value={title}
                    style={textbox}
                    {...boxProps}
                    onChangeText={this._handleInputChange.bind(this,'title')}>
                </TextInput>
                <View style={tagsView}>
                    <TextInput
                        placeholder='Enter Tag Names...'
                        value={tags}
                        style={textbox}
                        {...boxProps}
                        onChangeText={this._handleInputChange.bind(this,'tags')}>
                    </TextInput>
                </View>
                <TextInput
                    placeholder='Write Your Note...'
                    value={note}
                    style={[textbox,textarea]}
                    {...boxProps}
                    multiline={multiline}
                    onChangeText={this._handleInputChange.bind(this,'note')}>
                </TextInput>
                <TouchableHighlight onPress={this._onPressButton} style={submit}>
                    <Text style={submitFont}>Add Note</Text>
                </TouchableHighlight>
            </View>
        </View>
    }
}

let styles = StyleSheet.create({
    container:{
      flex:1
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        marginBottom: 20,
        backgroundColor: '#D8D8D8',
        padding: 10,
        paddingTop: 20
    },
    label: {
        fontFamily: 'Avenir-Roman',
        fontSize: 22,
        color: '#4C4C4C',
        marginBottom: 25
    },
    textbox: {
        height: 40,
        fontFamily: 'Avenir-BookOblique',
        fontSize: 16,
        color: '#727272',
        backgroundColor: '#FFF',
        marginBottom: 25,
        padding: 10,
    },
    textarea: {
        height: 150
    },
    submit:{
        backgroundColor: '#384252',
        borderRadius: 4,
        padding:16,
        position:'absolute',
        bottom:10,
        right:10,
        left:10

    },
    submitFont:{
        fontFamily: 'Avenir-Roman',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign:'center'
    }


});