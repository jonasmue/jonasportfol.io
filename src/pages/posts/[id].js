import Layout from '../../components/layout'
import {getAllPostIds, getPostData, getSortedPostsData} from '../../lib/posts'
import PostWrapper from "../../components/posts/post-wrapper";
import AccordionHelper from "../../helpers/accordion-helper";
import {useEffect} from "react"

export default function Post({postData, similarPostsData}) {
	useEffect(() => {
		AccordionHelper().initialize()
	})

	return (
		<Layout title={postData.title} ogImage={"/images/posts/" + postData.image} ogDescription={postData.teaser}>
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
