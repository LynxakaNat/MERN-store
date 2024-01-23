import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen.js'
import Navbar from './views/components/NavBar.js'
import SearchBar from './views/components/SearchBar.js';
import LoginScreen from './views/LoginScreen.js';
import SignUpScreen from './views/SignScreen.js';
import CartScreen from './views/CartScreen.js';
import ViewScreen from './views/ViewScreen.js';
import AdminScreen from './views/AdminScreen.js';
import Orders from './views/Orders.js';
import Users from './views/Users.js';
import Delete from './views/Delete.js'
import Crodify from './views/Crodify.js';
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (

    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SearchBar click={() => setSideToggle(true)} />
      <main className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/search/:id" element={<SearchBar />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/view" element={<ViewScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/crodify" element={<Crodify />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
