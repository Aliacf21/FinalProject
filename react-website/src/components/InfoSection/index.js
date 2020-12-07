import React from 'react'
import { Button } from "../ButtonElements"
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img  } from "./InfoElements.js";
import Cards from "../../components/Cards";
import ResearchCards from "../../components/ResearchCards";

function InfoSection({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) {
	if (id == "Projects") { 

		console.log("projects")
		return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
				
			<Cards section={"Projects"}/>
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
			<ResearchCards />
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
				<h2>{topLine}</h2>
			
				</InfoWrapper>
			</InfoContainer>
			
		</>
	)
}
}

export default InfoSection