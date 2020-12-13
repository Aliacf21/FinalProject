import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import {Shuttle_overview, Shuttle_problems, Shuttle_process, Shuttle_solutions} from "../components/InfoSection/data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Project"} isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...Shuttle_overview}/>
			<InfoSection  {...Shuttle_problems}/>
			<InfoSection  {...Shuttle_process}/>
			<InfoSection  {...Shuttle_solutions}/>	
		
		</>
	)
}

export default Project