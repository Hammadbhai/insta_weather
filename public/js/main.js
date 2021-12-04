const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const citynameout = document.getElementById('citynameout');
const temprl = document.getElementById('temprl');
const tempsta = document.getElementById('tempsta');
const datah = document.querySelector('.middle-layer');
const date = document.getElementById('date');




const getinfo = async(event)=>{
    event.preventDefault();
    const cityvalue = cityname.value;
   
    if (cityvalue === "") {

        citynameout.innerText = `Plz Write the name before Search`;
        datah.classList.add('data-hide');
    } else 
    { try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=4da782e6b449ba310dfc30dcd03e2015`;
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        citynameout.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temprl.innerText = arrdata[0].main.temp;
        const tempmood = arrdata[0].weather[0].main;
        // if condition 
        
        if (tempmood == "Mist") {
        tempsta.innerHTML = "<i class='fas fa-cloud-moon' style='font-size:24px;color: blue'></i>"
     }else if (tempmood == "Cloud"){
        tempsta.innerHTML = "<i class='fas fa-cloud-sun' style='font-size:24px'></i>";
     }else if (tempmood == "Rainy"){
        tempsta.innerHTML = "<i class='fas fa-cloud-rain' style='font-size:24px'></i>";
     }else{
        tempsta.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
     }
        
     
     datah.classList.remove('data-hide');
       } catch{
        citynameout.innerText = `Plz enter the city name properly`;
        datah.classList.add('data-hide');
       }
    }
}

submitbtn.addEventListener('click', getinfo);





