$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Designer.","Developer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var robo = document.getElementById('chatTrigger')
    // robo.onclick = function () {
    //     var el = document.getElementById('tooltip');
    //     if( el && el.style.display == 'block'){    
    //         el.style.display = 'none';
    //         var typed = new Typed(".message-box", {
    //             strings: [],
    //             typeSpeed: 50,
    //             // backSpeed: 50,
    //             loop: false
    //         });

    //     }
    //     else{ 
    //         el.style.display = 'block';
    //         var typed = new Typed(".message-box", {
    //             strings: ["Hi I am KITT, I am Harshil's AI powered chatbot, I am currently under the testing phase and will soon be available!"],
    //             typeSpeed: 50,
    //             // backSpeed: 50,
    //             loop: false
    //         });
    //     }
    // }

});


// $(document).ready(()=>{
//     $(".chat-btn").click(()=>{
//         $(".chat-box").slideToggle("easing")
//     })
// });

function showHide(id) {

    var el = document.getElementById(id);
    if( el && el.style.display == 'block'){    
        el.style.display = 'none';
    }
    else{ 
        el.style.display = 'block';

        document.getElementById('chatTrigger')

    }
}

document.getElementById('close').onclick = function () {
    showHide('tooltip')
}

function returnsUserMessage(){
    var userResponse = document.getElementById('input-chat').value;
    console.log(userResponse)
    // if (userResponse == "") {
    //     userResponse = null;
    // }
    return userResponse;
}

function getUserResponse(){

    let div = document.createElement("div")
    div.className = "user-chat";
    div.innerHTML = returnsUserMessage();
    if (div.innerHTML != ""){
        var chatWindow = document.getElementById('chatWindow');
        chatWindow.appendChild(div);

        var myScreen = document.getElementById('myScreen');
        myScreen.scrollTop = myScreen.scrollHeight - myScreen.clientHeight;

        document.getElementById('input-chat').value = '';
    }
}


//ScrollTrigger for about
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.about-content',
        start: "top bottom"
    }
});

tl
// .from(".aboutTitle",{z:200, opacity:0, duration:0.2})
.from(".aboutLeft",{x:-25, opacity:0, duration:1})
.from(".aboutRight", {x:25, opacity:0, duration:1}, "-=1") 
// Offset: Start 1s earlier by you would normally would

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.servicesBaby',
        start: "top bottom",
    }
});

t2
.from(".servicesBaby" ,{y:25, opacity:0, duration:1})

let t3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.skills-content',
        start: "top bottom",
    }
});

t3
// .from(".skillsTitle",{z:200, opacity:0, duration:0.2})
.from(".skillsLeft",{x:-25, opacity:0, duration:1})
.from(".skillsRight", {y:25, opacity:0, duration:1}, "-=1") 

let t4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.contact',
        start: "top bottom",
    }
});

t4
// .from(".skillsTitle",{z:200, opacity:0, duration:0.2})
.from(".contactLeft",{x:-25, opacity:0, duration:1})
.from(".contactRight", {x:25, opacity:0, duration:1}, "-=1") 

let t5 = gsap.timeline({
    scrollTrigger:{
        trigger:".projects",
        start: "top bottom"
    }
});

t5
.from(".projContainer", {y:-25, opacity:0, duration:1, stagger:0.3, ease:"bounce"})


let bot = gsap.timeline({
    scrollTrigger:{
        trigger:".chatbot",
        start:"top bottom"
    }
});



let socialMedia = gsap.timeline()
socialMedia
.from(".icons-wrapper", 
// {x:200, duration:2},
{y:-100, duration:3,  ease:"bounce"}
)


// Home content
gsap.from(".text-1", {duration:1, x:-50, opacity:0});
gsap.from(".text-2", {duration:1, x:50, opacity:0, delay:0.5});
gsap.from(".text-3", {duration:1, opacity:0, delay:1});
gsap.from(".hireMe", {duration:1, opacity:0});

gsap.from(".line1", {
    y:200,
    skewY:45,
    opacity:0,
    duration:1
})

gsap.from(".menu li", {
    y:25,
    opacity:0,
    duration:1,
    stagger:0.3
});

gsap.from(".logo",{
    y:25,
    duration:2,
    opacity:0,
    rotate:-45
});

gsap.from(".fa-bars", {
    opacity:0,
    y:-50,
    ease:"power3",
    duration:2
})










// .from(".chat-btn", {x:225, duration:1})
// .to(".chat-btn", {x:-10, rotate:-360, duration:5, ease:"bounce"})


// Moving cursor

// gsap.set(".ball", {xPercent: 150, yPercent: 150});

//     const ball = document.querySelector(".ball");
//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };
//     const speed = 0.2;

//     const xSet = gsap.quickSetter(ball, "x", "px");
//     const ySet = gsap.quickSetter(ball, "y", "px");

//     window.addEventListener("mousemove", e => {    
//     mouse.x = e.x;
//     mouse.y = e.y;  
//     });

//     gsap.ticker.add(() => {
    
