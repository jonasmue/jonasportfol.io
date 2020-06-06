import PostCard from "./post-card";

const Projects = (props) => {
	return (
		<section className={"text-center light-back"}>
			<h2 className={"my-8"}>Projects</h2>
			{!!props.allPostsData && <div className="text-left flex flex-wrap mb-4">
				{props.allPostsData.map((postData, index) => (
					<PostCard data={postData} key={index}/>
				))}
			</div>}
		</section>
	)
}

export default Projects
