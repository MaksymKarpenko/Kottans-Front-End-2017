export default (repo) => `
	<div class = "wrapper"">
		<div class = "row">
			<div class = "repository col-4">
				<h2 class = "repo_name">${repo.name}<h2>
				<p class="desc">${repo.description}</p>
				<p class="updated_date">${repo.date}</p>
				<p class="language">${repo.language}</p>
			</div>
		</div>
	</div>
`



