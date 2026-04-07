import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";
import "./App.css";

/* ---------------- GLOBAL DATA ---------------- */
const stories = [
  {
    objectID: "1",
    title: "Understanding React",
    url: "https://react.dev",
    author: "Dan Abramov",
    points: 150,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "Modern JavaScript",
    url: "https://developer.mozilla.org",
    author: "MDN",
    points: 98,
    num_comments: 21,
  },
];

const Header = () => <h1>Hacker News</h1>;

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};


const List = () => (
  <div>
    {stories.map((story) => (
      <div key={story.objectID}>
        <h3>
          <a href={story.url || "#"} target="_blank" rel="noreferrer">
            {story.title}
          </a>
        </h3>

        <p>
          <span>By {story.author}</span> |{" "}
          <span>{story.points} points</span> |{" "}
          <span>{story.num_comments} comments</span>
        </p>
      </div>
    ))}
  </div>
);


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <Search />
      <List />
    </div>
  );
};

export default App;

