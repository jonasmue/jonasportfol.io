import {getSortedPostsData} from "../lib/posts";
import Projects from "../components/projects/projects";
import Layout from "../components/layout";

export default function Custom404({allPostsData}) {
	return (<Layout title={"Jonas Müller | Portfolio"}>
			<div className={"p-10"}>
				<h2>404 — Ooops, this page could not be found 😳</h2>
				<p className={"text-sm text-gray-600 font-bold tracking-wider"}>Looking for recent projects? Find them below ⤵️</p>
			</div>
			<Projects allPostsData={allPostsData} showPinned={false}/>
		</Layout>
	)

}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
	const allPostsData = getSortedPostsData(false)
	return {
		props: {
			allPostsData
		}
	}
}
