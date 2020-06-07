import Date from "../util/date";
import PostCategoryLabel from "./post-category-label";

const PostTitle = ({data}) => {
	return (
		<>
			<h1 className={"post-title text-4xl md:text-5xl mb-4 md:mb-6"}>{data.title}</h1>
			<div className={"inline-block my-2 font-extrabold"}>
				<Date dateString={data.date}/>
			</div>
			<div className={"inline-block mx-2"}/>
			<PostCategoryLabel category={data.category}/>
			<div className={"mt-4 mb-12 w-2/3 md:w-1/2 xl:w-1/4 border-b-2 border-black"}/>
		</>
	)
}

export default PostTitle
