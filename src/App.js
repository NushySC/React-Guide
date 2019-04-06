import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'red',
      font: 'Helvetica',
      color: 'white',
      border: '0.3em solid black',
      padding: '0.8em',
      cursor: 'pointer',
      marginBottom: '2em',
      borderRadius: '0.5em',

    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

     return (
       <div className="App">
         <h1> Hi, I am a React App</h1>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}> Toggle persons</button>
          {persons}
       </div>
     );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App'))
  }
}

export default App;
