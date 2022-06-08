import styled from "styled-components";

import bg from "../images/bg-pattern-desktop.svg";

export const Main = styled.main`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 1.2fr 0.8fr;
	grid-template-areas: "main hero";

	background: url(${bg}) no-repeat;

	aside {
		grid-area: "hero";
		width: 100%;
		height: 100%;
		img {
			width: 100%;
			height: 100%;
		}
	}

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		aside {
			display: none;
			img {
				display: none;
			}
		}
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	grid-area: "main";

	header {
		width: 100%;
		height: 100px;
	}

	article {
		width: 100%;
		margin-top: 50px;
	}
`;

export const Wrapper = styled.div`
	padding: 0 125px;
	height: 100%;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	width: 100%;
	max-width: 450px;
	height: 100%;
`;

export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
	max-width: 450px;

	p {
		font-size: 16px;
		color: hsl(0, 36%, 70%);

		line-height: 24px;

		margin: 32px 0;
	}

	h1 {
		font-size: 64px;
		font-weight: 300;
		color: hsl(0, 36%, 70%);

		line-height: 64px;
		letter-spacing: 16px;

		strong {
			font-weight: 600;
			color: black;
		}
	}

	@media screen and (max-width: 600px) {
		p {
			margin: 24px 0;
			text-align: center;
		}

		h1 {
			font-size: 48px;
			line-height: 48px;
			letter-spacing: 16px;

			text-align: center;
		}
	}
`;

export const MobileImg = styled.img`
	display: none;
	@media screen and (max-width: 600px) {
		display: block;
		width: 100%;
		height: auto;
	}
`;
