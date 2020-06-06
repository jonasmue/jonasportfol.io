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
					Human-Computer Interaction program</a> at the University of Würzburg. I am passionate about
					researching
					into Natural Language Processing and applying it to create enhanced user experiences. This site is
					dedicated
					to showcase some of my recent university and private projects.
				</p>
			</section>
			<section className={"light-back"}>
				<h2>Projects</h2>
				<div className="flex flex-wrap mb-4">
					{allPostsData.map((postData, index) => (
						<PostCard data={postData} key={index}/>
					))}
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
