import Config from './config'
import './App.css';
import close from './close-line.png';
import check from './check-line.png';

const { name } = Config;

/**
 * Game Logic
 */
const left = [];
const right = []; 
const min = 1; 
const max = 1000;

function pick(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function populate(arr, nbr) {
  if(!arr.includes(nbr)) {
    arr.push(nbr);
    return arr;
  } else {
    return populate(arr, pick(min, max))
  }
}

function multiPop() {
  populate(left, pick(min, max));
  populate(right, pick(min, max));
  // TODO: redo!
  if(left[0] === right[0]) {
    left.pop();
    right.pop();
    populate(right, pick(min, max));
    populate(left, pick(min, max));
  }
}

// Populate
multiPop();
multiPop();
multiPop();
multiPop();
multiPop();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
      </header>
      <main className="App-main">
        <div className="top">
          {/* TODO: Generate random image */}
          <div id="splide" className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    Slide!
                  </li>
                  <li className="splide__slide">slide !!!</li>
                  <li className="splide__slide">slide !!!</li>
                </ul>
              </div>
            </div>
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
