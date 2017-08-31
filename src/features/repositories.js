export default (repo) => `
	<div class = "repository">
		<h2 class = "repo_name">${repo.name}<h2>
		<p class="desc">${repo.description}</p>
		<p class="updated_date">${repo.date}</p>
		<p class="language">${repo.language}</p>
	</div>
`



