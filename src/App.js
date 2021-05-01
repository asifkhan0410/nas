import './App.css';
import headericon from './assets/hackernews.svg';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={headericon} alt="Hacker News"/>
      </header>
    </div>
  );
}

export default App;
