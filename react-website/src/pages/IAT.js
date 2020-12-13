import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ResearchNavBar from "../components/ResearchNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import { IAT_overview, IAT_Research_Question, IAT_Experiment, IAT_Results} from "../components/InfoSection/data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Research"} isOpen={isOpen} toggle={toggle}/>
			<ResearchNavBar toggle={toggle}/>
			<InfoSection  {...IAT_overview}/>
			<InfoSection  {...IAT_Research_Question}/>
			<InfoSection  {...IAT_Experiment}/>
			<InfoSection  {...IAT_Results}/>	
		</>
	)
}

export default Project