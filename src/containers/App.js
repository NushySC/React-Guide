import React, { Component } from 'react';
import classes from'./App.css';
//import Radium, { StyleRoot } from 'radium';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id:'1', name: "Anna", age: 29},
      { id:'2', name: "Alicia", age: 38},
      { id:'3', name: 'Ariel', age: 41}
    ],
    otherState: 'whatever',
    showPersons: false,
  }

  // swithcNameHandler = (newName) => {
  //   //console.log('Was clicked');
  //   //Don't change te state directly, se setStatethis.state.persons[0].name = "Maximilian";
  //   this.setState({persons: [
  //     {name: newName, age: 38},
  //     {name: 'Patricia', age: 21}
  //   ]})
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const persons = Object.assign({}, this.state.persons[personsIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]
    //new array from same as old array but different instance. Copy and then update state.
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   font: 'Helvetica',
    //   color: 'white',
    //   border: '0.3em solid black',
    //   padding: '0.8em',
    //   cursor: 'pointer',
    //   marginBottom: '2em',
    //   borderRadius: '0.5em',

    //   //radium properties, wrap in quotes because they start ith colon
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   }

    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
          // style.backgroundColor = 'blue';
          // style[':hover'] = {
          //   backgroundColor: 'lightred',
          //   color: 'black',
          }

     return (
         <div className={classes.App}>
           <Cockpit 
           showPersons={this.state.showPersons}
           persons={this.state.persons}
           clicked={this.togglePersonsHandler}/>
            {persons}
         </div>
     );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App'))
  }
}

//Component wrapping a component
export default App;
