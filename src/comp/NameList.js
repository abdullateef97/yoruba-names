import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Platform, StyleSheet, FlatList, TouchableOpacity, NetInfo } from 'react-native';
import {List, ListItem} from 'react-native-elements'
import {fetch_names_action, fetch_names_async, fetch_names_refresh} from '../actions/names';
import {setPageAsync, getPageAsync} from '../api/asyncApi'
import {connect} from 'react-redux'
import { Actions } from 'react-native-router-flux';
import {Icon} from 'native-base'

class NameList extends Component {
    state= {
        names : [],loading :false,err :'',page:1,refreshing :false
    }
    componentDidMount(){
        getPageAsync().then(page => {
        //    let page = page ? page : 1;
            this.setState({page : page})
        })
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected){
                return this.props.fetch_names_action(this.state.page);
            }
            return this.props.fetch_names_async();
        })
        
    }
    static getDerivedStateFromProps(nextProps, prevState){
        
        if(nextProps.names !== prevState.names){
            return {
                names : nextProps.names
            }
        }
        return null
    }

    renderSeparator(){
        return (
            <View
            style={{
                height : 1,
                width :'86%',
                backgroundColor: '#CED0CE',
                marginLeft : '14%'
            }}
            />
        )
    }

    handleRefresh = () => {
        this.setState({
            page : this.state.page + 1
        }, () => {
            this.props.fetch_names_refresh(this.state.page)
            
        })
    }

    handlePress = (nameObj) => {
        Actions.name({nameObj})
    }


    renderContent(){
        if(this.props.loading == true && this.state.names.length <= 0){
            return (
                <View style={styles.activityViewStyle}> 
                    <ActivityIndicator size={"large"} color={"#42d827"} style={styles.indicatorStyle}/>
                </View>
            )
        }
        // return this.state.names.map(nameObj => {
            return (
                <View>
                    <List containerStyle={{borderBottomWidth :0,borderTopWidth : 0,marginTop:0,
                paddingBottom : 50}}>
                <FlatList
                data={this.state.names}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => Actions.name({nameObj :item})}>
                        <ListItem
                        key = {item.id}
                        title={item.name}
                        hideChevron={true}
                        subtitle= {item.meaning}
                        />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent = {this.renderSeparator}
                refreshing ={this.state.refreshing}
                onRefresh={this.handleRefresh}
                />

                </List>
                </View>
            )
        // })
    }
    render(){
        return (
            <View style={styles.containerStyle}>
                {this.renderContent()}
                <TouchableOpacity style={styles.touchableStyle}>
                    <Icon name="search"/>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const {names,err,loading} = state.namesArray
    return {names,err,loading}
}

const styles = StyleSheet.create({
    activityViewStyle : {
        display : 'flex',
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center',
    },
    indicatorStyle : {
        alignSelf : 'center',
        top:50
    }, 
    touchableStyle : {
        position :'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        width :70,
        height : 70,
        borderRadius : 50,
        backgroundColor : '#42d827',
        bottom : 30,
        right : 20
    },
    containerStyle : {
        display : 'flex',
        flex :1
    }
})
 export default connect(mapStateToProps,{fetch_names_action, fetch_names_async, fetch_names_refresh})(NameList);