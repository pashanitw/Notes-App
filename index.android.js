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
import {Provider} from 'react-redux';
import configureStore from './store/configure-store'
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let store = configureStore();
class Notes extends Component {

    _renderScene(route, navigator) {
        console.log('state is', store.getState())
        switch (route.name) {
            case 'NoteList':
                return <List navigator={navigator} store={store}/>
            case 'CreateNote':
                return <CreateNote navigator={navigator} store={store}/>
        }
    }

    _getInitialRoute() {
        return {
            name: 'NoteList'
        }
    }

    render() {
        let autoCorrect = false;
        let enableEmptySections = true;
        let {statusbar, menu}=styles;
        return (
            <Provider store={store}>
                <Navigator style={styles.container}
                           initialRoute={this._getInitialRoute()}
                           renderScene={this._renderScene}>
                </Navigator>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        top:0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#BDC3C7',
    }
});

AppRegistry.registerComponent('Notes', () => Notes);
