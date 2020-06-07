import PostTitle from "./post-title";
import PostContent from "./post-content";
import HomeLink from "../home-link";

const PostWrapper = ({data}) => {
	return (
		<article className={"mt-10 mb-10 px-10 md:px-20 lg:px-32 xl:px-48"}>
			<PostTitle data={{title: data.title, date: data.date, category: data.category, image: data.image}}/>
			<PostContent data={{content: data.contentHtml}}/>
			<HomeLink/>
		</article>
	)
}

export default PostWrapper
