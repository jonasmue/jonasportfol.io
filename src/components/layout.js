import Head from 'next/head'
import Header from "./Header";
import Footer from "./footer"

export default function Layout({children, title, ogImage, ogDescription}) {
	const seoImage = ogImage || "https://og-image.now.sh/**Jonas%20M%C3%BCller**%20%7C%20Portfolio.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=auto&heights=auto";
	const seoDescription = ogDescription || "This portfolio is dedicated to showcase my current and past projects.";
	return (
		<div>
			<Head>
				<link rel="icon"
					  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"/>
				<meta
					name="description"
					content="Jonas Müller – Human-Computer Interaction M.Sc. – Portfolio"
				/>
				<meta
					property="og:image"
					content={seoImage}
				/>
				<meta
					property="og:description"
					content={seoDescription}
				/>
				<meta name="og:title" content={title}/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<script src="https://code.jquery.com/jquery-3.5.1.min.js"
						integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
						crossOrigin="anonymous"></script>
				<title>{title}</title>
			</Head>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	)
}
