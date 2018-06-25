import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';


export default class NameItem extends Component{
    
    renderSeperator = (seperator) => {
        if(!seperator) return null;
        return (
            <View
            style={{
                height : 2,
                width :'95%',
                backgroundColor: '#CED0CE',
                marginLeft : '5%'
            }}
            />
        );
    }

    render(){
        const {title, value} = this.props
        const seperator = this.props.seperator || true;
        return (
            <View>
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.valueStyle}>{value}</Text>
            </View>
            {this.renderSeperator(seperator)}
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        paddingHorizontal : 20,
        paddingVertical : 15,
    },
    titleStyle: {
        fontSize : 20,
        fontWeight : '300'
    },
    valueStyle : {
        fontSize : 25,
        fontWeight : '700'
    }   
})