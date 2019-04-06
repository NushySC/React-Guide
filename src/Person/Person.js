import React from 'react';

const person = (props) => {
    // return <p>I'm a {props.name} and I am
    //  {Math.floor(Math.random()*30)} years old</p>
    // return <p>I'm a {props.name} and I am
    //  {props.age} years old</p>

    //function components cannot use state

    return(
        <div>
        <h3 onClick={props.click}>I'm {props.name} and I am {props.age} years old</h3>
        <p>{props.children}</p>
        <input type="text" onChange={}></input>
        </div>
    )
};

export default person;