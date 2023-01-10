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
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

    </BrowserRouter >
  );
}

export default App;
