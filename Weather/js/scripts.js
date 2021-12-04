const appId="".toString();
const getCityName=()=>{
    let cityName=document.querySelector("#cityName").value;
    return cityName;
}
 const fetchData = async ()=>{
    console.log("fetch data");
    const q = getCityName();
    if(q==""){
        alert("Please Enter city Name");
    }
    //promises
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`)
    //     .then(response=>response.json())
    //     .then(data=>console.log(data))
    //     .catch(err=>console.log(err));

    //async await
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}&units=metric`);
        const data = await response.json();
        console.log(data);
        document.querySelector("#temp").innerHTML=`${data.main.temp}<sup>0</sup>C`;
        document.querySelector("#humidity").innerHTML=`${data.main.humidity}%`;
        document.querySelector("#wind").innerHTML=`${data.wind.speed}Km/h`;
    }catch(err)
    {
        console.log(err);
    }
    
}

document.querySelector("#check").addEventListener("click",fetchData);
