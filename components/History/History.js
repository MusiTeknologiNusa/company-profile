import React from 'react';


export default function(props) {
   
    return (
        <div className="container mx-auto">
        <div className="mt-8">
            <div className="flex mb-4 ml-20 mr-20">
                <div className="w-full mt-16">
                    <h2 className="text-center sm:text-center sec-text text-muten">Proyek yang Telah Kami <br></br> Kerjakan</h2>
                    <h2 className="text-center sm:text-center fourth-text mt-8">Ini adalah sebagian dari apa yang telah kami kerjakan dengan berbagai<br></br> macam bidang</h2>
                </div>
            </div>
            <div className="px-2 ml-20 mr-20 mt-20">
                <div className="flex -mx-2">
                    <div className="w-full sm:w-1/3 px-2">
                        <div className="bg-gray-400 h-40 rounded-md"></div>
                    </div>
                    <div className="sm:w-1/3 px-2">
                        <div className="bg-gray-400 h-40 rounded-md"></div>
                    </div>
                    <div className="sm:w-1/3 px-2">
                        <div className="bg-gray-400 h-40 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};