import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Components/Home';
import About from './Pages/About';
import Services from './Pages/Services'
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      {/* Use BrowserRouter instead of Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
