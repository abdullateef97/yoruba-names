import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {List, ListItem} from 'react-native-elements'
import NameItem from './NameItem'


class Name extends Component {
    onEnter(){
        Actions.refresh({
            title : this.props.nameObj.name
        })
    }
    renderExtendedMeaning(ext){
        return (
            <NameItem title="Extended Meaning" value={ext}/>
        )
    }

    renderMeaning(meaning){
        // if(meaning.includes('unknown') || meaning === null) return  null;
        return (
        <NameItem title="Itumọ (Meaning)" value={meaning}/>
         )
    }


    renderEntymology(entArr){
        return (
            <View>
                <View style={styles.etyContainer}>
                    <Text style={styles.etyText}>
                    ẹtimọlọgi (Etymology)
                    </Text>
                </View>
                {/* <NameItem title = "" seperator={false}/> */}
                {entArr.map((item) => {
                    return (
                        <NameItem title={item.part} value={item.meaning}/>
                    )
                })}
            </View>
        )
    }

    renderVariants(variants){
        if(variants == null) return null;
        return (
            <NameItem title="Iyatọ (Variants)" value={variants}/>
        )
    }
    render(){
        const {nameObj} = this.props
        return (
            <View>
                <ScrollView>
                <List containerStyle={{borderBottomWidth :0,borderTopWidth : 0,marginTop:0,
                paddingBottom : 50}}>
                    <NameItem title="Orukọ (Name)" value={nameObj.name}/>
                    {this.renderMeaning(nameObj.meaning)}
                    {this.renderExtendedMeaning(nameObj.extendedMeaning)}
                    <NameItem title = {'Silabu (Syllables)'} value={nameObj.syllables}/>
                    <NameItem title="Mọrphọlọji (Morphology)" value={nameObj.morphology}/>
                    {this.renderVariants(nameObj.variants)}
                    {this.renderEntymology(nameObj.etymology)}

                </List>
                </ScrollView>
            </View>
        )
    }

}

export default Name;

const styles = StyleSheet.create({
    etyContainer : {
        paddingHorizontal : 20,
        paddingTop : 15,
    },
    etyText : {
        fontSize : 20,
        fontWeight : '300'
    }
})