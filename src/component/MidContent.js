import React from 'react'
import Img1a from "../assets/Image1a.jpg" 
import Img1b from "../assets/Image1b.jpg" 
import Img1c from "../assets/Image1c.jpg" 

export default function MidContent() {
	return (
		<div className="bg-reose-500 flex mx-auto w-9/12 justify-center items-center space-x-5 p-5 mt-10">
		<div className="w-4/12 flex-col text-center ">
			<div className="flex justify-center"><img src={Img1a}/></div>
			<div className="font-semibold p-2 text-center w-full">Tell us a little <br/> about yourself</div>
			<div className="text-sm p-1">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
		</div> 
		<div className="w-4/12 flex-col text-center ">
			<div className="flex justify-center"><img src={Img1b}/></div>
			<div className="font-semibold p-2 text-center w-full">Personalise your create <br/> and stay in control</div>
			<div className="text-sm p-1">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
		</div> 
		<div className="w-4/12 flex-col text-center ">
			<div className="flex justify-center"><img src={Img1c}/></div>
			<div className="font-semibold p-2 text-center w-full">Get it delivered to your  <br/> door, on your schedule</div>
			<div className="text-sm p-1">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
		</div> 
			
		</div>
	)
}