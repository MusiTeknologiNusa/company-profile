import React from 'react';

export default function(props){
   
        return (
            <div className="flex sm:flex-row-reverse flex-wrap mt-8 ">
                <div className="w-full sm:w-2/5  p-4">
                    <img src={props.image} className="w-auto lg:w-11/12 "></img>
                </div>
                <div className="w-full text-center sm:w-3/5  p-4 sm:text-left  text-gray-700">
                    <h1 className="main-text inline ml-0 md:ml-20">Solusi Kebutuhan<br></br> <span className="ml-0 md:ml-20">Teknologi dan <span className="md:ml-20 lg:ml-0">Multimedia</span></span></h1>
                    <p className="mt-4 third-text md:ml-20">Jika anda ingin meningkatkan sistem produktiftas anda dengan <br></br>teknologi terkini, mungkin jasa <span className="purple">Muten</span> lah yang anda butuhkan</p>
                    <button className=" hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 primarybutton md:ml-20">Hubungi Kami</button>
                </div>
            </div>
        );
    
}