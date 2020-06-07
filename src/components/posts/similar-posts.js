import Projects from "../projects/projects";

const SimilarPosts = ({posts}) => {
	return (
		<Projects title={"Related Posts"} allPostsData={posts.slice(0, 3)}/>
	)
}

export default SimilarPosts
