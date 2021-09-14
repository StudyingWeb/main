let p=document.querySelector(":root");
let nav=document.querySelector("header");
let logo_nav=document.querySelector(".logo-nav");

let logo = document.querySelector(".logo");

let wdt=document.documentElement.clientWidth;
let hgt=window.innerHeight;
logo_nav.style.fontSize=0.035*hgt;

window.addEventListener('scroll', ()=> 
    {
        if (window.scrollY>hgt-70)
        {
            nav.style.background="blue";
        }
        else
        {
            nav.style.background="";
        }

        if (window.scrollY>50)
        {
            logo.classList.add("calm");
            logo_nav.classList.add("calm");
        }
        else
        {
            logo.classList.remove("calm");  
            logo_nav.classList.remove("calm");  
        }
    }
);

