let p=document.querySelector(":root");
let nav=document.querySelector("header");

let logo = document.querySelector(".logo");

let wdt=document.documentElement.clientWidth;
let hgt=window.innerHeight;

window.addEventListener('scroll', ()=> 
    {
        if (window.scrollY>hgt/3)
        {
            console.log(1);
            nav.style.background="rgba(0,0,0,0.1)";
        }
        else
        {
            nav.style.background=""; 
        }

        if (window.scrollY>50)
        {
            logo.classList.add("calm");
        }
        else
        {
            logo.classList.remove("calm");  
        }
    }
);

