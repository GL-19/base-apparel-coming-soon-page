import styled from "styled-components";
import bg from "../../images/bg-pattern-desktop.svg";

export const HeroMainWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 30px 10%;

	grid-area: ${({ area }) => area};

	@media screen and (min-width: 700px) {
		align-items: flex-start;
		max-width: 500px;
		background: url(${bg}) no-repeat;
	}
`;
