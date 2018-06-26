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
    return new Promise((resolve, reject) => {
        return getAsync(pageKey).then(page => resolve(page)).catch(err => reject(err));

    })
}

const setPageAsync = (page) => {
    return new Promise((resolve, reject) => {
        return setAsync(pageKey, page).then(() => resolve()).catch(err => reject(err));
    })
    
}

const getNamesAsync  = () => {
    return new Promise((resolve, reject) => {
        return getAsync(namesKey).then(names => resolve(names)).catch(err => reject(err));
    })
    
}

const setNamesAsync = (names) => {
    return new Promise((resolve, reject) => {
        return setAsync(namesKey, names).then(() => resolve()).catch(err => reject(err))
    })
    
}

export {
    getPageAsync, setPageAsync, getNamesAsync, setNamesAsync
}