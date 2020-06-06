import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import PostCard from "../components/post-card";

export default function Home({allPostsData}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>I am a recent graduate of the <a href={"https://hci.uni-wuerzburg.de"} target={"_blank"}>Master's
					Human-Computer Interaction program</a> at the University of Würzburg. Apart from "classic HCI topics"
					I am passionate about researching into Natural Language Processing and applying it to create enhanced
					user experiences. This site is dedicated
					to showcase some of my recent university and private projects.
				</p>
			</section>
			<section className={"text-center light-back"}>
				<h2 className={"my-8"}>Projects</h2>
				<div className="text-left flex flex-wrap mb-4">
					{allPostsData.map((postData, index) => (
						<PostCard data={postData} key={index}/>
					))}
				</div>
			</section>
			<section className={"text-center p-10"}>
				<h2 className={"mb-8"}>Contact</h2>
				<p className={"text-xl"}>If you want to get to know more about me and my work, don't hesitate to shoot me an email!
				</p>
				<div className={"my-10"}>
					<a className={"btn focus:outline-none bg-transparent text-sm sm:text-lg md:text-2xl font-semibold py-2 px-8 border-2 border-black rounded-md"}
					   href={"mailto:hej@jonasportfol.io"}>
						<span className={"mr-3"}>✉</span>️ hej@jonasportfol.io
					</a>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
