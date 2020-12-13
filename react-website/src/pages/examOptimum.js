import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import ContentCard from "../components/ContentBlock/ContentCards";

import {examOptimum_overview, examOptimum_problems, examOptimum_process, examOptimum_solutions} from "../components/InfoSection/data";


//ExamOptimum page
function Project() {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
		<Sidebar section={"Project"} isOpen={isOpen} toggle={toggle}/>
			<ProjectNavBar toggle={toggle}/>
			<InfoSection  {...examOptimum_overview}/>
			<InfoSection  {...examOptimum_problems}/>
			<InfoSection  {...examOptimum_process}/>
			<InfoSection  {...examOptimum_solutions}/>	
		</>
	)
}

export default Project