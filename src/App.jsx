

import React, { useState, useEffect } from "react";


const initialStories = [
  { title: "React", url: "https://reactjs.org", id: 1 },
  { title: "JavaScript", url: "https://developer.mozilla.org", id: 2 },
  { title: "Node", url: "https://nodejs.org", id: 3 },
];

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("search") || "";
  });

  
  const [stories, setStories] = useState(initialStories);

  
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => story.id !== item.id
    );
    setStories(newStories);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My App</h1>

     
      <InputWithLabel
        id="search"
        type="text"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <List stories={filteredStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};


const InputWithLabel = ({
  id,
  type = "text",
  value,
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
);


const List = ({ stories, onRemoveItem }) => (
  <ul>
    {stories.map((story) => (
      <Item
        key={story.id}
        story={story}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);


const Item = ({ story, onRemoveItem }) => (
  <li>
    <a href={story.url}>{story.title}</a>
    <button onClick={() => onRemoveItem(story)}>Delete</button>
  </li>
);

export default App;


