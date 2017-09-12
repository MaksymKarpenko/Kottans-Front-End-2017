export default (repo) => {
	let getDateAgo = (date, days) =>{

  		let dayAgo = Date.parse(date) - Date.parse(days);
  			let result = Math.floor(dayAgo/24/60/60/1000);
  			//console.log(result);
  				if( result > 30 ) {
  					let data = Math.floor(result/30); 
  						//console.log(result, data);
  						if( data < 12 ) {
  							return data + " months ago";
  						}else {
  							return "more then year ago"
  						}
  				}
  				else if( result < 30 ) {
  					return result + " days ago";
  				}
  				else if( result == 1 ) {
  					return result + " day ago";
  					return Math.floor(dayAgo/60/60/1000);
  				}
  				else if( result == 0 ) {
  					return Math.floor(dayAgo/60/60/1000);
  				}
	}

	let date = new Date();

	let updated = getDateAgo(date, repo.date);

		return	`<div class = "repository">
				<h3 class = "repo_name">${repo.name}<h2>
				<p class="desc">${repo.description}</p>
				<p class="updated_date">last update: ${updated}</p>
				<span class="github-card__meta">
					<span class="github-card__language-icon">●</span>
					${repo.language}</span>
				<span class="star">☆: ${repo.star}</span>
				<a class="muted-link mr-3" href="/shvaikalesh/ecma262/network">
          		<svg aria-label="fork" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
  				${repo.forks}
  				</a>
				
			</div>`
}



