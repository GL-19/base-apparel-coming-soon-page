import styled from "styled-components";

import mobileHero from "../../images/hero-mobile.jpg";
import desktopHero from "../../images/hero-desktop.jpg";

export const HeroImageContainer = styled.section`
	width: 375px;
	display: none;
	background: url(${desktopHero}) no-repeat contain;

	@media screen and (min-width: 700px) and (max-width: 1000px) {
		display: block;
		grid-area: ${({ area }) => area};
		width: 100%;
		height: 100%;

		background: url(${desktopHero}) no-repeat;
	}
`;

export const MobileImg = styled.img`
	grid-area: ${({ area }) => area};
	width: 100%;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const DesktopImg = styled.img`
	display: none;
	grid-area: ${({ area }) => area};

	@media screen and (min-width: 1000px) {
		display: block;
		height: 100%;
		width: 100%;
	}
`;
