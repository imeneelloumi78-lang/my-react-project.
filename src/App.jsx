import React, { useState, useEffect } from "react";


const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("react");

 
  const [url, setUrl] = useState(`${API_ENDPOINT}react`);

  
  const [stories, setStories] = useState([]);

 
  const [isLoading, setIsLoading] = useState(false);

  // Error state
  const [isError, setIsError] = useState(false);

  
  useEffect(() => {
    
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        const result = await response.json();

       
        setStories(result.hits);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

 
  const handleSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hacker News Search</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search stories..."
      />

      <button
        onClick={handleSubmit}
        disabled={!searchTerm}
        style={{ marginLeft: "10px" }}
      >
        Submit
      </button>

     
      {isError && <p>Something went wrong...</p>}

   
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {stories.map((story) => (
            <li key={story.objectID}>
              <a href={story.url} target="_blank" rel="noreferrer">
                {story.title}
              </a>
              <p>Author: {story.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;






