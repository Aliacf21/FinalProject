import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavLogoMobile, NavBtn, NavBtnLink } from "./NavbarElements.js";
import { FaBars } from "react-icons/fa";

//Nav bar for project pages -> rendrs Overview, Problems, Process, Solutions
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
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-200} duration={500} to="Overview">Overview</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-200} duration={500} to="Problems">Problems</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-200} duration={500} to="Process">Process</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-0} duration={500} to="Solution">Solution</NavLinks>
					</NavItem>


					
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default ProjectNavBar
