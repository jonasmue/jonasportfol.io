import Layout from '../components/layout'
import AboutMe from "../components/about/about"
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import {getSortedPostsData} from "../lib/posts";

const Home = ({allPostsData}) => {
	return (
		<Layout home>
			<AboutMe/>
			<Projects allPostsData={allPostsData}/>
			<Contact/>
		</Layout>
	)
}

export default Home;

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
