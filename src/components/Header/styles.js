import styled from "styled-components";

export const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	width: 100%;

	grid-area: ${({ area }) => area};

	@media screen and (min-width: 700px) {
	}
`;

export const Logo = styled.img`
	width: 120px;
`;
