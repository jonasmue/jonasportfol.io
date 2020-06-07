import PostCard from "./post-card";

const Projects = (props) => {
	console.log(props)
	return (
		<section className={"text-center light-back"}>
			<h2 className={"my-8"}>{props.title || "Projects"}</h2>
			{!!props.allPostsData && <div className="text-left flex justify-center flex-wrap mb-4">
				{props.allPostsData.map((postData, index) => (
					<PostCard data={postData} key={index}/>
				))}
			</div>}
		</section>
	)
}

export default Projects
