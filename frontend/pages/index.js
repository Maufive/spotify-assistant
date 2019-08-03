import Page from "../components/Page";
import Login from "../components/auth/AuthSpotify";

export default function Home() {
	return (
		<Page>
			<h1>Homepage</h1>
			<Login />
		</Page>
	);
}
