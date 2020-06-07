import PostTitle from "./post-title";
import PostContent from "./post-content";
import SimilarPosts from "./similar-posts";
import HomeLink from "../home-link";

const PostWrapper = ({data, similarPostsData}) => {
	return (
		<article>
			<div className={"post-content mt-10 mb-20 px-10 md:px-20 lg:px-32 xl:px-48"}>
				<HomeLink/>
				<PostTitle data={{title: data.title, date: data.date, category: data.category, image: data.image}}/>
				<PostContent data={{content: data.contentHtml}}/>
			</div>
			{!!similarPostsData.length && <SimilarPosts posts={similarPostsData}/>}
		</article>
	)
}

export default PostWrapper
