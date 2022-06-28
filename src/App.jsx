import { useState } from 'react';
import {Hero} from './layout/Hero';
import { NavBar } from "./layout/Navbar";
import { Card } from "./components/Card";


function App() {
  

  return (
      <div className="">
          <NavBar />
          <Hero />
          <Card />
      </div>
  );
}

export default App
