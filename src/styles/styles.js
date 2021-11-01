import styled from "styled-components";

export const Main = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 700px) {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		grid-template-rows: 100px 1fr;
		grid-template-areas:
			"logo image"
			"main image";
		justify-items: center;
	}
`;

export const Logo = styled.img``;
