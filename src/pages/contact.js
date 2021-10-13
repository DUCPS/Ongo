import React from 'react';
import wink from '../media/wink.mp4';
import '../App.css';
import {
    Link,
  } from "react-router-dom";
import LinkFun from '../components/links.js';

const Contact = () => {
    return (
        <main class="flex flex-col h-screen">
            <LinkFun secondLink = "art"></LinkFun>
            <div class="flex-auto overflow-y-auto p-10 w-screen font-mono space-y-10">
                <p class="text-5xl text-blue-gray text-center">
                    Contact me
                </p>
                <p class="text-2xl text-black text-center">
                    Hello, my name is Isaac and I like to do frequently cursed always janky art.
                    This website is mainly just so I can keep track of my art in a fun way but if you'd like a commission please contact me and we can work something out!
                </p>
                <div class="flex relative justify-evenly hover-trigger">
                    <video class="mx-auto" className='videoTag' autoPlay loop muted>
                        <source src={wink} type='video/mp4' />
                    </video>
                    <div class="absolute m-auto h-auto text-white text-center hover-target">
                        <p class="text-7xl pb-60">MULLET</p>
                        <p class="text-4xl pb-60">MIDDLE PARTING</p>
                        <p class="text-5xl">MASSIVE EGO</p>
                    </div>
                </div>
                <div class="text-center md:mx-auto md:text-center text-2xl font-mono space-y-5">
                    <p class="text-gray-500">isaac@brocklesby.me.uk</p>
                    <p class="pb-5 text-gray-500">@isaacbrocklesby</p>
                    <a class="hover:text-black text-gray-500" href="cv_v3.pdf" download="cv.pdf">
                        Download CV
                    </a>
                    <p class="text-gray-500">DISCLAIMER:</p>
                    <p class="text-gray-500">the mullet and middle parting are no more:( the massive ego still remains however so don't despair</p>
                </div>
            </div>
        </main>
    )
}

export default Contact;