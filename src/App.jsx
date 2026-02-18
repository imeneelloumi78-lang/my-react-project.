import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
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
function App() {
  return (
    <div>
      <h1>Hacker News</h1>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>

          <p>
            By {story.author} | {story.points} points |{" "}
            {story.num_comments} comments
          </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  console.log(stories[0]); // Debug: inspect one story object

  return (
    <div>
      <h1>Hacker News</h1>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>{story.title}</h3>
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hacker News</h1>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a
              href={story.url ? story.url : "#"} // fallback if url is missing
              target="_blank"                    // open in new tab
              rel="noreferrer"
            >
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
}
function App() {
  return (
    <div>
      <h1>Hacker News</h1>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a
              href={story.url ? story.url : "#"}
              target="_blank"
              rel="noreferrer"
            >
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
}


