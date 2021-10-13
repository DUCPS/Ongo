import React from 'react';
import wink from '../media/wink.mp4';
import '../App.css';
import {
    Link,
  } from "react-router-dom";
import LinkFun from '../components/links.js';

const Contact = () => {
    return (
        <main>
            <LinkFun secondLink = "art"></LinkFun>
            <div class="container flex object-none justify-center">
                <div class="flex-auto" className="contact-page">
                    <div class="flex flex-row justify-between">
                        <p class="p-4 text-3xl md:text-4xl lg:text-5xl font-mono text-right text-blue-gray">
                            Contact me
                        </p>
                    </div>
                    <div class="md:flex md:flex-row-reverse md:justify-between">
                        <div class="flex p-3 bg-gray-400 relative justify-evenly hover-trigger">
                            <video class="mx-auto" className='videoTag' autoPlay loop muted>
                                <source src={wink} type='video/mp4' />
                            </video>
                            <div class="absolute m-auto h-auto text-white text-center hover-target">
                                <p class="text-7xl pb-60">MULLET</p>
                                <p class="text-4xl pb-60">MIDDLE PARTING</p>
                                <p class="text-5xl">MASSIVE EGO</p>
                            </div>
                        </div>
                        <div class="text-center md:mx-auto md:text-center text-2xl font-mono">
                            <p class="pr-3 pt-3 text-gray-500">isaac@brocklesby.me.uk</p>
                            <p class="py-4 pr-3 text-gray-500">@isaacbrocklesby</p>
                            <a class="py-4 pr-3 hover:text-black text-gray-500" href="cv_v3.pdf" download="cv.pdf">
                                Download CV
                            </a>
                            <p class="py-4 pr-3 text-gray-500">DISCLAIMER:</p>
                            <p class="py-4 pr-3 text-gray-500">the mullet and middle parting are no more:(</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;