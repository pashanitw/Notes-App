/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TextInput
} from 'react-native';
import Navbar from './NavBar';
import  SearchBar from './SearchBar'
import  {NoteItem} from './NoteItem'
var sampleData = [
    {
        title: "First Note",
        note: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.m.Why do we use it?",
        dateAdded:'3 DAYS AGO',
        tagName:'HOLIDAY'
    },
    {
        title: "Second Note",
        note: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.m.Why do we use it?",
        dateAdded:'3 DAYS AGO',
        tagName:'HOLIDAY'
    }
];
const Note = ({title, note, url})=> {
    return <View style={styles.note}>
        <Text>{title}</Text>
        <Text>{note}</Text>
        <Image source={{uri: url}} style={styles.img}/>
    </View>

}


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class List extends Component {
    constructor(props){
        super(props)

        this.state={
            text:'',
            data:sampleData,
            dataSource:ds.cloneWithRows(sampleData)
        }
    }
    _filterByTitle(text){
        return this.state.data.filter(note=>note.title.startsWith(text));

    }
    _handleChange(text){
        this.setState({
            text,
            dataSource:ds.cloneWithRows(this._filterByTitle(text))
        })
    }
    render() {
        let autoCorrect=false;
        let enableEmptySections=true;
        let {statusbar,menu}=styles;
        return (
            <View style={styles.container}>
                 <Navbar routeName="NoteList"
                 navigator={this.props.navigator}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={NoteItem}
                    renderHeader={SearchBar}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    menu:{
        width:30,
        height:21,
        top:15,
        left:10,
        position:'absolute'
    },
    statusbar:{
        flex:1,
        backgroundColor:'#2ECC71',
        fontSize: 36,
        color: '#FFFFFF',
        fontFamily:'AvenirNext-BoldItalic',
        textAlign:'center'
    },
    searchBar: {
        flex:1,
        height:50,
        borderColor:"#DDD",
        borderWidth:1,
        backgroundColor:'#eee'
    },
    listView: {
        position:'absolute',
        top:80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        width: 300,
        height: 200
    },
    note: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 5
    }
});
