import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";
import "./App.css";

import { useState } from "react";
import "./App.css";

const Header = () => <h1>Hacker News</h1>;


const Item = ({ story }) => (
  <div>
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
);


const List = ({ stories }) => {
  console.log("List re-render");

  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};


const Search = ({ onSearch }) => {
  console.log("Search re-render");

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};


const App = () => {
  console.log("App re-render");

  
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

  
  const [searchTerm, setSearchTerm] = useState("");

  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <Search onSearch={handleSearch} />

      
      <List stories={filteredStories} />
    </div>
  );
};

export default App;


