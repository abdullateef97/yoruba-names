import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SwipeTwo extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.boldTextStyle}>
                    Loads Yoruba Names
                </Text>
                <Text style={styles.lightTextStyle}>
                    Provides Etymological Analysis
                </Text>
                <Text style={styles.lightTextStyle}>
                    Provides Syllabic Analysis
                </Text>
                <Text style={styles.lightTextStyle}>
                    Provides Morphological Analysis
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#24b20a',
        
    },
    boldTextStyle : {
        fontSize : 25,
        fontWeight : '700',
        color : '#fff',
        textAlign : 'center',
        marginBottom : 20
    },
    lightTextStyle : {
        fontSize : 17,
        fontWeight : '300',
        color : '#fff',
        textAlign : 'center',
        marginBottom : 13
    }

})