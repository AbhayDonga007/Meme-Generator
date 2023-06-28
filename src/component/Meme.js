import React from 'react'
import './Meme.css'
import Navbar from './Navbar';
import Generator from './Generator';
import Footer from './Footer'

function Meme() {
    return (
        <>
            <Navbar />
            <Generator />
            <Footer />
        </>
    );
}

export default Meme;