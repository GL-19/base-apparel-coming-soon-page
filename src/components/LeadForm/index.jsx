import { useEffect, useState } from "react";
import { Input, Button, FormWrapper } from "./styles";

import iconArrow from "../../images/icon-arrow.svg";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function LeadForm() {
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState(false);

	useEffect(() => {
		console.log(email);
	}, [email]);

	function handleSubmit(event) {
		event.preventDefault();

		if (!email || !regex.test(email)) {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(false);
			console.log(`${email} registrado com sucesso`);
		}
	}

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<Input
				type="text"
				value={email}
				placeholder="Email Address"
				onChange={(event) => setEmail(event.target.value)}
				invalidInput={invalidEmail}
			/>
			<Button type="submit">
				<img src={iconArrow} alt="arrow" />
			</Button>
		</FormWrapper>
	);
}
