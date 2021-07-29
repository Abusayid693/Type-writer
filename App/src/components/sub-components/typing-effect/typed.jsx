import React from "react";
import Typed from 'react-typed';
// import "./typing.css"



export default function MytypedComponent(){
    return (
        <div className="typing-div">
         <h2>
            <Typed
                strings={[
                '24 hours of creation',
                'Win awesome prizes'
                
                ]}
                typeSpeed={80}
                loop
            />
         </h2>
        </div>
    );
}