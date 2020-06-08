const PostCategoryLabel = (props) => {
	const bgColor = props.bgColor || "bg-gray-800 "
	const textColor = props.textColor || "text-white "
	return (
		<div
			className={bgColor + textColor + "post-category-label inline-block mr-2 text-tiny md:text-xs whitespace-no-wrap shadow-xl py-1 px-4 rounded-full uppercase font-bold tracking-widest"}>
			{props.category}
		</div>
	)
}

export default PostCategoryLabel
