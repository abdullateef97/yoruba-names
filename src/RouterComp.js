import React, {Component} from 'react';
import {Router, Stack, Scene, Tabs, Overlay, Lightbox}  from 'react-native-router-flux';

import Swiper from './comp/Swiper';
import NameList from './comp/NameList';
import Name from './comp/Name';
import SearchLightBox from './comp/SearchLightBox';
const RouterComp = () => {
    return (
        <Router scenStyle={{paddingTop : 0}}>
        <Overlay key="overlay">
        <Lightbox key="lighbox">
        <Stack key="root" hideNavBar={true}>
        <Scene key="splash" component={Swiper} initial/>
        <Stack key="main" hideNavBar={true}>
            <Scene key="names" component={NameList} title=" Akojọ Orukọ" hideNavBar={false}/>
            <Scene key="name" component={Name}  hideNavBar={false}/>
        </Stack>
        </Stack>
        <Scene key="search" component={SearchLightBox}/>
        </Lightbox>
        </Overlay>
        </Router>
    )
}

export default RouterComp;

// title="fifọ si wẹwẹ Orukọ"