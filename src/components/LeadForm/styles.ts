import styled from "styled-components";
import iconError from "../../images/icon-error.svg";

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin-top: 5px;
		padding: 0 25px;

		color: hsl(0, 93%, 68%);
		font-size: 13px;
		text-align: left;
	}
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	margin-left: -50px;
	width: 80px;
	height: 52px;

	background-color: hsl(0, 93%, 68%);
	filter: brightness(1.35);

	border-radius: 25px;
	border: transparent 0;
	&:hover {
		filter: brightness(1.5);
	}
`;

interface InputProps {
	invalidInput: boolean;
}

export const Input = styled.input<InputProps>`
	width: 280px;
	height: 50px;
	padding: 25px;

	background: no-repeat center right 50px
		url(${({ invalidInput }) => invalidInput && iconError});
	${({ invalidInput }) =>
		invalidInput
			? `border: solid 3px hsl(0, 93%, 68%);`
			: `border: solid 1px hsl(0, 36%, 70%);`}

	border-radius: 25px;

	&:focus {
		border: 2px hsl(0, 36%, 70%) solid;
		outline: none;
	}

	&::placeholder {
		color: hsl(0, 36%, 70%);
		font-weight: 600;
	}

	@media screen and (min-width: 700px) {
		width: 350px;
	}
`;
