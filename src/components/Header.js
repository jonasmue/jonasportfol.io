import Link from "next/link";

const Header = () => {
	return (
		<div className={"pt-10 pl-10 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-10 font-bold text-2xl"}>
			<Link href="/">
				<span className={"cursor-pointer hover:no-underline"}>
				Jonas Müller
			</span>
			</Link>
		</div>
	)
}

export default Header
