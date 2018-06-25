import React, {Component} from 'react';
import axios from 'axios';

const BASE_URL = 'http://yorubaname.com/v1/'

const fetchNames = (page) => new Promise((resolve, reject) => {
    const url = BASE_URL+'names?page='+page;
    return fetch(url).then(response => resolve(response.json()))
                    .catch(err => reject(err));
    
})

const search = (name) => new Promise((resolve,reject) => {
    const url = BASE_URL+'search?q='+name;
    return fetch.get(url).then(response => resolve(response.json()))
                        .catch(err => reject(err))
})

export {fetchNames, search}