import { GridContainer, Main, MobileImg, Aside, TextWrapper } from "./styles";
import { LeadForm } from "./components/LeadForm";
import logo from "./images/logo.svg";
import mobileHero from "./images/hero-mobile.jpg";
import desktopHero from "./images/hero-desktop.jpg";

function App() {
	return (
		<GridContainer>
			<Main>
				<header>
					<img src={logo} alt="" />
				</header>

				<MobileImg src={mobileHero} alt="hero" />

				<article>
					<TextWrapper>
						<h1>
							WE'RE <br />
							<strong>
								COMING
								<br />
								SOON
							</strong>
						</h1>

						<p>
							Hello fellow shoppers! We're currently building our new fashion store. Add
							your email below to stay up-to-date with announcements and our launch deals.
						</p>
					</TextWrapper>

					<LeadForm />
				</article>
			</Main>

			<Aside>
				<img src={desktopHero} alt="hero" />
			</Aside>
		</GridContainer>
	);
}

export default App;
