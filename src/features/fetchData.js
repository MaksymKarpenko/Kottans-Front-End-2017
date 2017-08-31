
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
  fetch(url)
  .then(status)  
  .then(json)  
  .then( (data) => {  
    //console.log('Request succeeded with JSON response', data);
     if(data.login){
        request = data;
        console.log(request);
     }else {
        request = data;
        console.log(request);
        const repos = parseData(request);
        for(let repo of repos){
            render(container, repositories(repo));
        }
     }
  })
  
  .catch( (error) => {  
    console.log('Request failed', error);  
  });
}
  