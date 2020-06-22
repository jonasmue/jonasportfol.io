import Date from "../util/date";
import Link from 'next/link'

const PostCard = (props) => {
	// noinspection HtmlUnknownTarget
	const pinnedClass = props.showPinned && props.data.pinned ? " pinned" : " md:w-1/2 xl:w-1/3";
	return (
		<>
			<div className={"w-full p-3 md:p-6" + pinnedClass}>
				{/* Duplicate code sucks, but is due to bug in Next.js */}
				{!props.data.link ?
					<Link href="/posts/[id]" as={`/posts/${props.data.id}`}>
						<div className={"card rounded-lg shadow-2xl p-3"}>
							<div className={"card-background"}>
								<div className={"card-img"}
									 style={{backgroundImage: "url(/images/posts/" + props.data.image + ")"}}/>
								<div
									className={"card-gradient " + props.data.category.trim().replace(/\s+/g, '-').toLowerCase()}/>
							</div>
							<div className={"card-content"}>
								<h3 className={"text-xl sm:text-2xl"}>{props.data.title}</h3>
								<br/>
								<p className={"card-description pb-16 text-sm sm:text-base mt-0"}>
									{props.data.teaser || ""}
								</p>
								<div className={"card-bottom w-full"}>
									<p className={"card-category mb-1"}>{props.data.category}</p>
									<div className={"w-1/4"}>
										<hr/>
									</div>
									<div className={"card-date"}>
										<small>
											<Date dateString={props.data.date}/>
										</small>
									</div>
								</div>
							</div>
						</div>
					</Link> :
					<a target={"_blank"} href={props.data.link}>
						<div className={"card rounded-lg shadow-2xl p-3"}>
							<div className={"card-background"}>
								<div className={"card-img"}
									 style={{backgroundImage: "url(/images/posts/" + props.data.image + ")"}}/>
								<div
									className={"card-gradient " + props.data.category.trim().replace(/\s+/g, '-').toLowerCase()}/>
							</div>
							<div className={"card-content"}>
								<h3 className={"text-xl sm:text-2xl"}>{props.data.title}</h3>
								<br/>
								<p className={"card-description pb-16 text-sm sm:text-base mt-0"}>
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
					</a>
				}
			</div>
		</>
	)
}

export default PostCard
