import {
	Content,
	Main,
	MobileImg,
	Wrapper,
	HeaderContainer,
	ArticleContainer,
} from "./styles";
import { LeadForm } from "./components/LeadForm";
import logo from "./images/logo.svg";
import mobileHero from "./images/hero-mobile.jpg";
import desktopHero from "./images/hero-desktop.jpg";

function App() {
	return (
		<Main>
			<Content>
				<header>
					<Wrapper>
						<HeaderContainer>
							<img src={logo} alt="" />
						</HeaderContainer>
					</Wrapper>
				</header>
				<MobileImg src={mobileHero} alt="hero" />
				<article>
					<Wrapper>
						<ArticleContainer>
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
								your email below to stay up-to-date with announcements and our launch
								deals.
							</p>
							<LeadForm />
						</ArticleContainer>
					</Wrapper>
				</article>
			</Content>
			<aside>
				<img src={desktopHero} alt="hero" />
			</aside>
		</Main>
	);
}

export default App;
