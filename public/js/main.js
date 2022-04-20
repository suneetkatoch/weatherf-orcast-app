const submitbtnn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_n=document.getElementById("city_n");
const realtemp=document.getElementById("realtemp");
const temp_logo=document.getElementById("temp_logo");
const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval==="")
    {
        city_n.innerText=`Please write the name before search`;
        
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b577f451bb2763220afe6ef288a2585e`;
        const response=await fetch(url);
        
        const data=await response.json();
        const arrdata= [data];
        city_n.innerText=`${arrdata[0].name} | ${arrdata[0].sys.country} `;
        realtemp.innerText=`${arrdata[0].main.temp}`;
        
        const tempstatus=arrdata[0].weather[0].main;
        

        if(tempstatus=="Sunny")
        {
            temp_logo.innerHTML="<i class=' fas fa-sun' style='color:#efe010'></i> ";

        }
        else if(tempstatus=="Clear")
        {
            temp_logo.innerHTML="<i class=' fas fa-sun' style='color:#efe010'></i> ";

        }
        else if(tempstatus=="Clouds")
        {
            temp_logo.innerHTML="<i class=' fas fa-cloud' style='color:#f1f2fc'></i> ";

        }
        else if(tempstatus=="Rainy")
        {
            temp_logo.innerHTML="<i class=' fas fa-cloud-rain' style='color:#a4b0be'></i> ";

        }
        else 
        {
            temp_logo.innerHTML="<i class=' fas fa-cloud' style='color:#44c3de'></i> ";

        }
        
        }catch{
            city_n.innerText=`Please enter the correct city name`;

        }
    }
}
submitbtnn.addEventListener('click',getinfo);