import { Routes, Route } from 'react-router-dom';
import { Home } from './front/js/pages/Home';
import { Navbar } from './front/js/component/navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
    </>
    
  );
}

export default App;
