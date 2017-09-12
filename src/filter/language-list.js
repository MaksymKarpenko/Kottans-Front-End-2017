export default (array) => {
	const list = document.querySelector('.languages');
	let makeLangList = (arr, container) => arr.map((item) => {
		return container.innerHTML += `<li>${item}</li>`;
	});

	let languages = array.reduce((arr, obj) => {
		if (arr.map[obj.language])
			return arr;
		arr.map[obj.language] = true;
		arr.languages.push(obj.language);
			return arr;
	}, {
		map: {},
		languages: []
	})
	.languages

	makeLangList(languages, list); 
}
