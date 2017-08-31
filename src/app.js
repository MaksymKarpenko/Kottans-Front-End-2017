const css = require('./style/app.scss');
import fetchData from './features/fetchData.js';

let user;
let repo;
 
const btn = document.querySelector('.submit');
const field = document.querySelector('.inputSearch');

btn.addEventListener('click', () => { 
  name = field.value; 
  let url = `https://api.github.com/users/${name}`;
  let reposUrl = `https://api.github.com/users/${name}/repos`;
   fetchData(url, user)
   fetchData(reposUrl, repo);
    //console.log(repo);
});

