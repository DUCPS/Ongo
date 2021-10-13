import {Link, } from "react-router-dom";
import React, { useState } from "react";

function LinkFun(props) {
    const [secondLink] = useState(props.secondLink);
    return(
        <div class="sticky top-0 flex flex-row justify-evenly">
            <div>
                <Link to="/" class="text-2xl hover:text-black text-gray-500 font-mono">
                    home
                </Link>
            </div>
            <div>
                <Link to={secondLink} class="text-2xl hover:text-black text-gray-500 font-mono">
                    {secondLink}
                </Link>
            </div>
        </div>
    );
}

export default LinkFun