import styled from "styled-components";
import bg from "../../images/bg-pattern-desktop.svg";

export const HeroMainWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 30px 10%;

	grid-area: ${({ area }) => area};

	color: hsl(0, 36%, 70%);
	font-size: 16px;
	text-align: center;

	@media screen and (min-width: 700px) {
		align-items: flex-start;
		max-width: 500px;
		background: url(${bg}) no-repeat;
	}

	h1 {
	}
`;

export const Strong = styled.strong`
	font-size: 32px;
	color: black;
`;
