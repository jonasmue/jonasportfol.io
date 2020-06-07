import Projects from "../projects/projects";

const SimilarPosts = ({posts}) => {
	return (
		<Projects title={"Related Posts"} allPostsData={posts}/>
	)
}

export default SimilarPosts
