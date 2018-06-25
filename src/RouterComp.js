import React, {Component} from 'react';
import {Router, Stack, Scene, Tabs}  from 'react-native-router-flux';

import Swiper from './comp/Swiper';
import NameList from './comp/NameList';
import Name from './comp/Name'
const RouterComp = () => {
    return (
        <Router scenStyle={{paddingTop : 0}}>
        <Stack key="root" hideNavBar={true}>
        <Scene key="splash" component={Swiper} initial/>
        <Stack key="main" hideNavBar={true}>
            <Scene key="names" component={NameList} title=" Akojọ Orukọ" hideNavBar={false}/>
            <Scene key="name" component={Name} title="fifọ si wẹwẹ Orukọ" hideNavBar={false}/>
        </Stack>
        </Stack>
        </Router>
    )
}

export default RouterComp;