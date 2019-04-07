import React, { Component } from 'react';
import classes from './Person.css';

//import Radium from 'radium'

// const person = ( props ) => {
    //    const style = {
    //        '@media (min-width: 500px)': {
    //            width: '450px'
    //        }
    //    }
    // return <p>I'm a {props.name} and I am
    //  {Math.floor(Math.random()*30)} years old</p>
    // return <p>I'm a {props.name} and I am
    //  {props.age} years old</p>
 
    //function components cannot use state

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside ComponentWilMount()')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside ComponentDidMount()')
      }

    render () {
        return (
            <div className= {classes.Person}>
                <button className = {classes.Delete}type='text'onClick={this.props.click}>X</button>
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}    
    
export default Person;