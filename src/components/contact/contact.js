import ContactButton from "./contact-button"

const Contact = () => {
	return (
		<section className={"text-center p-10"}>
			<h2 className={"text-4xl mb-8"}>Contact</h2>
			<p className={"md:text-xl"}>If you want to get to know more about me and my work, don't hesitate to shoot
				me an email!
			</p>
			<ContactButton/>
		</section>
	)
}

export default Contact
