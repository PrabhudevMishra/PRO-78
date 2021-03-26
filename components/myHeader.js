import React from 'react';
import {Header} from 'react-native';

const MyHeader = (props)=>{
    <Header
    centerComponent={{
        text: props.title,
        style: { color: "#202", fontSize: 20, fontWeight: "bold" },
      }}
      backgroundColor="#160"
    />
}