import React from 'react';


export default function(props) {
    return (
        <div className={`w-full flex flex-col justify-center items-center mt-8`}>
            <img width={props.width} height={props.height} src={props.image}/>
            <div className="text-primary font-bold text-xl">{props.label}</div>
        </div>
    );
};