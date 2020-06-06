import Head from 'next/head'
import Link from 'next/link'

const name = "Hey, I'm Jonas!"
export const siteTitle = "Jonas Müller | Portfolio"

export default function Layout({children, home}) {
	return (
		<div>
			<Head>
				<link rel="icon"
					  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"/>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle}/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<header>
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							alt={name}
						/>
						<h1>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile.jpg"
									alt={name}
								/>
							</a>
						</Link>
						<h2>
							<Link href="/">
								<a>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<footer className={"flex flex-wrap text-white p-10 bg-black"}>
				<div className={"w-1/6"}>
					<a href={"mailto:hej@jonasportfol.io"}>
						Contact
					</a>
				</div>
				<div className={"text-right w-10/12 lg:w-7/12"}>
					<a href={"https://github.com/jonasmue/jonasportfol.io"} target={"_blank"}>Source Code</a>
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
		</div>
	)
}
