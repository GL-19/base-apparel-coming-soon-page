import { Logo, HeaderWrapper } from "./styles";
import logo from "../../images/logo.svg";

export function Header({ area }) {
	return (
		<HeaderWrapper area={area}>
			<Logo src={logo} alt="logo" />
		</HeaderWrapper>
	);
}
