import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

const pageKey= "hkhkhk898Page";
const namesKey = "hkhkhk898Names"

const getAsync = (key) => {
   return new Promise((resolve, reject) => {
       return AsyncStorage.getItem(key)
        .then((response) => {
            resolve(JSON.parse(response));
        }).catch(err => reject(err));
   })
}

const setAsync = (key, value) => {
        return AsyncStorage.setItem(key,JSON.stringify(value));
}

const getPageAsync = () => {
    return getAsync(pageKey).then(page => page).catch(err => {});
}

const setPageAsync = (page) => {
    return setAsync(pageKey, page);
}

const getNamesAsync  = () => {
    return getAsync(namesKey).then(names => names).catch(err => {});
}

const setNamesAsync = (names) => {
    return setAsync(namesKey, names);
}

export {
    getPageAsync, setPageAsync, getNamesAsync, setNamesAsync
}