import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavLogoMobile, NavBtn, NavBtnLink } from "./NavbarElements.js";
import { FaBars } from "react-icons/fa";

const ProjectNavBar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
				<MobileIcon onClick={toggle}>
					<FaBars />
					<NavLogoMobile to="/">Alia Friedman</NavLogoMobile>
				</MobileIcon>
				
				<NavMenu>

				<NavLogo to="/">Alia Friedman</NavLogo>


					<NavItem>
						<NavLinks to="Projects">Projects</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Research">Research</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Projects">Overview</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Projects">Research Question</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Projects">Experiment</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Projects">Results</NavLinks>
					</NavItem>

				

					<NavItem>
						<NavLinks to="About Me">About Me</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="Contact">Contact</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="/Resume">Resume</NavLinks>
					</NavItem>

					
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default ProjectNavBar
