import Date from "../util/date";

const PostTitle = ({data}) => {
	return (
		<>
			<h1 className={"post-title text-4xl md:text-5xl mb-4 md:mb-6"}>{data.title}</h1>
			<div className={"inline-block my-2 font-extrabold"}>
				<Date dateString={data.date}/>
			</div>
			<div className={"inline-block mx-2"}/>
			<div className={"inline-block mr-2 text-tiny md:text-xs whitespace-no-wrap shadow-xl bg-gray-700 text-white py-1 px-4 rounded-full uppercase font-bold tracking-widest"}>
				{data.category}
			</div>
			<div className={"mt-4 mb-12 w-2/3 md:w-1/2 xl:w-1/4 border-b-2 border-black"}/>
		</>
	)
}

export default PostTitle
