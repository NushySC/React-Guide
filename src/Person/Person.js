import React from 'react';
import './Person.css';

const person = ( props ) => {
    // return <p>I'm a {props.name} and I am
    //  {Math.floor(Math.random()*30)} years old</p>
    // return <p>I'm a {props.name} and I am
    //  {props.age} years old</p>
 
    //function components cannot use state
return (
            <div className="Person">
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        )
    };
    
    export default person;