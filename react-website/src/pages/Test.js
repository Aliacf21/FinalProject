import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ResearchNavBar from "../components/ResearchNavBar/index";
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
		<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<ResearchNavBar toggle={toggle}/>
			<InfoSection  {...Test_overview}/>
			<InfoSection  {...Test_Research_Question}/>
			<InfoSection  {...Test_Experiment}/>
			<InfoSection  {...Test_Results}/>	
		</>
	)
}

export default Project