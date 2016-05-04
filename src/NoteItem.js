import React,{Component,Text,Image,StyleSheet,View} from 'react-native';
import moment from 'moment';
const clockImg =require('../assets/ios-clock.png');
const tagImg=require('../assets/ios-pricetag.png');


const FooterLabel=({source,label,imgStyle,wrapperStyle})=>{

    return <View style={wrapperStyle?[styles.box,wrapperStyle]:styles.box}>
        <Image source={source} style={imgStyle}></Image>
        <Text style={styles.footerLabel}>{label.toUpperCase()}</Text>
    </View>
}
export const  NoteItem =({title,note,createdAt,tagName})=>{
        let {container,titleStyle,textStyle,footer,clock,tag,rightMargin,alignStart,divider,noteSection}=styles;
        return <View style={container}>
            <View style={noteSection}>
            <Text style={titleStyle}>{title}</Text>
            <View style={divider}/>
            <Text style={textStyle}>{note}</Text>
            </View>
            <View style={footer}>
                    <FooterLabel source={clockImg} label={moment(createdAt).fromNow()} wrapperStyle={alignStart} imgStyle={[clock,rightMargin]}/>
                    <FooterLabel source={tagImg} label={tagName}  imgStyle={[tag,rightMargin]}/>
            </View>
        </View>
    
}

let styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        margin:18,
    },
    noteSection:{
      padding:15
    },
    divider:{
        height:1,
        flex:1,
        backgroundColor:'#CFCFCF'
    },
    titleStyle:{
        fontFamily: 'Avenir-Roman',
        fontSize: 22,
        color: '#4C4C4C',

    },
    textStyle:{
        fontFamily: 'Avenir-Roman',
        fontSize: 14,
        color: '#606060',
        lineHeight: 24,
        marginBottom:10
    },
    footer:{
        backgroundColor: '#D8D8D8',
        flex:1,
        flexDirection:'row',
        padding:10,
        justifyContent: 'space-around'
    },
    box:{
      flexDirection:'row'
    },
    clock:{
        width:17,
        height:17,
        margin:0.5
    },
    tag:{
        width:14,
        height:16,
        margin:1
    },
    rightMargin:{
        marginRight:5,
    },
    footerLabel:{
        fontFamily: 'Avenir-Roman',
        fontSize: 14,
        color: '#727272',
    },
    alignStart:{
        flex:1
    }
});