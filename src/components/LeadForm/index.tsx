import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input, Button, FormWrapper, Form } from "./styles";

import iconArrow from "../../images/icon-arrow.svg";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function LeadForm() {
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState(false);

	useEffect(() => {
		console.log(email);
	}, [email]);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (invalidEmail) {
			setInvalidEmail(false);
		}
		setEmail(event.target.value);
	}

	function handleSubmit(event: FormEvent<HTMLElement>) {
		event.preventDefault();

		if (!email || !regex.test(email)) {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(false);
			alert(`${email} registrado com sucesso`);
		}
	}

	return (
		<FormWrapper>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					value={email}
					placeholder="Email Address"
					onChange={handleChange}
					invalidInput={invalidEmail}
				/>
				<Button type="submit">
					<img src={iconArrow} alt="arrow" />
				</Button>
				<br />
			</Form>
			{invalidEmail ? <p>Please provide a valid email</p> : ""}
		</FormWrapper>
	);
}
