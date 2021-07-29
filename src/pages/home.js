import React from 'react';
import cursed_welcome from '../media/cursed_welcome.jpg';
import '../App.css';
import {
    Link,
  } from "react-router-dom";

function Home() {
    return (
        <div class="flex items-center" className="welcome-page">
            <div class="md:flex md:items-center text-center">
                <div class="md:flex md:pl-2" className="welcome-greeting">
                    <p class="pl-4 text-3xl lg:text-6xl font-mono text-blue-gray md:pb-8">
                        Greetings traveller...
                    </p>
                    <div>
                        <nav>
                            <div>
                                <Link to="/art" class="text-7xl lg:text-9xl font-mono bg-white hover:text-black text-gray-500">
                                    art
                                </Link>
                            </div>
                            <div>
                                <Link to="/contact" class="text-7xl lg:text-9xl font-mono bg-white hover:text-black text-gray-500">
                                    contact
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <img class="md:object-right mx-auto h-auto" src={cursed_welcome} alt="cursed_welcome" />
            </div>
        </div>
    );
}

export default Home;