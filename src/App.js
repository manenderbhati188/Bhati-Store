import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {ShopCategories} from './Pages/ShopCategories'
import {Shop} from './Pages/Shop';
import {Cart} from './Pages/Cart';
import {LoginSignUp} from './Pages/LoginSignUp';
import {Product} from './Pages/Product';
import {Footer} from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategories category="men" banner={banner_mens}/>}/>
          <Route path='/women' element={<ShopCategories category="women" banner={banner_women}/>}/>
          <Route path='/kids' element={<ShopCategories category="kid" banner={banner_kids}/>}/>
          <Route path='Product'>
              <Route path=':ProductId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
