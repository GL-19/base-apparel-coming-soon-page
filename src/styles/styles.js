import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	header {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 35px;
	}
`;

export const Logo = styled.img`
	width: 120px;
`;

export const MobileImg = styled.img`
	@media screen and (min-width: 850px) {
		display: none;
	}
`;

export const DesktopImg = styled.img`
	display: none;
	@media screen and (min-width: 850px) {
		display: block;
	}
`;
