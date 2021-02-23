import './App.css';
import './Comment'

function App() {
  //name and store variable before return statement
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great post", "Hire this author now!"]
  };
  //map returns an array
  const comments = post.comments.map(comment=> (<Comment text={comment}/>))

  return (
    <div className="App">
      {/* Use curly brackets to access variables */}
     <p>{post.title}</p>
     <p>{post.author}</p>
     <p>{post.body}</p>
     <p>{post.comments[0]}</p>

     { comments }
    </div>
  );
}

export default App;
