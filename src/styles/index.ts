import styled from "styled-components";

const laptop = "1080px";

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;

	width: 100%;
	height: 100%;

	@media screen and (max-width: ${laptop}) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Aside = styled.aside`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: ${laptop}) {
		display: none;

		img {
			display: none;
		}
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;

	header,
	article {
		padding: 0 8rem;

		@media screen and (max-width: ${laptop}) {
			padding: 0 1.5rem;
		}
	}

	header {
		width: 100%;
		height: 8rem;

		display: flex;
		align-items: center;

		@media screen and (max-width: ${laptop}) {
			justify-content: center;
		}
	}

	article {
		width: 100%;
		height: 100%;
		margin-top: 50px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		@media screen and (max-width: ${laptop}) {
			justify-content: center;
			align-items: center;
			margin-bottom: 5rem;
		}
	}

	div {
		max-width: 500px;
	}
`;

export const TextWrapper = styled.div`
	color: var(--desatured-red);

	p {
		margin: 2rem 0;
		line-height: 1.5rem;
	}

	h1 {
		font-size: 4rem;
		font-weight: 300;

		line-height: 4rem;
		letter-spacing: 1rem;

		strong {
			font-weight: 600;
			color: hsl(0, 6%, 24%);
		}
	}

	@media screen and (max-width: ${laptop}) {
		justify-content: center;
		text-align: center;
	}
`;

export const MobileImg = styled.img`
	display: none;

	@media screen and (max-width: ${laptop}) {
		display: block;
		width: 100%;
		height: auto;
	}
`;
