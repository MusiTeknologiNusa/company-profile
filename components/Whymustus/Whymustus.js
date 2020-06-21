import React from 'react';
import checkImg from '~/assets/images/check.png';

export default function(props) {
    const skills = ["Profesional","Kompeten","Berkualitas","Terpercaya"];
    const listOfSkill = skills.map((itemSkill) => 
    <li className="mt-2">
        <img className="inline" src={checkImg}></img><span className="list-text ml-4">{itemSkill}</span>
    </li>
    );
    return (
        <div className="flex  flex-wrap mt-8">
			<div className="w-full sm:w-3/5  p-4  text-gray-200">
				<img src={props.image} className="lg:ml-40 md:ml-0 sm:mt-12"></img>
			</div>
			<div className="w-full text-center sm:w-2/5  p-4 sm:text-left  sm:mt-12 text-gray-700">
				<h2 className="sec-text">Kenapa Anda Harus<br></br>Menggunakan Jasa Kami</h2>
				<h4 className="fourth-text mt-5">Muten sangat peduli dengan Client kami yang <br></br> menginginkan fungisonal dan kualitas produk</h4>
				<ul className="ml-12 mt-8 sm:ml-0 text-left">
					<li>
						{listOfSkill}
					</li>
				</ul>

			</div>
		</div>
    );
};