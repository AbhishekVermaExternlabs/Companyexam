import React from 'react'
import Img1 from "../assets/Image1.jpg"

export default function Content() {
	return (
		<div className="bgGray h-96 w-full">
		<div className="flex justify-center items-center">
		<img src={Img1} className="h-96"/>
		<div className="flex justify-center text-center items-center">
		<div className="w-full flex-col">
		    <div className="flex justify-center items-center">
			<h1 className="font-bold text-3xl py-5 w-5/12 text-center">Beautiful toothcare
			 Delivered to your door</h1>
			</div>
		<div className=" w-full flex justify-center items-center">
			<h1 className="text-xl font-normal w-6/12 text-center">Build personalized monthly toothcare crate with honest products that are
			better designed and more sustainable</h1>
		</div>	
		<div className="p-5">
			<button className="py-2 px-5 border border-slate-400 rounded-full">Explore craft Price</button>                         
		</div>                                                                     
		</div>
		</div>
		</div>
			
		</div>
	)
}                                                                                                                         