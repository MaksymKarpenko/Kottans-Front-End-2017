export default (items) => items.map((repo) => {
	return {
		name: repo.name,
		description: repo.description,
		date: repo.updated_at,
		language: repo.language,
		star: repo.stargazers_count,
		forks: repo.forks
	}
})

