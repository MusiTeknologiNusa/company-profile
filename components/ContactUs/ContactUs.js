import React from 'react';


export default function(props) {
   
    return (
        <div className="flex  flex-wrap mt-8 lg:ml-40 lg:mr-40 lg:mt-40 md:ml-8 md:mr-8">
        <div className="w-full md:w-3/5  p-4  bg-white text-gray-200 md:rounded-lg">
            <h2 className=" sec-text text-center md:text-left">Hubungi Kami Segera<br></br>Untuk Kualitas</h2>
            <h2 className="fourth-text mt-4 text-center md:text-left">Hubungi kami untuk menggunakan jasa kami</h2>
        </div>
        <div className="w-full text-center md:w-2/5 bg-white p-4 md:rounded-lg">
            <button className=" hover:bg-green-500 text-white font-bold py-4 px-4 mt-10 primarybutton ">Hubungi Kami</button>

        </div>

    </div>
    );
};