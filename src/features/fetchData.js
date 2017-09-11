import parseData from './parse-data.js';
import repositories from './repositories.js';
import render from './render.js';

const container = document.querySelector('.container');
let status = (response) => {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}

let json = (response) => {  
  return response.json()  
}

export default (url, request) => {
fetch(url, { 
    method: "GET",
    header: {
      'Accept': 'application/vnd.github.mercy-preview+json'
  }
})
  .then(status)  
  .then(json)  
  .then( (data) => {  
    //console.log('Request succeeded with JSON response', data);
        request = data;
        console.log(request);
        const repos = parseData(request);
        for(let repo of repos){
            render(container, repositories(repo));
        }
  })
  
  .catch( (error) => {  
    console.log('Request failed', error);  
  });
}
  