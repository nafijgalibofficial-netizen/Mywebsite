// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Typing Effect

const text = [
    "Software Engineering Student",
    "Future Full Stack Developer",
    "Learning AI & Web Development"
];

let textIndex = 0;
let charIndex = 0;

const title = document.querySelector(".hero-text h2");

function type(){

    if(charIndex < text[textIndex].length){

        title.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,80);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        title.textContent = text[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,40);

    }

    else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;

        }

        setTimeout(type,400);

    }

}

title.textContent="";

type();


// Reveal Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(sec=>{

        const top=sec.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            sec.style.opacity="1";
            sec.style.transform="translateY(0)";

        }

    });

});

sections.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(50px)";
    sec.style.transition=".8s";

});


// Back To Top Button

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.style.position="fixed";
btn.style.right="20px";
btn.style.bottom="20px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#38bdf8";
btn.style.color="white";
btn.style.fontSize="20px";
btn.style.cursor="pointer";
btn.style.display="none";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        btn.style.display="block";

    }

    else{

        btn.style.display="none";

    }

});

btn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};