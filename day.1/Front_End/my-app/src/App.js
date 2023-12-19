import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav'
import Add_product from './component/Add_product'
import Barcode from './component/Barcode';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='add-product' element={<Add_product></Add_product>}></Route>
          <Route path='barcode' element={<Barcode></Barcode>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
