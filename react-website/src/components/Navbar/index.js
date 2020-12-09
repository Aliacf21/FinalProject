import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavLogoMobile, NavBtn, NavBtnLink } from "./NavbarElements.js";
import { FaBars } from "react-icons/fa";

const Navbar = ({toggle}) => {
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
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-0} duration={500} to="About Me">About Me</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-10} duration={500} to="Projects">Projects</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-10} duration={500} to="Research">Research</NavLinks>
					</NavItem>

					

					<NavItem>
						<NavLinks activeClass="active" spy={true} smooth={true} offset={-10} duration={500} to="Contact">Contact</NavLinks>
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

export default Navbar