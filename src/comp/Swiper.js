import React, { Component } from 'react';
import { View, TouchableOpacity, Text, NetInfo } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'
import  Sw from 'react-native-swiper';
import {fetch_names_async, fetch_names_action} from '../actions/names'
import {fetchPage} from '../actions/page'
// import {Icon} from 'react-native-elements'
import {Icon} from 'native-base'


import SwipeOne from './swiper/SwipeOne';
import SwipeTwo from './swiper/SwipeTwo'


 class Swiper extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Sw style={styles.swipeContainer} showsButtons>
            <SwipeOne/>
            <SwipeTwo/>
            </Sw>
            <TouchableOpacity onPress={() => {Actions.main({type : 'reset'})}} style={styles.touchableStyle}>
                {/* <Text style={styles.textStyle}> >> </Text> */}
                {/* <Icon name="ios-arrow-forward" style={styles.textStyle}/> */}
                <Icon name="arrow-round-forward"/>
            </TouchableOpacity>
            </View>
        )
    }
}

export default Swiper

const styles = {
    container  : {
        flex :1,
       
    },
    swipeContainer : {
       
    },

    touchableStyle : {
        position :'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        width :70,
        height : 70,
        borderRadius : 50,
        backgroundColor : 'white',
        bottom : 30,
        right : 20
    },
    textStyle : {
        fontWeight : '900',
        fontSize : 25,
        color : '#42d827'
    }

}