import { LeadForm } from "..";
import { HeroMainWrapper } from "./styles";

export function HeroMain({ area }) {
	return (
		<HeroMainWrapper area={area}>
			<h1>We're coming soon</h1>
			<p>
				Hello fellow shoppers! We're currently building our new fashion store. Add your email below
				to stay up-to-date with announcements and our launch deals.
			</p>
			<LeadForm />
		</HeroMainWrapper>
	);
}
