import './App.css';
import Img from './Img.js';
import Name from './Name.js';
import About from './About.js';

function App() {
  return (
    <div className='pad'>
      <div className="d_flex">
        <div className='w_40'>
          <Img />
        </div>
        <div className='w_60'>
          <Name/>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;
