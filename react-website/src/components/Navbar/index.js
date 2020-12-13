import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavLogoMobile,  NavLinksResume } from "./NavbarElements.js";
import { FaBars } from "react-icons/fa";

const Navbar = ({toggle}) => {

	//Navbar for main page
	return (
		<>
			<Nav>
				<NavbarContainer>
				<MobileIcon onClick={toggle}>
					<FaBars />
					<NavLogoMobile to="/">Alia Friedman</NavLogoMobile>
				</MobileIcon>
				
				<NavMenu>

				<NavLogo to="/" >Alia Friedman</NavLogo>

					<NavItem>
						<NavLinks activeclass="active" spy={true} smooth="true" duration={500} offset={-10} to="About Me">About Me</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeclass="active" spy={true} smooth="true" duration={500} offset={-100} to="Projects">Projects</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeclass="active" spy={true} smooth="true"  duration={500} offset={-100} to="Research">Research</NavLinks>
					</NavItem>

					

					<NavItem>
						<NavLinks activeclass="active" spy={true} smooth="true"  duration={500} offset={-300} to="Contact">Contact</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinksResume to="/Resume">Resume</NavLinksResume>
					</NavItem>

					
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar