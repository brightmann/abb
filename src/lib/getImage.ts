import { Post } from "contentlayer/generated"

export function getImage({ title, description, url }: Partial<Post>) {
	const params = new URLSearchParams({
		title: normalize(title ?? ""),
		description: normalize(description ?? ""),
		url: url ?? "",
	})

	// Relative URL: no NEXT_PUBLIC_URL needed, works on any domain
	return `/api/og?${params.toString()}`
}

function normalize(text: string) {
	return text.replaceAll(/[^a-zA-Z0-9\s]/g, "")
}
