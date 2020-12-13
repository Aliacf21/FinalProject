import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from "./InfoElements.js";
import ResearchCards from "../ResearchCard/ResearchCards.js";
import Card  from "../Card/Cards.js";
import ContentCard  from "../ContentBlock/ContentCards.js";

function InfoSection({role, tools, team, description, alt, id, link1, link2, link3, hasLink, title}) {
	if (id == "Projects") { 
		return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
					<h2>{id}</h2>
					<Card section={"Projects"}/>
				</InfoWrapper>
			</InfoContainer>
		</>)}
		
	else if (id == "Research") {
	return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
					<h2>{id}</h2>
					<ResearchCards section={"Research"}/>
				</InfoWrapper>
			</InfoContainer>
		</>)}

	else if (id == "About Me") {
	return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
				<h2>{id} </h2>
					<ContentCard section={id} description={description}/>
				</InfoWrapper>
			</InfoContainer>
			
		</>)}

	else if (id == "Contact") {
	return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
				<h2>{id} </h2>
					<ContentCard section={id} description={description} link1={link1} link2={link2}/>
				</InfoWrapper>
			</InfoContainer>	
		</>)}

	else if (id == "Overview") {
	return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
					<h2>{id} </h2>
					<Card role={role} team={team} tools={tools} section={"Overview"} alt={alt} myTitle={link3} description={description} hasLink={hasLink} title = {title}/>
				</InfoWrapper>
			</InfoContainer>
		</>)}

	else {
	return (
		<>
			<InfoContainer id={id}>
				<InfoWrapper>
					<h2>{id} </h2>
					<ContentCard section={id} description={description} hasLink={hasLink}/>
				</InfoWrapper>
			</InfoContainer>
			
		</>)}

}

export default InfoSection