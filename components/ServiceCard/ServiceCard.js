import React from 'react';
import styles from './service-card.module.css';

export default function(props) {
    return (
        <div className={`w-full flex flex-col justify-center items-center ${styles['bg-black-absolute']}`}>
            <img width={props.width} height={props.height} src={props.image}/>
            <div className="text-primary font-bold text-xl">{props.label}</div>
        </div>
    );
};