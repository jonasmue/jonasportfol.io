const Header = () => {
	return (
		<div className={"header text-right text-xl m-10"}>
			<a href={"https://linkedin.com/in/jomue"} target={"_blank"}>
				<i className={"fab fa-linkedin-in"}/>
			</a>
			<a href={"https://github.com/jonasmue"} target={"_blank"}>
				<i className={"ml-8 fab fa-github"}/>
			</a>
			<a href={"/"}>
				<span className={"ml-8 font-extrabold"}>CV</span>
			</a>
			<a href={"mailto:hej@jonasportfol.io"}>
				<i className={"ml-8 fa fa-envelope"}/>
			</a>
		</div>
	)
}

export default Header
