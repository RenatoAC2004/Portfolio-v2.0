import React from "react";

import Typewriter from 'typewriter-effect';

function TextAnimation() {
    return (
        <div>
            <h1>
            Olá! Meu nome é Renato e sou um {' '}
            <span className="inline-block">
            <Typewriter
                options={{
                    strings: ['<span class="text-red-500 font-extralight">Programador.</span>', 
                    '<span class="text-green-500 font-extralight">Game-Dev.</span>', 
                    '<span class="text-yellow-500 font-extralight">Designer.</span>'
                ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                }}
                />
            </span>
            </h1>
        </div>
    )
}

export default TextAnimation;