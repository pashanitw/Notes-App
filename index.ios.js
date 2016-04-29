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
    TextInput,
     Navigator
} from 'react-native';
import List from './src/List'
import CreateNote from './src/CreateNote'
import Slider from './src/Slider'
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Notes extends Component {

    _renderScene(route,navigator){
        switch(route.name){
            case 'NoteList':
               return <List navigator={navigator}/>
            case 'CreateNote':
                return <CreateNote navigator={navigator}/>
        }
    }
    _getInitialRoute(){
        return {
            name:'NoteList'
        }
    }
    render() {
        let autoCorrect=false;
        let enableEmptySections=true;
        let {statusbar,menu}=styles;
        return (
            <Navigator style={styles.container}
                       initialRoute={this._getInitialRoute()}
              renderScene={this._renderScene}>
            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        flex:1,
        top:30,
        left:0,
        bottom:0,
        right:0,
        backgroundColor:'#BDC3C7',
    }
});

AppRegistry.registerComponent('Notes', () => Notes);
