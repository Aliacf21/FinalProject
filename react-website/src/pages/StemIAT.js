import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ResearchNavBar from "../components/ResearchNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import { StemIAT_overview, StemIAT_Research_Question, StemIAT_Experiment, StemIAT_Results} from "../components/InfoSection/data";


//Renders Stem IAT page
function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
			<Sidebar section={"Research"} isOpen={isOpen} toggle={toggle}/>
			<ResearchNavBar toggle={toggle}/>
			<InfoSection  {...StemIAT_overview}/>
			<InfoSection  {...StemIAT_Research_Question}/>
			<InfoSection  {...StemIAT_Experiment}/>
			<InfoSection  {...StemIAT_Results}/>	
		</>
	)
}

export default Project