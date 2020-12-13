import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import {BunBunBakeShop_overview, BunBunBakeShop_problems, BunBunBakeShop_process, BunBunBakeShop_solutions} from "../components/InfoSection/data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Project"} isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...BunBunBakeShop_overview}/>
			<InfoSection  {...BunBunBakeShop_problems}/>
			<InfoSection  {...BunBunBakeShop_process}/>
			<InfoSection  {...BunBunBakeShop_solutions}/>	

		</>
	)
}

export default Project