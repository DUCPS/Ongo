import React, { useState, useEffect } from 'react';
import '../App.css';
import LinkFun from '../components/links.js';
import kingRat from '../media/art_folder/245056479_270857714915619_7617761666921114920_n.jpg';
import mushMan from '../media/art_folder/245056190_4432428546871770_361691049488237531_n.jpg';

const Art = () => {

    return(
        <main class="flex flex-col h-screen">
            <LinkFun secondLink = "contact"></LinkFun>
            <div class="flex-auto overflow-y-auto p-5 w-screen">
                <div class="space-y-4 m-auto w-80">
                    <p class="text-5xl font-mono text-center">A     R     T</p>
                    <img src={kingRat} />
                    <img src={mushMan} />
                </div>
            </div>
        </main>
    )
}

export default Art;