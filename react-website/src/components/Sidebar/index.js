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
				<SidebarLink to="Projects">
					Projects
				</SidebarLink>

				<SidebarLink to="Research">
					Research
				</SidebarLink>

				<SidebarLink to="About Me">
					About Me
				</SidebarLink>

				<SidebarLink to="Contact">
					Contact
				</SidebarLink>

				<SidebarLink to="Resume">
					Resume
				</SidebarLink>



			</SidebarMenu>
		


		</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar