import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navr from './components/Navr'
import Footer from './components/Footer';
import Sing_Up from './components/Sing_Up';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Add_Product from './components/Add_Product';
import ProductList from './components/ProductList';
import Update_Product from './components/Update_Product'
import Profile from './components/Profile';
import Homepage from './components/Homepage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navr />
        <Routes>
         <Route path='/' element={<Homepage />}></Route>
         <Route element = {<PrivateComponent />} >
          <Route path='products' element={<h1>{<ProductList />}</h1>}></Route>
          <Route path='add' element={<Add_Product></Add_Product>}></Route>
          <Route path='update/:id' element={<Update_Product></Update_Product>}></Route>
          <Route path='logout' element={<h1> Logout listing component</h1>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
         
          </Route>
          <Route path='signup' element={<Sing_Up></Sing_Up>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
