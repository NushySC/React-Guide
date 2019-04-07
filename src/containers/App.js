//import Radium, { StyleRoot } from 'radium';
// import Person from '../components/Persons/Person/Person';
import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor( props ) {
    super( props );
    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      persons: [
        { id: '1', name: 'Anna', age: 28 },
        { id: '2', name: 'Alicia', age: 29 },
        { id: '3', name: 'Ariel', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

  // Commentted out as it is now a part of the constructor. The state can now be set here , but initilizing it in the cosntructor is the old way to do it.
  // state = {
  //   persons: [
  //     { id:'1', name: "Anna", age: 29},
  //     { id:'2', name: "Alicia", age: 38},
  //     { id:'3', name: 'Ariel', age: 41}
  //   ],
  //   otherState: 'whatever',
  //   showPersons: false,
  // }

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
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow, 
      toggleClicked: this.state.toggleClicked + 1 
      }
    } );
  }

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

  render () {
    console.log( '[App.js] Inside render()' );
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState( { showPersons: true } ) }}>Show People</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass( App, classes.App );
