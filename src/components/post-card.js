import Date from "./date";
import Link from 'next/link'

const PostCard = (props) => {
	return (
		<>
			<div className={"w-full md:w-1/2 lg:w-1/3 p-3"}>
				<div className={"rounded shadow-lg p-3"}>
					<Link href="posts/[id]" as={`posts/${props.data.id}`}>
						<a>{props.data.title}</a>
					</Link>
					<br/>
					<small>
						<Date dateString={props.data.date}/>
					</small>
				</div>
			</div>
		</>
	)
}

export default PostCard
