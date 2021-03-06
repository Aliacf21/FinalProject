import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import resume from "../resume/Resume08.pdf";


import {BunBunBakeShop_overview, BunBunBakeShop_problems, BunBunBakeShop_process, BunBunBakeShop_solutions} from "../components/InfoSection/Data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar isOpen={isOpen} toggle={toggle}/>

		    <iframe src={resume} width="100%" height="1800px"> 
    </iframe>
		
			
		</>
	)
}

export default Project