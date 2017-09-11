const css = require('./style/app.scss');
//const reset = require('./style/reset.scss');
import fetchData from './features/fetchData.js';

let user;
let repo;
 
const btn = document.querySelector('.submit');
const field = document.querySelector('.inputSearch');

btn.addEventListener('click', () => { 
  name = field.value; 
  let reposUrl = `https://api.github.com/users/${name}/repos`;
      fetchData(reposUrl, repo);
    //console.log(repo);
});

