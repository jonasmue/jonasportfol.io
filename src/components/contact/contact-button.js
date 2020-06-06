const ContactButton = () => {
	return (
		<div className={"text-center my-10"}>
			<a className={"btn focus:outline-none bg-transparent text-sm sm:text-lg md:text-2xl font-semibold py-2 px-8 border-2 border-black rounded-md"}
			   href={"mailto:hej@jonasportfol.io"}>
				<span className={"mr-3"}>✉</span>️ hej@jonasportfol.io
			</a>
		</div>
	)
}

export default ContactButton
