import React, { useState, useEffect } from 'react';
import '../App.css';
import LinkFun from '../components/links.js';
import GetArt from '../components/getArt';

const Art = () => {

    const images = GetArt()

    return(
        <main class="flex flex-col h-screen">
            <LinkFun secondLink = "contact"></LinkFun>
            <div class="flex-auto overflow-y-auto p-5 w-screen">
                <div class="space-y-4 m-auto w-80">
                    <p class="text-5xl font-mono text-center">A     R     T</p>
                    {images.map((i) => (
                        <img src={i.src}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Art;