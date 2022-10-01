import {
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Cars from './components/Cars/Cars';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='container p-5'>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
