import { Main, Logo } from "./styles/styles";
import { HeroImage, HeroMain } from "./components";
import logo from "./images/logo.svg";

function App() {
	return (
		<Main>
			<Logo src={logo} alt="logo" />
			<HeroImage area="image" />
			<HeroMain area="main" />
		</Main>
	);
}

export default App;
