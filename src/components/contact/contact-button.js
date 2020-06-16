const ContactButton = ({salutation}) => {
	const mailPrefix = salutation && salutation[0] || "hej"
	return (
		<div className={"text-center my-10"}>
			<a className={"btn shadow-xl focus:outline-none bg-transparent text-sm sm:text-lg md:text-2xl font-semibold py-2 px-8 border-2 border-black rounded-md"}
			   href={"mailto:" + mailPrefix + "@jonasportfol.io"}>
				<i className={"mr-3 fa fa-envelope"}/> {mailPrefix}@jonasportfol.io
			</a>
		</div>
	)
}

export default ContactButton
