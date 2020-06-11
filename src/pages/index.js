import Layout from '../components/layout'
import AboutMe from "../components/about/about"
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import {getSortedPostsData} from "../lib/posts";
import {useState, useEffect} from 'react';

const Home = ({allPostsData}) => {
	const [salutation, setSalutation] = useState(undefined)

	useEffect(() => {
		setSalutation(getSalutation())
	}, [])

	return (
		<Layout title={"Jonas Müller | Portfolio"}>
			<AboutMe salutation={salutation}/>
			<Projects allPostsData={allPostsData} showPinned={true}/>
			<Contact salutation={salutation}/>
		</Layout>
	)
}

export default Home;

const getSalutation = () => {
	const salutations = [
		["aloha"],
		["cheers"],
		["hej", "Swedish for 'Hello'"],
		["hello"],
		["hey"],
		["hi"],
		["howdy"],
		["moin", "Northern German for 'Hello'"],
		["servus", "Bavarian for 'Hello'"],
		["greetings"],
		["salve", "Latin for 'Hello'"]
	]
	return salutations[Math.floor(Math.random() * salutations.length)]
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
	const allPostsData = getSortedPostsData(true)
	return {
		props: {
			allPostsData
		}
	}
}
