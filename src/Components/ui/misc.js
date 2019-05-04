import React from 'react';
import { Link } from 'react-router-dom';
// import firebase = require('firebase');
// import { DataSnapshot } from '@firebase/database';

export const Tag = (props) => {
    const template = <div
            style={{
                background:props.bck,
                fontSize:props.size,
                color:props.color,
                padding:'5px 10px',
                display:'inline-block',
                fontFamily:'righteous'
            }}
            > 
                { props.children }
            </div>

    if(props.link){
        return(
            <Link to={props.linkto} >
                {template}
            </Link>
        )
    } else {
        return template;
    }
}

export const firebaseLooper = (snapshot) => {
    let data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data;
}

export const reverseArray = (actualArray) => {
    let revesedArray = [];
    for(let i = actualArray.length -1 ; i >= 0; i--) {
        revesedArray.push(actualArray[i]);
    }
    return revesedArray;
}

export const validate = (element) => {
    let error = [true, ''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'This must be valid email': ''}`;
        error = !valid ? [valid, message]: error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        error = !valid ? [valid, message]: error;
     }
     return error;
}