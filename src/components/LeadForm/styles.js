import styled from "styled-components";
import iconError from "../../images/icon-error.svg";

export const FormWrapper = styled.form``;

export const Button = styled.button``;

export const Input = styled.input`
	background: no-repeat center right 20px url(${({ invalidInput }) => invalidInput && iconError});
`;
