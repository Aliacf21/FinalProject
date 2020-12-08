import React from 'react'
import { Button } from "../ButtonElements"
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from "./InfoElements.js";

import ResearchCards from "../ResearchCard/ResearchCards.js";

import Card  from "../Card/Cards.js";

function InfoSection({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) {
	if (id == "Projects") { 

		console.log("projects")
		return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
				
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
			<ResearchCards section={"Research"}/>
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

				<div style={{ color: "red" }}>{id}</div>
			
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}
}

export default InfoSection