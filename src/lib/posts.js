import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from "remark"
import html from "remark-html"

const externalLinks = require("remark-external-links")
const footnotes = require("remark-footnotes")

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(pinnedFirst, filterCategory = null, filterId = null) {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	let allPostsData = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			...matterResult.data
		}
	})

	if (!!filterId) {
		allPostsData = allPostsData.filter(p => p.id !== filterId);
	}

	if (!!filterCategory) {
		allPostsData = allPostsData.filter(p => p.category.trim().toLowerCase() === filterCategory.trim().toLowerCase());
	}


	// Sort posts by date
	allPostsData =  allPostsData.sort((a, b) => {
		return a.date < b.date ? 1 : -1
	})

	// Put pinned posts first
	if (pinnedFirst) {
		allPostsData = allPostsData.sort((a, b) => {
			return a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1;
		})
	}
	return allPostsData;
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		}
	})
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(externalLinks, {target: "_blank", rel: false})
		.use(footnotes, {inlineNotes: true})
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id
	return {
		id,
		contentHtml,
		...matterResult.data
	}
}
