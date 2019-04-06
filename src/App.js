import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Anna", age: 29},
      {name: "Alicia", age: 38},
      {name: 'Ariel', age: 41}
    ],
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

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Anna', age: 28},
      {name: event.target.value, age: 89},
      {name: 'Patricia', age: 21}
    ]})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]
    //new array from same as old array but different instance. Copy and then update state.
    persons.splice(personIndex, 1);
    this.setState( { persons: persons });
  }

  togglePersonsHandler = () => {  
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click= {() => this.deletePersonHandler(index)}
            //the alternative to arrow function will be to bind
            name={person.name} 
            age={person.age}/>
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
