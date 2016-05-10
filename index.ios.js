import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TextInput,
    Navigator,
    AsyncStorage
} from 'react-native';
import List from './src/List'
import CreateNote from './src/CreateNote'
import {Provider} from 'react-redux';
import configureStore from './store/configure-store'
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {loadInitialData} from './actions/notelist'
import Login from './src/Login'
let store = configureStore();

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRoute: null
        }
    }

    _renderScene(route, navigator) {
        switch (route.name) {
            case 'NoteList':
                return <List navigator={navigator} store={store}/>
            case 'CreateNote':
                return <CreateNote navigator={navigator} store={store}/>
            case 'Login':
                return <Login navigator={navigator}></Login>
        }
    }


    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((username)=> {
                if (username) {
                    this.setState({
                        initialRoute:{
                            name: 'NoteList'
                        }
                    })
                    this.initialRoute =
                        AsyncStorage.getItem('notelist', (err, result)=> {
                            if (err) {
                                console.log('error is '+err)
                            } else {
                                store.dispatch(loadInitialData(username, JSON.parse(result)))

                            }
                        })
                }
                else {
                    AsyncStorage.setItem('notelist', JSON.stringify({}))
                        .then(()=> {
                            this.setState({
                                initialRoute:{
                                    name: 'Login'
                                }
                            })
                        })
                }
            })

    }

    render() {
        return (

            <Provider store={store}>
                {
                    this.state.initialRoute ?
                        <Navigator style={styles.container}
                                   initialRoute={this.state.initialRoute}
                                   renderScene={this._renderScene}>
                        </Navigator>
                        :
                        <View>
                            <Text>...Loading</Text>
                        </View>
                }
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        top: 30,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#BDC3C7',
    }
});
AppRegistry.registerComponent('Notes', () => Notes);
