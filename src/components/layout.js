import Head from 'next/head'
import Header from "./Header";
import Footer from "./footer"

export const siteTitle = "Jonas Müller | Portfolio"

export default function Layout({children}) {
	return (
		<div>
			<Head>
				<link rel="icon"
					  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"/>
				<meta
					name="description"
					content="Jonas Mueller – Human-Computer Interaction M.Sc. – Portfolio"
				/>
				<meta
					property="og:image"
					content="https://og-image.now.sh/**Jonas%20M%C3%BCller**%20%7C%20Portfolio.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=auto&heights=auto"
				/>
				<meta name="og:title" content={siteTitle}/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>{siteTitle}</title>
			</Head>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	)
}
