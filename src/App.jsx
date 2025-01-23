import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './components/User/User';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Helper/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route
              path='conta/*'
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
};

export default App;
