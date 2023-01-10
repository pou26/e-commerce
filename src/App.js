import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div className="page-container">
      
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

    </BrowserRouter >


  );
}
// function App() {
//   return(
//     <BrowserRouter>
//       <div className="page-container">
//         <Routes>
//           <Route path="/login">
//             <h1>Login page</h1>
//             <LoginPage/>
//           </Route>
//           {/* <Route path="/checkout">
//             <Header/>
//             <Checkout/>
//           </Route> */}
//           <Route path="/">
//             <Header />
//             <HomePage />
//           </Route>
//           <Route path="/CartPage">
//             <Header/>
//             <CartPage/>
//           </Route>
//           <Route path="/ProductPage">
//             <Header/>
//             <ProductPage/>
//           </Route>
//           <Route path="/LoginPage">
//             <Header/>
//             <LoginPage/>
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

export default App;
