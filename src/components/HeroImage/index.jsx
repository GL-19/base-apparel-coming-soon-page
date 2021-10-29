import { MobileImg, DesktopImg, HeroImageContainer } from "./styles";
import mobileHero from "../../images/hero-mobile.jpg";
import desktopHero from "../../images/hero-desktop.jpg";

export function HeroImage({ area }) {
	return (
		<>
			<HeroImageContainer area={area} />
			<MobileImg src={mobileHero} alt="hero" area={area} />
			<DesktopImg src={desktopHero} alt="hero" area={area} />
		</>
	);
}
