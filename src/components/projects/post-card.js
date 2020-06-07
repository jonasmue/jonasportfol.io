import Date from "../util/date";
import Link from 'next/link'

const PostCard = (props) => {
	// noinspection HtmlUnknownTarget
	return (
		<>
			<div className={"w-full md:w-1/2 lg:w-1/3 p-3 md:p-6"}>
				<Link href="/posts/[id]" as={`/posts/${props.data.id}`}>
					<div className={"card rounded-lg shadow-2xl p-3"}>
						<div className={"card-background"}>
							<div className={"card-img"}
								 style={{backgroundImage: "url(/images/posts/" + props.data.image + ")"}}/>
							<div className={"card-gradient mix"}/>
						</div>
						<div className={"card-content"}>
							<h3 className={"text-xl sm:text-2xl"}>{props.data.title}</h3>
							<br/>
							<p className={"card-description text-sm sm:text-base mt-0"}>
								{props.data.teaser || ""}
							</p>
							<div className={"card-bottom w-full"}>
								<p className={"card-category mb-1"}>{props.data.category}</p>
								<div className={"w-1/4"}>
									<hr/>
								</div>
								<small>
									<Date className={"card-date"} dateString={props.data.date}/>
								</small>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

export default PostCard
