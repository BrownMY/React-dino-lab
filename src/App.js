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
  render() {
    const post = {
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Check out this body property",
      comments: ["First!", "Great post", "Hire this author now!"]
    };
    //map returns an array
    const comments = post.comments.map(comment => (<Comment text={comment} />))


    return (
      <div className="App">
        {/* Use curly brackets to access variables */}
        <h1>{this.state.title}</h1>
        <p>{post.author}</p>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        <p>{post.comments[0]}</p>

        { comments}
      //name and store variable before return statement
      </div>
  
    );
  }
}

export default App;
