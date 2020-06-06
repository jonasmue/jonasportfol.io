const Footer = () => {
	return (
		<footer className={"flex flex-wrap text-white p-10 bg-black"}>
			<div className={"w-1/6"}>
				<a href={"mailto:hej@jonasportfol.io"}>
					Contact
				</a>
			</div>
			<div className={"text-right w-10/12 lg:w-7/12"}>
				<a href={"https://github.com/jonasmue/jonasportfol.io"} target={"_blank"}><i className={"mr-2 fab fa-github"}/> Source Code</a>
			</div>
			<div className={"text-right w-full mt-5 lg:w-3/12 lg:mt-0"}>
					<span>
						<a href={"https://compitencies.com/impressum/#privacy"} target={"_blank"}>Privacy Policy</a>
					</span>
				<span className={"pl-5"}>
						<a href={"https://compitencies.com/impressum"} target={"_blank"}>Imprint</a>
					</span>
			</div>
		</footer>
	)
}

export default Footer
