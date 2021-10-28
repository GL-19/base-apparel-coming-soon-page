import { Main, MobileImg, DesktopImg, Logo } from "./styles/styles";
import logo from "./images/logo.svg";
import mobileHero from "./images/hero-mobile.jpg";
import desktopHero from "./images/hero-desktop.jpg";

function App() {
	return (
		<Main>
			<header>
				<Logo src={logo} alt="logo" />
			</header>

			<section>
				<MobileImg src={mobileHero} alt="hero" />
				<DesktopImg src={desktopHero} alt="hero" />
			</section>

			<section>
				<h1>We're coming soon</h1>
				<p>
					Hello fellow shoppers! We're currently building our new fashion store. Add your email
					below to stay up-to-date with announcements and our launch deals.
				</p>
				<input type="text" value="" placeholder="Email Address" />
			</section>
		</Main>
	);
}

export default App;
