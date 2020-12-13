import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import { Test_overview, Test_Research_Question, Test_Experiment, Test_Results} from "../components/InfoSection/Data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Project"} isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...Test_overview}/>
			<InfoSection  {...Test_Research_Question}/>
			<InfoSection  {...Test_Experiment}/>
			<InfoSection  {...Test_Results}/>	
		</>
	)
}

export default Project