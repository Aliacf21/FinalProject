import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavLogoMobile, NavBtn, NavBtnLink } from "./NavbarElements.js";
import { FaBars } from "react-icons/fa";

//If the page is a project -> Render project nav bar
const ProjectNavBar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
				<MobileIcon onClick={toggle}>
					<FaBars />
					//Link back to the main page
					<NavLogoMobile to="/">Alia Friedman</NavLogoMobile>
				</MobileIcon>
				
				<NavMenu>

				<NavLogo to="/">Alia Friedman</NavLogo>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-200} duration={500} to="Overview">Overview</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-200} duration={500} to="Research Question">Research Question</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-0} duration={500} to="Experiment">Experiment</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-0} duration={500} to="Results">Results</NavLinks>
					</NavItem>

					
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default ProjectNavBar
