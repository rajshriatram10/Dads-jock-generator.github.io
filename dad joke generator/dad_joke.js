const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="UZLGaHI1BI260+ix8COxEQ==NT0KUMNKFjpS7DLl";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },

};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try{
        jokeEl.innerText="Updating...."
        btnEl.dissabled=true;
        btnEl.innerText="loading..";
        const response= await fetch(apiURL,options);
        const data= await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        jokeEl.innerHTML=data[0].joke;

    }catch(error){
        jokeEl.innerHTML="an error happened,try again later";

        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";


        console.log(error);
    }


}

btnEl.addEventListener("click",getJoke);