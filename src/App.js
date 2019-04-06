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

  swithcNameHandler = (newName) => {
    //console.log('Was clicked');
    //Don't change te state directly, se setStatethis.state.persons[0].name = "Maximilian";
    this.setState({persons: [
      {name: newName, age: 38},
      {name: 'Patricia', age: 21}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Anna', age: 28},
      {name: event.target.value, age: 89},
      {name: 'Patricia', age: 21}
    ]})
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
      padding: '0.4em',
      cursor: 'pointer',
      marginBottom: '2em',

    }

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
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
