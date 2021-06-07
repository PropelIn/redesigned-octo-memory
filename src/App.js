import Config from './config'
import './App.css';
import close from './close-line.png';
import check from './check-line.png';

const { name } = Config;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
      </header>
      <main className="App-main">
        <div className="top">
          {/* TODO: Generate random image */} 
        </div>
        <div className="bottom">
          <button>
            <img src={close} alt="" />
          </button>
          <button>
            <img src={check} alt="" />
          </button>
        </div>
      </main>
      <footer className="App-footer">
        <h5>{name}</h5>
      </footer> 
    </div>
  );
}

export default App;
