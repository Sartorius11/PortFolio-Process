import { Routes, Route } from 'react-router-dom';
import { Home } from './front/js/pages/Home';
import { Navbar } from './front/js/component/Navbar';
import { Footer } from './front/js/component/Footer';
import { About } from './front/js/pages/About';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
    
  );
}

export default App;
