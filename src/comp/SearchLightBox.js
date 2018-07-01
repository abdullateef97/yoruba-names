import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Kohana} from 'react-native-textinput-effects';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LightBox from './common/BaseLightBox';


class SearchLightBox extends Component {

    renderInput(){
        return (
            <Kohana
            label={'Search'}
            style={[styles.inputStyle, {backgroundColor : 'black'}]}
            iconClass={MaterialIcons}
            iconName={'search'}
            labelStyle={styles.labelStyle}
            useNativeDriver


            />
        )
    }
    render(){
        return (
            <LightBox verticalPercent={0.5} horizontalPercent={0.9} opacity={0.7}>
                <View style={styles.containerStyle}>
                    <Text>Loooooooooo</Text>
                    {this.renderInput()}
                </View>
            </LightBox>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        display: 'flex',
        flex :1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputStyle : {
        flex : 0.4
    },
    labelStyle: {
        fontSize : 20
    }
})

export default SearchLightBox