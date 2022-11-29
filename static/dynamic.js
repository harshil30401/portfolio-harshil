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
        strings: ["Developer.","Designer.", "Freelancer."],
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
    }
}

document.getElementById('close').onclick = function () {
    showHide('tooltip')
}

function getBotResponse(){
    
    $.get("/get", {userMessage:returnsUserMessage()}).done(function (data) {
        
        let botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'client-chat';
        botMessageDiv.innerHTML = data;

        var chatWindow = document.getElementById('chatWindow');
        chatWindow.appendChild(botMessageDiv);
        console.log("Success!");


    });

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

    let userMessage = returnsUserMessage();

    if (userMessage != "") {
        let div = document.createElement("div");
        div.className = "user-chat";
        div.innerHTML = userMessage;
        if (div.innerHTML == 1) {
            // div.innerHTML = "You cannot write this" //Do nothing
            null;
        }
        var chatWindow = document.getElementById('chatWindow');
        chatWindow.appendChild(div);

        var myScreen = document.getElementById('myScreen');
        myScreen.scrollTop = myScreen.scrollHeight - myScreen.clientHeight;

        document.getElementById('input-chat').value = ''


        //Sending the message to python and back
        $.get("/get", {userMessage:userMessage}).done(function (data) {
            
            let botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'client-chat';
            botMessageDiv.innerHTML = data;

            var chatWindow = document.getElementById('chatWindow');
            chatWindow.appendChild(botMessageDiv);
            myScreen.scrollTop = myScreen.scrollHeight - myScreen.clientHeight;
            console.log("Success!");
        });

        //Future scope
        // if (userMessage.includes("interview")) {
        //     var getMeTo = document.getElementById("contact");
        //     getMeTo.scrollIntoView({behavior: 'smooth'}, true);
        // }

    }

}



















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
