import { useState } from 'react';
import {Hero} from './layout/Hero';
import { NavBar } from "./layout/Navbar";
import { ListOfCards } from "./components/ListOfCards";
import { Testimonials } from './components/TestimonialsList'


function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <ListOfCards />
            <Testimonials />
        </>
    );
}

export default App
