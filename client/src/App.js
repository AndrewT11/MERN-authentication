import React from "react";
import { BrowserRouter,Routes,  Route } from "react-router-dom"

//page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Header from "./components/Header"

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
