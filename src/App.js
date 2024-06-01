import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dummyapi from './dummyapi';
import Prodetail from './prodetail';
import Cart from './cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dummyapi />} />
        <Route path="/product/:id" element={<Prodetail />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App;