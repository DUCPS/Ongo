import React, { useState, useEffect } from 'react';
import '../App.css';
import {
    Link,
  } from "react-router-dom";

const Art = () => {

    const [count, setCount] = useState(0);

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
            <div class="sticky top-0 flex flex-row justify-evenly text-2xl font-mono">
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default Art;