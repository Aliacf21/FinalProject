import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements.js";


function Sidebar({isOpen, toggle}) {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
		<SidebarWrapper>
			<SidebarMenu>
				<SidebarLink to="Projects" onClick={toggle}>
					Projects
				</SidebarLink>

				<SidebarLink to="Research" onClick={toggle}>
					Research
				</SidebarLink>

				<SidebarLink to="About Me" onClick={toggle}>
					About Me
				</SidebarLink>

				<SidebarLink to="Contact" onClick={toggle}>
					Contact
				</SidebarLink>

				<SidebarLink to="Resume" onClick={toggle}>
					Resume
				</SidebarLink>



			</SidebarMenu>
		


		</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar