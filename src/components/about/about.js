import SocialIcons from "./social-icons";

const AboutMe = () => {
	// noinspection HtmlUnknownTarget
	return (
		<section className={"mt-10 text-center mb-10 lg:mx-64"}>
			<img
				src="/images/jonas.jpeg"
				alt={"Jonas"}
				className={"h-32 w-32 inline-block object-top shadow-2xl rounded-full"}
			/>
			<h1 className={"mt-4 mb-2"}>{"Hey, I'm Jonas!"}</h1>
			<div className={"text-center mb-4 ml-auto mr-auto w-1/4 rounded-lg border-b-2 border-gray"}/>
			<SocialIcons />
			<p className={"md:text-xl"}>I am a recent graduate of the Master's <a href={"https://hci.uni-wuerzburg.de"}
				   target={"_blank"}>Human-Computer Interaction</a> program at the University of Würzburg. <br/>
				Apart from "classic HCI topics"
				I am passionate about researching into and applying Natural Language Processing to create enhanced
				user experiences. This site is dedicated
				to showcase some of my recent university and private projects.
			</p>
		</section>
	)
}

export default AboutMe
