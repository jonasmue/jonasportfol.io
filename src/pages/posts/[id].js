import Layout from '../../components/layout'
import Head from 'next/head'
import {getAllPostIds, getPostData, getSortedPostsData} from '../../lib/posts'
import PostWrapper from "../../components/posts/post-wrapper";

export default function Post({postData, similarPostsData}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<PostWrapper data={postData} similarPostsData={similarPostsData}/>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const postData = await getPostData(params.id)
	const similarPostsData = await getSortedPostsData(false, postData.category, params.id)
	return {
		props: {
			postData,
			similarPostsData
		}
	}
}
