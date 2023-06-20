import React from 'react';
import Novbar from './Components/Novbar';
import Home from './Components/Home';
import Footer from './Components/footer';
import Royxat from './Components/Royxat';
import Login from './Components/login';
import './App.css';
import { BrowserRouter  as Router , Routes , Route   } from 'react-router-dom';  
function App() {
  return (
      <Router>
        <div className="App">
        <Novbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/royxat" element={<Royxat/>}/>
          <Route path="/login" element={< Login/>}/>
        </Routes>
        <Footer/>
      </div>  
      </Router>
  );
}

export default App;