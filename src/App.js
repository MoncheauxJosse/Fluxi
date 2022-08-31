import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
// import { BrowserRouter } from 'react-router-dom'
import Navigation from './Nav/index.js';
import Corps from './corps/corp.js';
import background from "./imageIndex/BackgroundFluxi.png";
import SignUp from "./SignUp/SingUp.js"
import Login from "./Login/Login.js"
import Accueil from "./accueil/Accueil.js"

function App() {

  


  return (
    <div >

      
      <BrowserRouter>
        <Navigation />
        <Routes>
        <Route path="" element={<Accueil/>}/>
          <Route path="/accueil" element={<Corps/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

