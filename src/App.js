import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { States } from './Components/States/States';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import Buyer from './Components/Buyer/Buyer';
import Seller from './Components/Seller/Seller';
import { AP } from './Components/States/AP/AP';
import { Karnataka } from './Components/States/Karnataka/Karnataka';
import { Kerela } from "./Components/States/Kerela/Kerela";
import { Maharashtra } from "./Components/States/Maharashtra/Maharashtra";
import { Rajasthan } from "./Components/States/Rajasthan/Rajasthan";
import { Odisha } from "./Components/States/Odisha/Odisha";
import { TamilNadu } from "./Components/States/TamilNadu/TamilNadu";
import {Goa} from "./Components/States/Goa/Goa"
import { AuthProvider } from './Components/Auth/AuthContext';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/States" element={<States />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/AP" element={<AP/>}/>
            <Route path="/Karnataka" element={<Karnataka/>}/>
            <Route path="/Kerela" element={<Kerela/>}/>
            <Route path="/Maharashtra" element={<Maharashtra/>}/>
            <Route path="/Odisha" element={<Odisha/>}/>
            <Route path="/Rajasthan" element={<Rajasthan/>}/>
            <Route path="/TamilNadu" element={<TamilNadu/>}/>
            <Route path="/Goa" element={<Goa/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
