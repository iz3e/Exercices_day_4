var starpeople = document.querySelector('ul');

fetch('https://swapi.co/api/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 
  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<button>' + p.name + '</button>'; 
    starpeople.appendChild(listItem);  
  }
});