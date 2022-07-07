
import './App.css';
//import { BrowserRouter } from 'react-router-dom'
import Navigation from './Nav/index.js';
import Corps from './corps/corp.js';
import background from "./imageIndex/BackgroundFluxi.png";

function App() {

  const containerStyle = {
    backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      with:'100%',
      height: '800px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      
    }

    

    return (
      <div style={containerStyle}>
       <Navigation/>
        <Corps/>
      </div>
    );
}

export default App;

