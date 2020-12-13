import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import ProjectNavBar from "../components/ProjectNavBar/index";
import InfoSection from "../components/InfoSection";
import {BunBunBakeShop_overview, BunBunBakeShop_problems, BunBunBakeShop_process, BunBunBakeShop_solutions} from "../components/InfoSection/data";



//Renders Bun Bun Bake shop page
function Project() {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	//Mobile navbar, regular nav bar, overview, problems, process, solutions content block
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