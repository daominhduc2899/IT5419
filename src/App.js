import logo from './logo.svg';
import './App.css';
import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer';
import Card from './layouts/Card';
import DieuhuongURL from './routers/DieuhuongURL.js'
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <div className="App">
      <Nav></Nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <DieuhuongURL/>
      <br/>
      <br/>
      <Footer></Footer>
      
      </div>
    </div>
  );
}

export default App;
