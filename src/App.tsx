import './App.css';
import {ThemeProvider } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import customeTheme from './Theme/customeTheme';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductDetails from './pages/pageDetails/ProductDetais';
import Review from './pages/Review/Review';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/CheckOut/CheckOut';
import Account from './pages/Accounts/Account';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          {/* {<Home/>} */}
         {/* { <Product/>} */}
         {/* <ProductDetails/> */}
         {/* <Review/> */}
         {/* <Cart/> */}
         {/* <CheckOut/> */}
         {/* <Account/> */}
         <Routes >

            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:product' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkOut' element={<CheckOut/>}/>
            <Route path='/account/*' element={<Account/>}/>
         </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
