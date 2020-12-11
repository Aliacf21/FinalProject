import React from 'react'
import { Button } from "../ButtonElements"
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from "./InfoElements.js";

import ResearchCards from "../ResearchCard/ResearchCards.js";
import Card  from "../Card/Cards.js";
import ContentCard  from "../ContentBlock/ContentCards.js";

function InfoSection({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt, primary, dark, dark2, link1, link2, link3}) {
	if (id == "Projects") { 
		return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
				<h2>{id} </h2>
			<Card section={"Projects"}/>
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)


	}
	else if (id == "Research") {

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
			
				<InfoWrapper>
				<h2>{id}</h2>
			<ResearchCards section={"Research"}/>
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}


	else if (id == "About Me") {

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
			
				<InfoWrapper>
				<h2>{id} </h2>
			<ContentCard section={id} description={description}/>
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}

	else if (id == "Contact") {

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
			
				<InfoWrapper>
				<h2>{id} </h2>
			<ContentCard section={id} description={description} link1={link1} link2={link2}/>
			
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}

	else if (id == "Overview") {

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
			
				<InfoWrapper>
				<h2>{id} </h2>
			<Card section={"Overview"} myTitle={link3}/>
			
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}

else {

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
			
				<InfoWrapper>
				<h2>{id} </h2>
			<ContentCard section={id} description={description}/>
			
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}


}

export default InfoSection