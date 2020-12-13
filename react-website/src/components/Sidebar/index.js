import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkR } from "./SidebarElements.js";


function Sidebar({section, isOpen, toggle}) {

	if (section === "Project") {
		return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
		<SidebarWrapper>
			<SidebarMenu>

				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Overview" onClick={toggle}>
					Overview
				</SidebarLink>

				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Problems" onClick={toggle}>
					Problems
				</SidebarLink>


				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Process" onClick={toggle}>
					Process
				</SidebarLink>

				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Solution" onClick={toggle}>
					Solution
				</SidebarLink>

			</SidebarMenu>
		</SidebarWrapper>
		</SidebarContainer>
	)
	}

	

	else if (section === "Research") {
		return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
		<SidebarWrapper>
			<SidebarMenu>
				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Overview" onClick={toggle}>
					Overview
				</SidebarLink>

				<SidebarLink  activeClass="active" spy={true} smooth={true} duration={500} to="Research Question" onClick={toggle}>
					Research Question
				</SidebarLink>

				<SidebarLink  activeClass="active" spy={true} smooth={true} duration={500} to="Experiment" onClick={toggle}>
					Experiment
				</SidebarLink>


				<SidebarLink  activeClass="active" spy={true} smooth={true} duration={500} to="Results" onClick={toggle}>
					Results
				</SidebarLink>

		
			</SidebarMenu>
		


		</SidebarWrapper>
		</SidebarContainer>
	)
	}
		
	

	else {

	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
		<SidebarWrapper>
			<SidebarMenu>
				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="About Me" onClick={toggle}>
					About Me
				</SidebarLink>

				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Projects" onClick={toggle}>
					Projects
				</SidebarLink>

				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Research" onClick={toggle}>
					Research
				</SidebarLink>


				<SidebarLink activeClass="active" spy={true} smooth={true} duration={500} to="Contact" onClick={toggle}>
					Contact
				</SidebarLink>

				<SidebarLinkR activeClass="active" spy={true} smooth={true} duration={500} to="/Resume" onClick={toggle}>
					Resume
				</SidebarLinkR>

			</SidebarMenu>
		


		</SidebarWrapper>
		</SidebarContainer>
	)
	}
}

export default Sidebar