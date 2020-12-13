import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS, animateScroll as scroll } from "react-scroll"


export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: #C4C4C4;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	
`

export const CloseIcon = styled(FaTimes)`
	color: black;
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	left: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;

`

export const SidebarWrapper = styled.div `
	color: #fff;
`
export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`
export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: black;
	cursor: pointer;

	&:hover {
		font-weight: bold;
		transition: 0.2s ease-in-out;
	}
`

export const SidebarLinkR = styled(LinkR)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: black;
	cursor: pointer;

	&:hover {
		font-weight: bold;
		transition: 0.2s ease-in-out;
	}
`

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 16px 64px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color:red;
	}





`






