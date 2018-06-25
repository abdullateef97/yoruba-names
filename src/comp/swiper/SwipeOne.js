import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SwipeOne extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Oruko Yoruba
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor : '#42d827'
    },
    textStyle : {
        fontSize : 40,
        letterSpacing : 20,
        fontWeight : '700',
        textAlign : 'center',
        color : '#fff'
    }
})