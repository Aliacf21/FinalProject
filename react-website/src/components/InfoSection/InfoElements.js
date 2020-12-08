import styled from "styled-components"


export const InfoContainer = styled.div`
	color: #fff;
	margin-left: 275px;
	background: purple;
	width: 100%

	display: block;
	@media screen and (max-width: 950px) {
		padding: 0px 0;
		margin-left: 0px;
	}

`

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100% 
	justify-content: center;
	height: 100%;


`
export const Column1 = styled.div`
	margin-bottom: 15px;
	margin-left: 150px;
	padding: 50 15px;
	grid-area: col1;

	align-items: right;

`

export const Column2 = styled.div`
	margin-bottom: 15px;
	margin-left: 150px;
	padding: 0 15px;
	grid-area: col2;

	margin-right: 100px;

	
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	background-color: red;

`

export const TopLine = styled.p`
	color: red;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;

`
export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "010606")};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;

	color: ${({ darkText }) => (darkText ? "#f7f8fa" : "010606")};
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%
`

export const Img = styled.img`
	width: 600px;
	height: 800px;
	margin: 0 0 10px 0;
	justify-content: right;

`
export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' col2 col2'`)};

	}
`













