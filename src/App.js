// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';
import Animation from './components/Animation';
import Working from './components/Working'
import Room from './Pages/Room';
import RoomJoin from './RoomJoin';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Change the delay as needed

    return () => clearTimeout(timer);
  }, []);

  


  return (
    <>
      {isLoading ? (
        <Animation />
      ) : (
        <BrowserRouter>
        
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Working" element={<Working />} />
            <Route path="/room/" element={<Room />} />
            <Route path="/room/:roomId" element={<RoomJoin />} />
            
          </Routes>
        </BrowserRouter>
      
      )}
      

    </>
  );
}

export default App;
