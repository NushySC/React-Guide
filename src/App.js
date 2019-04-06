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
     return (
       <div className="App">
         <h1> Hi, I am a React App</h1>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}> Switch person</button>

{this.state.showPersons === true ? 
//React.createElement()
<div>
           <Person 
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age}
           click={this.swithcNameHandler.bind(this,'Anuska!')}
           />
           <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[0].age}>I like to paint and origami</Person>
           <Person 
           name="Ariel" 
           age="41"
           changed={this.nameChangedHandler}/>
</div> : null 
}
       </div>
     );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App'))
  }
}

export default App;
