import Page from "../components/Page";
import Lyrics from "../components/Lyrics";
import Login from "../components/auth/Login";

export default function Home() {
	return (
		<Page>
			<h1>Homepage</h1>
			<Login />
			{/* <Lyrics /> */}
		</Page>
	);
}
