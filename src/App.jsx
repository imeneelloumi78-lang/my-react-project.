
import React, { useState, useEffect } from "react";

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("search") || "";
  });

  const stories = [
    { title: "React", url: "https://reactjs.org" },
    { title: "JavaScript", url: "https://developer.mozilla.org" },
    { title: "Node", url: "https://nodejs.org" },
  ];

 
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]); 

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    
    localStorage.setItem("search", value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My App</h1>

     
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      <List stories={filteredStories} />
    </div>
  );
};


const Search = ({ searchTerm, onSearch }) => (
  <div>
    <input type="text" value={searchTerm} onChange={onSearch} />
  </div>
);

const List = ({ stories }) => (
  <ul>
    {stories.map((story, index) => (
      <Item key={index} story={story} />
    ))}
  </ul>
);

const Item = ({ story }) => (
  <li>
    <a href={story.url}>{story.title}</a>
  </li>
);

export default App;


