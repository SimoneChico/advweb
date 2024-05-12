import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Login from './component/login';
import Signup from './component/signup';
import NotFound from './component/notFound';
import { AddProducts } from './component/addProducts';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
