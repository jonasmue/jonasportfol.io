import Link from "next/link";

const HomeLink = () => {
	return (
		<div className={"my-8"}>
			<Link href="/">
				<a className={"text-black home-link"}>← Back to home</a>
			</Link>
		</div>
	)
}

export default HomeLink