//     // adjust speed for higher refresh monitors
//     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
//     pos.x += (mouse.x - pos.x) * dt;
//     pos.y += (mouse.y - pos.y) * dt;
//     xSet(pos.x);
//     ySet(pos.y);
//     });























// Send Message Button

// document.querySelectorAll(".button").forEach((button) => {
//     let getVar = (variable) =>
//         getComputedStyle(button).getPropertyValue(variable);

//     button.addEventListener("click", (e) => {
//         if (!button.classList.contains("active")) {
//         button.classList.add("active");

//         gsap.to(button, {
//             keyframes: [
//             {
//                 "--left-wing-first-x": 50,
//                 "--left-wing-first-y": 100,
//                 "--right-wing-second-x": 50,
//                 "--right-wing-second-y": 100,
//                 duration: 0.2,
//                 onComplete() {
//                 gsap.set(button, {
//                     "--left-wing-first-y": 0,
//                     "--left-wing-second-x": 40,
//                     "--left-wing-second-y": 100,
//                     "--left-wing-third-x": 0,
//                     "--left-wing-third-y": 100,
//                     "--left-body-third-x": 40,
//                     "--right-wing-first-x": 50,
//                     "--right-wing-first-y": 0,
//                     "--right-wing-second-x": 60,
//                     "--right-wing-second-y": 100,
//                     "--right-wing-third-x": 100,
//                     "--right-wing-third-y": 100,
//                     "--right-body-third-x": 60,
//                 });
//                 },
//             },
//             {
//                 "--left-wing-third-x": 20,
//                 "--left-wing-third-y": 90,
//                 "--left-wing-second-y": 90,
//                 "--left-body-third-y": 90,
//                 "--right-wing-third-x": 80,
//                 "--right-wing-third-y": 90,
//                 "--right-body-third-y": 90,
//                 "--right-wing-second-y": 90,
//                 duration: 0.2,
//             },
//             {
//                 "--rotate": 50,
//                 "--left-wing-third-x": 27,
//                 "--left-wing-third-y": 95,
//                 "--right-body-third-x": 45,
//                 "--right-wing-second-x": 45,
//                 "--right-wing-third-x": 60,
//                 "--right-wing-third-y": 83,
//                 duration: 0.25,
//             },
//             {
//                 "--rotate": 55,
//                 "--plane-x": -8,
//                 "--plane-y": 24,
//                 duration: 0.2,
//             },
//             {
//                 "--rotate": 40,
//                 "--plane-x": 45,
//                 "--plane-y": -180,
//                 "--plane-opacity": 0,
//                 duration: 0.3,
//                 onComplete() {
//                 setTimeout(() => {
//                     button.removeAttribute("style");
//                     gsap.fromTo(
//                     button,
//                     {
//                         opacity: 0,
//                         y: -8,
//                     },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         clearProps: true,
//                         duration: 0.3,
//                         onComplete() {
//                         button.classList.remove("active");
//                         },
//                     }
//                     );
//                 }, 2000);
//                 },
//             },
//             ],
//         });

//         gsap.to(button, {
//             keyframes: [
//             {
//                 "--text-opacity": 0,
//                 "--border-radius": 0,
//                 "--left-wing-background": getVar("--primary-darkest"),
//                 "--right-wing-background": getVar("--primary-darkest"),
//                 duration: 0.1,
//             },
//             {
//                 "--left-wing-background": getVar("--primary"),
//                 "--right-wing-background": getVar("--primary"),
//                 duration: 0.1,
//             },
//             {
//                 "--left-wing-background": getVar("--primary-dark"),
//                 "--right-wing-background": getVar("--primary-dark"),
//                 duration: 0.4,
//             },
//             {
//                 "--success-opacity": 1,
//                 "--success-scale": 1,
//                 duration: 0.25,
//                 delay: 0.25,
//             },
//             ],
//         });
//         }
//     });
//     });






// function sendMessage(){
//     alert("Please manually send an email to ( harshilpatel30401@gmail.com ) as this feature is currently in the testing phase.")
// }

// var submitButton = document.getElementById('submit-btn');
// submitButton.addEventListener('click', function(e) {
//     e.preventDefault()
//     var sName = document.getElementById('senderName').value;
//     var sEmail = document.getElementById('senderEmail').value;
//     var sSubject = document.getElementById('senderSubject').value;
//     var sMessage = document.getElementById('senderMessage').value;
//     var r = confirm("Your Name: "+sName+"\nYour Email: "+sEmail+"\n Your Subject: "+sSubject+"\nYour Message: "+sMessage+"\n Ready to send?")
//     if(r == true){
//         Email.send({
//             Host : "smtp.gmail.com",
//             Username : "kitt30401@gmail.com",
//             Password : "KNIGHTRIDER",
//             To : 'harshilpatel30401@gmail.com',
//             From : "you@isp.com",
//             Subject : "This is the subject",
//             Body : "And this is the body"
//         }).then(
//           message => alert("Message Sent!")
//         );
//     }
// })
