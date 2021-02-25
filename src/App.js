import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  //method will update body state
  changeBody = ()=> {
    const userInput = prompt('give a new body')
    //update body state
    this.setState({ body: userInput })
  }

  render() {
    //map returns an array
    const comments = this.state.comments.map(comment => (<Comment text={comment} />))


    return (
      <div className="App">
        {/* Use curly brackets to access variables */}
        <h1>{this.state.title}</h1>
        <p>{this.state.author}</p>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
    
        { comments }
        <button onClick={this.changeBody}>Change body</button>
      </div>
  
    );
  }
}

export default App;
