import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import ContentCard from "../components/ContentBlock/ContentCards";

import { homeObjOne, homeObjTwo,  homeObjThree, homeObjFour} from "../components/InfoSection/Data";



function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...homeObjThree}/>	
		</>
	)
}

export default Project