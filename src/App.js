import './App.css';
import headericon from './assets/hackernews.svg';
import footericon from './assets/hackernews2.svg';
import StoriesContent from './components/StoriesContent';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={headericon} alt="Hacker News"/>
      </header>
      <StoriesContent/>
      <footer className="app__footer">
        <img src={footericon} alt="Hacker News"/>
      </footer>
    </div>
  );
}

export default App;
