import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #C4C4C4;

  @media screen and (max-width: 768px) {
		height: 60px;
  		width: 100%;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		background-color: #C4C4C4;
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
	max-width: 1100px;
	`

export const NavLogo = styled(LinkR)`
	color: black;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	width: 100%;
	align-items: left;
	margin-right: 200px;
	font-weight: bold;
	text-decoration: none;
	margin-top: 10px;
	margin-bottom: 10px;
`

export const NavLogoMobile = styled(LinkR)`
	display: block;
	position: absolute;
	top: 0;
	right: 0	
	font-size: 1.5rem;
	cursor: pointer;
	color: black;
	margin-left: 60px;
	width: 200px;
	text-decoration: none;

`

export const MobileIcon = styled.div`
	display: none;
	
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0
		transformL translate(-100%, 60%);
		font-size: 2.0rem;
		cursor: pointer;
		color: black;
		margin-top: 10px;
		margin-left: 15px;
	}
	`

export const NavMenu = styled.ul`
  height: 100%;
  width: 200px;
  position: flex;
  z-index: 1;


  background-color: #C4C4C4;
  overflow-x: hidden;

  list-style: none;



 @media screen and (max-width: 768px) {
		display: none;
	}
	`

export const NavItem = styled.li`
	height: 60px;
`

export const NavLinks = styled(LinkS)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
   margin-left: 25px;

	&.active{
		border_bottom: 3px solid #01bf71;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`











