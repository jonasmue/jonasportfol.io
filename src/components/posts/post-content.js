const PostContent = ({data}) => {
	return (
		<div dangerouslySetInnerHTML={{__html: data.content}}/>
	)
}

export default PostContent
