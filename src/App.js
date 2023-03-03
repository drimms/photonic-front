
import './App.css';

import Navigate from './component/About';
import Intro from './component/Intro';
import Header from './Navigate/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <Intro/>
      </div>
      
    </div>
  );
}

export default App;
