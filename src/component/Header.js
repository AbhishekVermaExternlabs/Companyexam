import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div>
		<header className="flex">
			<nav className="container mx-auto flex w-11/12 justify-between items-center">
				<h1 className="font-bold">hippo&crate</h1>
				<div className="flex space-x-5 p-5 items-center text-sm">
					<Link to="#">Home</Link>
					<Link to="#">Products</Link>
					<Link to="#">About</Link>
					<Link to="#">Blog</Link>
					<Link to="#">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="9"></circle>
   <circle cx="12" cy="10" r="3"></circle>
   <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
</svg>
					</Link>
					<Link to="#">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="6" cy="19" r="2"></circle>
   <circle cx="17" cy="19" r="2"></circle>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l14 1l-1 7h-13"></path>
</svg>
					</Link>
				</div>
			</nav>
		</header>
			
		</div>
	)
}