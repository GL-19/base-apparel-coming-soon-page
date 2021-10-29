import { Main } from "./styles/styles";
import { HeroImage, Header, HeroMain } from "./components";

function App() {
	return (
		<Main>
			<Header area="header" />
			<HeroImage area="image" />
			<HeroMain area="main" />
		</Main>
	);
}

export default App;
