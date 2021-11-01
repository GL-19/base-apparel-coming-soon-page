import { LeadForm } from "..";
import { HeroMainWrapper, Strong } from "./styles";

export function HeroMain({ area }) {
	return (
		<HeroMainWrapper area={area}>
			<h1>We're </h1>
			<Strong>coming soon</Strong>
			<p>
				Hello fellow shoppers! We're currently building our new fashion store. Add your email below
				to stay up-to-date with announcements and our launch deals.
			</p>
			<LeadForm />
		</HeroMainWrapper>
	);
}
