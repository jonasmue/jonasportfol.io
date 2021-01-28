import SocialIcons from "./social-icons";

const AboutMe = ({salutation}) => {
	// noinspection HtmlUnknownTarget
	const greeting = salutation && salutation[0] || ""
	return (
		<section className={"mt-10 text-center mb-10 lg:mx-64"}>
			<img
				src="/images/jonas.jpeg"
				alt={"Jonas"}
				className={"h-32 w-32 inline-block object-top shadow-2xl rounded-full"}
			/>
			<div style={{"opacity": !!salutation ? 1 : 0}} className={"salutationWrapper"}>
				<h1 className={"text-4xl md:text-5xl mt-4 mb-2"}><span className={"capitalize"}>{greeting}{!!salutation && salutation.length === 2 &&
				<span className={"font-thin"}>*</span>}</span>, I'm Jonas!</h1>
				{!!salutation && salutation.length === 2 &&
				<div className={"text-base mb-2 -mt-2"}>*{salutation[1]}</div>}
			</div>
			<div className={"text-center mb-4 ml-auto mr-auto w-1/4 rounded-lg border-b-2 border-gray"}/>
			<SocialIcons/>
			<p className={"md:text-xl"}>I am a consultant at <a href={"https://www.netlight.com"} target={"_blank"}>Netlight</a>.

				Before that I did my master's degree in <a href={"https://hci.uni-wuerzburg.de"}
																				  target={"_blank"}>Human-Computer
				Interaction</a> at the University of Würzburg. <br/>
				I am passionate about creating meaningful and pleasant user experiences ranging from classical visual UIs to novel paradigms such as conversational or gesture-based interaction. 
		This site is dedicated to showcase some of my recent side and university projects.
			</p>
		</section>
	)
}

export default AboutMe
