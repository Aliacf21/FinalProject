import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo,  homeObjThree, homeObjFour} from "../components/InfoSection/data";



//Home page - loads in about me, project, research tiles and contact section
function Home() {
	
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<InfoSection  {...homeObjThree}/>
			<InfoSection  {...homeObjOne}/>
			<InfoSection  {...homeObjTwo}/>
			<InfoSection  {...homeObjFour}/>
		</>
	)
}

export default Home