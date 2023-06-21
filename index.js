/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu1')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu1')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home-img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 50    }); 

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
// sr.reveal( ".button", { delay: 100 } );
sr.reveal( ".home-img", { delay: 100 } );
sr.reveal( ".home-social-icon", { interval: 100 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 100 } );
sr.reveal( ".about-text", { delay: 100 } );

// Scross main skills mainskills
sr.reveal( ".mainskills", { interval: 50 } );
sr.reveal( ".mskill-img", { delay: 50 } );
sr.reveal( ".mskill-text", { delay: 50 } );
/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 50 } );
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
// sr.reveal( ".project-img", { interval: 20 } );
// sr.reveal( ".mskill-text", { delay: 20 } );

// SCROLL CONTACT


sr.reveal(".contact-input", { interval: 100 });

// document.querySelector("#resume-link-1").addEventListener("click",function(){
//     window.open("./Sarvesh-Gupta-Resume.pdf","_blank");
// });
// document.querySelector("#resume-button-2").addEventListener("click",function(){
//     window.open("./Sarvesh-Gupta-Resume.pdf","_blank");
// });

// let resumebtn2=document.getElementById("resume-button-2").addEventListener("click",()=>{
//     window.location.assign("https://drive.google.com/file/d/1WwyZM4B90dXvVFvoe5K5WVgnGRB25qY4/view?usp=sharing")
//   })


// For Passing the CP Platform Testcases
// let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
// let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)
// function NewTab() {
//   window.location.assign(
//     "https://drive.google.com/file/d/1WwyZM4B90dXvVFvoe5K5WVgnGRB25qY4/view?usp=sharing","_blank"
//   );
// }
// For Passing the CP Platform Testcases

    
document.querySelector("#resume-button-1").addEventListener("click",()=>{
    console.log("hiii")
    window.open("https://drive.google.com/file/d/1kBdAeE0BNjlNOoXdLf-q9CGft1Oke0v0/view?usp=sharing", "_blank")
})


var typing=new Typed(".text", {
    strings: ["", "Backend", "Java", "DEVELOPER"],
    typeSpeed: 120,
    backSpeed: 50  ,
    loop: true,
});

let project_WorkoutFitnessCenter = document.getElementById("project_WorkoutFitnessCenter");
let project_CloudTv = document.getElementById("project_CloudTv");
let project_TypeBattle = document.getElementById("project_TypeBattle");
let project_OpenChat = document.getElementById("project_OpenChat");
let project_GrabYourFit = document.getElementById("project_GrabYourFit");
let project_WMB = document.getElementById("project_WMB");
let project_PigGame = document.getElementById("project_PigGame");

let project_WorkoutFitnessCenter_Arr = ["./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter1.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter2.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter3.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter4.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter5.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter6.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter7.png", "./images/projects/WorkoutFitnessCenter/WorkoutFitnessCenter8.png"];
let project_CloudTv_Arr = ["./images/projects/CloudTv/CloudTv1.png", "./images/projects/CloudTv/CloudTv2.png", "./images/projects/CloudTv/CloudTv3.png", "./images/projects/CloudTv/CloudTv4.png", "./images/projects/CloudTv/CloudTv5.png"];
let project_TypeBattle_Arr = ["./images/projects/TypeBattle/TypeBattle1.png", "./images/projects/TypeBattle/TypeBattle2.png", "./images/projects/TypeBattle/TypeBattle3.png", "./images/projects/TypeBattle/TypeBattle4.png", "./images/projects/TypeBattle/TypeBattle5.png"];
let project_OpenChat_Arr = ["./images/projects/OpenChat/OpenChat1.png", "./images/projects/OpenChat/OpenChat2.png", "./images/projects/OpenChat/OpenChat3.png", "./images/projects/OpenChat/OpenChat4.png"];
let project_GrabYourFit_Arr = ["./images/projects/GrabYourFit/GrabYourFit1.png", "./images/projects/GrabYourFit/GrabYourFit2.png", "./images/projects/GrabYourFit/GrabYourFit3.png", "./images/projects/GrabYourFit/GrabYourFit4.png", "./images/projects/GrabYourFit/GrabYourFit5.png", "./images/projects/GrabYourFit/GrabYourFit6.png", "./images/projects/GrabYourFit/GrabYourFit7.png", "./images/projects/GrabYourFit/GrabYourFit8.png", "./images/projects/GrabYourFit/GrabYourFit9.png"];
let project_WMB_Arr = ["./images/projects/WMB/WMB1.png", "./images/projects/WMB/WMB2.png", "./images/projects/WMB/WMB3.png", "./images/projects/WMB/WMB4.png", "./images/projects/WMB/WMB5.png", "./images/projects/WMB/WMB6.png"];
let project_PigGame_Arr = ["./images/projects/PigGame/PigGame1.png", "./images/projects/PigGame/PigGame2.png", "./images/projects/PigGame/PigGame3.png", "./images/projects/PigGame/PigGame4.png", "./images/projects/PigGame/PigGame5.png", "./images/projects/PigGame/PigGame6.png", "./images/projects/PigGame/PigGame7.png", "./images/projects/PigGame/PigGame8.png", "./images/projects/PigGame/PigGame9.png", "./images/projects/PigGame/PigGame10.png", "./images/projects/PigGame/PigGame11.png", "./images/projects/PigGame/PigGame12.png", "./images/projects/PigGame/PigGame13.png", "./images/projects/PigGame/PigGame14.png"];

project_WorkoutFitnessCenter.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_WorkoutFitnessCenter_Arr.length-1){
            count++;
            project_WorkoutFitnessCenter.src=project_WorkoutFitnessCenter_Arr[count];
        }else{            
            count=0;
            project_WorkoutFitnessCenter.src=project_WorkoutFitnessCenter_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },8000);
})
project_CloudTv.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_CloudTv_Arr.length-1){
            count++;
            project_CloudTv.src=project_CloudTv_Arr[count];
        }else{            
            count=0;
            project_CloudTv.src=project_CloudTv_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },5000);
})
project_TypeBattle.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_TypeBattle_Arr.length-1){
            count++;
            project_TypeBattle.src=project_TypeBattle_Arr[count];
        }else{            
            count=0;
            project_TypeBattle.src=project_TypeBattle_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },5000);
})
project_OpenChat.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_OpenChat_Arr.length-1){
            count++;
            project_OpenChat.src=project_OpenChat_Arr[count];
        }else{            
            count=0;
            project_OpenChat.src=project_OpenChat_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },4000);
})
project_GrabYourFit.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_GrabYourFit_Arr.length-1){
            count++;
            project_GrabYourFit.src=project_GrabYourFit_Arr[count];
        }else{            
            count=0;
            project_GrabYourFit.src=project_GrabYourFit_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },9000);
})
project_WMB.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_WMB_Arr.length-1){
            count++;
            project_WMB.src=project_WMB_Arr[count];
        }else{            
            count=0;
            project_WMB.src=project_WMB_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },6000);
})
project_PigGame.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_PigGame_Arr.length-1){
            count++;
            project_PigGame.src=project_PigGame_Arr[count];
        }else{            
            count=0;
            project_PigGame.src=project_PigGame_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },14000);
})

GitHubCalendar(".git-stat-div", "clrsurya11");
// or enable responsive functionality
GitHubCalendar(".git-stat-div", "clrsurya11", { responsive: true });