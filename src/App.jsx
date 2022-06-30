import { useState } from 'react';
import {Hero} from './layout/Hero';
import { NavBar } from "./layout/Navbar";
import { ListOfCards } from "./components/ListOfCards";
import { Testimonials } from './components/TestimonialsList';
import { Gallery } from './components/Gallery';
import { Footer } from './layout/Footer';


function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <ListOfCards />
            <Testimonials />
            <Gallery />
            <Footer />
        </>
    );
}

export default App
