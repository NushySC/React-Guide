import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass= classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    } if (props.persons.lenght <= 1) {
      assignedClasses.push(classes.bold);
    };

    return (
      <Aux>
            <h1>{ props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>It works!</p>
            <button 
              //  style={style}
            className = {btnClass}
            onClick={props.clicked}> Toggle people</button>
            <button onClick={props.login}>Log in</button>
       </Aux>
    );
}

export default cockpit;