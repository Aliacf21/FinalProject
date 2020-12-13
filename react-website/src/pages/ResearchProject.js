import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ResearchNavBar from "../components/ResearchNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import { ResearchProject_overview, ResearchProject_Research_Question, ResearchProject_Experiment, ResearchProject_Results} from "../components/InfoSection/data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Research"} isOpen={isOpen} toggle={toggle}/>
			<ResearchNavBar toggle={toggle}/>
			<InfoSection  {...ResearchProject_overview}/>
			<InfoSection  {...ResearchProject_Research_Question}/>
			<InfoSection  {...ResearchProject_Experiment}/>
			<InfoSection  {...ResearchProject_Results}/>	
		</>
	)
}

export default Project