
import './App.css';

import { Routes ,Route } from 'react-router-dom';

import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    // <div className="App">
    
     <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Gallery/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Route>
     </Routes>
    
    // </div>

   
  );
}

export default App;
