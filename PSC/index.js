var api_key= "ccb731be";
let id;
// "https://swapi.dev/api/people/?page=3"

//https://swapi.dev/api/people/?search=luke

async function getData(){
    let query= document.getElementById("query").value;
    let url = 'https://swapi.dev/api/people/?search='+query

    let res = await fetch(url)

    let data = await res.json()
        
    return data.results;
}

function append(data){
    let container= document.getElementById("result")
    container.innerHTML=null
    data.forEach(function(ele)
    {
       let p = document.createElement('p')
       p.innerText=ele.name;

       container.append(p)

    })
}

 async function main(){
     let data = await getData()
     append(data);
 }

function deboucing(func,delay)
{ 
    if(id)
    {
        clearTimeout(id)
    }
     id =  setTimeout(function(){
        func()
    },delay)
}

