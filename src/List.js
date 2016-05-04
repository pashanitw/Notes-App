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
import  Slider from './Slider'
import  {NoteItem} from './NoteItem'
import SideMenu from 'react-native-side-menu'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import * as notelistActions from '../actions/notelist'
import moment from 'moment'
const Note = ({title, note, url})=> {
    return <View style={styles.note}>
        <Text>{title}</Text>
        <Text>{note}</Text>
        <Image source={{uri: url}} style={styles.img}/>
    </View>

};


class List extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = this.ds.cloneWithRows([])

    }

    _filterByTitle(text) {
        return this.state.data.filter(note=>note.title.startsWith(text));

    }

    _mapDataSource(data) {
        let source = []
        _.forIn(data, (value, key)=> {
            source.push({key, ...value})
        })
        return source;
    }

    _sortByDate(data) {
        return data.sort((a, b)=> {
            return moment(a.createdAt).isBefore(moment(b.createdAt))
        })
    }

    _handleChange(text) {

    }

    updateMenuState(isOpen) {
        this.props.actions.openMenu(isOpen)
    }

    _handleMenuChange(isMenuOpen) {
        if (isMenuOpen !== this.props.isMenuOpen) {
            this.props.actions.setMenuStatus(isMenuOpen)
        }
    }

    render() {
        let autoCorrect = false;
        let enableEmptySections = true;
        let {statusbar, menu}=styles;
        let edgeHitWidth = 170;
        let bounceBackOnOverdraw = false;
        var Menu = <Slider navigator={this.props.navigator}></Slider>;
        let mappedData=this._mapDataSource(this.props.data);
        let sortedData=this._sortByDate(mappedData)
        let dataSource = this.ds.cloneWithRows(sortedData);
        return (
            <SideMenu
                menu={Menu}
                openMenuOffset={edgeHitWidth}
                isOpen={this.props.isMenuOpen}
                onChange={(isMenuOpen)=>this._handleMenuChange(isMenuOpen)}
                bounceBackOnOverdraw={bounceBackOnOverdraw}>
                <View style={styles.container}>
                    <Navbar routeName="NoteList"
                            navigator={this.props.navigator}
                            setMenuStatus={this.props.actions.setMenuStatus}
                            isMenuOpen={this.props.isMenuOpen}/>
                    <ListView
                        dataSource={dataSource}
                        renderRow={NoteItem}
                        renderHeader={SearchBar}
                        enableEmptySections={enableEmptySections}
                    />
                </View>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#BDC3C7'

    },
    menu: {
        width: 30,
        height: 21,
        top: 15,
        left: 10,
        position: 'absolute'
    },
    statusbar: {
        flex: 1,
        backgroundColor: '#2ECC71',
        fontSize: 36,
        color: '#FFFFFF',
        fontFamily: 'AvenirNext-BoldItalic',
        textAlign: 'center'
    },
    searchBar: {
        flex: 1,
        height: 50,
        borderColor: "#DDD",
        borderWidth: 1,
        backgroundColor: '#eee'
    },
    listView: {
        position: 'absolute',
        top: 80
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

export default connect(mapStateToProps, mapDispatchToProps)(List)


function mapStateToProps(state) {
    console.log(state)
    let {notelist}=state;
    console.log('notelist is', notelist)
    return {
        isMenuOpen: notelist.get('isMenuOpen'),
        searchKey: notelist.get('searchKey'),
        data: notelist.get('data').toJS()
    }

}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(notelistActions, dispatch)}
}