import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [card, setCard] = useState(null);

  useEffect(() => {
    const a = async () => {
      const res = await fetch("https://biriyani.anoram.com/get", {
        // "credentials": "include",
        // "method": "POST",
      });

      console.log(res);
      setCard(await res.json());
    };
    a();
  }, []);


  return (
    <div>
      <header>
        <div>you clicked me {count} times</div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
      <div>
        <h1>Ahmed E</h1>
        <ul>
          <li>
            <a href="https://linkedin.com/in/">Linkedin</a>
          </li>
          <li>
            <a href="/path/to/resume">Resume</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Projects</h2>
        <ul>
          <li>IBKR Bot</li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Git</li>
        </ol>
      </div>
      <div>
        <h3>Here's a biriyani I made for you</h3>
        {card && <img src={card.image} style={{
          width: "80%"
        }}/>}
      </div>
    </div>
  );
}

export default App;
