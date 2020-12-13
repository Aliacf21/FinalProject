import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import { programming_overview, programming_problems, programming_process, programming_solutions} from "../components/InfoSection/data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Project"} isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...programming_overview}/>
			<InfoSection  {...programming_problems}/>
			<InfoSection  {...programming_process}/>
			<InfoSection  {...programming_solutions}/>
		</>
	)
}

export default Project