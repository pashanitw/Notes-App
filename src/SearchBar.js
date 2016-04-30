/**
 * Created by space on 4/28/16.
 */

import React, {Component, TextInput, Image, StyleSheet, View} from 'react-native';
export default function  SearchBar(){

        var def="Search by title or tag..."
        let {container, text}=styles;
    let boxProps = {placeholderTextColor: '#727272',autoCorrect:false};
        return <View style={container}>
            <TextInput style={text} placeholder={def} {...boxProps}></TextInput>
        </View>
}

let styles = StyleSheet.create({
        container: {
            height: 40,
            borderRadius: 22,
            backgroundColor: '#D8D8D8',
            margin: 18
        },
        text: {
            fontFamily: 'Avenir-BookOblique',
            fontSize: 18,
            color: '#000',
            height:40,
            marginLeft:20,
            marginRight:10
        }

    })
    ;