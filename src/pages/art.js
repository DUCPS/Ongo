import React from 'react';
import '../App.css';
import {
    Link,
  } from "react-router-dom";

function Art() {
    return(
        <div class="">
            <div class="sticky top-0 flex flex-row justify-evenly"> 
                <div>
                    <Link to="/" class="text-2xl hover:text-black text-gray-500 font-mono">
                        home
                    </Link>
                </div>
                <div>
                    <Link to="/contact" class="text-2xl hover:text-black text-gray-500 font-mono">
                        contact
                    </Link>
                </div>
            </div>
            <div class="text-9xl text-center">Coming soon!!!!</div>
        </div>
    )
}

export default Art;