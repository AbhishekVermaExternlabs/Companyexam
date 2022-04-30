import React from 'react'
import Img2 from "../assets/Image2.jpg"
import Img2a from "../assets/Image2a.jpg"
import Img3 from "../assets/Image3.jpg"
import Img4 from "../assets/Image4.jpg"
import Img5 from "../assets/Image5.jpg";

export default function Content() {
	return (
		<div>
		<div className="bgCream h-96 w-full mt-20">
		<div className="flex justify-center items-center">
		<div className="flex justify-center text-center items-center">
		<div className="w-full flex-col">
		    <div className="flex justify-center items-center">
			<h1 className="font-bold text-3xl py-5 w-5/12 text-center ">Why we're diffrent.</h1>
			</div>
		<div className=" w-full flex justify-center items-center">
			<h1 className="text-xl font-normal w-6/12 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </h1>
		</div>	
		<div className="p-5">
			<button className="py-2 px-5  rounded-full">
				<img src={Img2a}/>
			</button>                         
		</div>                                                                     
		</div>
		</div>

		<img src={Img2} className="h-96"/>
		</div>

		<div className="flex">
			<div className="w-6/12 h-96  flex justify-center items-center bgDarkGray">
				<img src={Img3} className="h-96"/>
			</div>
			<div className="w-6/12  flex justify-center items-center">
			<div className="flex-col text-center">
			<h1 className="text-3xl p-2 font-bold">Better Quality</h1>
			<div className=" w-full flex justify-center items-center p-5">
			<h1 className="text-md font-normal w-6/12 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </h1>
		</div>	
			<button className="border border-slate-400 rounded-full py-1 mt-2 px-5">Find out why</button>
			</div> 
			</div>  
		</div>
		<div className="flex">
			<div className="w-6/12  h-96 flex justify-center items-center">
			<div className="flex-col text-center">
			<h1 className="text-3xl p-2 font-bold">Better For You</h1>
			<div className=" w-full flex justify-center items-center p-5">
			<h1 className="text-md font-normal w-6/12 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </h1>
		</div>	
			<button className="border border-slate-400 rounded-full py-1 mt-2 px-5">See him</button>
			</div> 
			</div>  

			<div className="w-6/12  flex justify-center items-center bgCream">
				<img src={Img4} className="h-96"/>
			</div>
		</div>
<div>
		<img src={Img5} className="w-6/12 h-12"/>
	
</div>			
		</div>
		</div>
	)
}                                                                                                                         