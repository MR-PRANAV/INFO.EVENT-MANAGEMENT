function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




/* ---------------NAV BAR ---START-------------- */
function showsidebar(){
    const sidebar = document.querySelector('.NAV-DIV-DROPDOWN')
    sidebar.style.display = 'flex'
        const hideicon = document.querySelector('.feather-feather-menu')
        hideicon.style.display = 'none'
}

function hidesidebar(){
    const sidebar = document.querySelector('.NAV-DIV-DROPDOWN')
    sidebar.style.display = 'none'
        const hideicon = document.querySelector('.feather-feather-menu')
        hideicon.style.display = 'block'
}
/* ---------------NAV BAR ---END-------------- */




// <!--HOME TEXT ANIMATION START -->


    var txt ='⁜ We Create Your Celebration Greater Than Better ⁜  ';
    var speed = 110;
    var pauseDuration = 3000;

    function typeForward() {
      var i = 0;
      function forward() {
        if (i < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          moveCursor();
          setTimeout(forward, speed);
        } else {
          setTimeout(typeReverse, pauseDuration); 
        }
      }
      forward();
    }

    function typeReverse() {
      var i = txt.length - 1;
      function reverse() {
        if (i >= 0) {
          var newTxt = txt.substring(0, i);
          document.getElementById("demo" ).innerHTML = newTxt ;
          i--;
          moveCursor();
          setTimeout(reverse, speed);
        } else {
          setTimeout(typeForward, speed); 
        }
      }
      reverse();
    }

    function moveCursor() {
      var cursorPosition = document.getElementById("demo").innerText.length;
      document.getElementById("cursor").style.marginLeft = ( cursorPosition * -0.1  +"px" ); 
      
    }

    typeForward(); 


    // <!--HOME TEXT ANIMATION END -->

/* ---------------IMG SLIDER ---START-------------- */

document.addEventListener('DOMContentLoaded', function () {
    const slider=document.querySelector('.SLIDER-THREE');
    const slides=document.querySelectorAll('.SLIDER-THREE img');
    let currentSlide=0;
    const slideCount=slides.length;

    function showSlide(slideIndex) {
        //hide other slide
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        //show selected slide
        slides[slideIndex].classList.add('active');
    }

    function nextSlide() {
        currentSlide=(currentSlide + 1)%slideCount;
        showSlide(currentSlide);
    }

  
    let interval=setInterval(nextSlide,4000); 

    
    slider.addEventListener('mouseover',function(){
        clearInterval(interval);
    });

   
    slider.addEventListener('mouseout',function(){
        interval=setInterval(nextSlide,3000);
    });

    
    showSlide(currentSlide);
});

/* ---------------IMG SLIDER ---END-------------- */


/* ---------------DROPDOWN INFO Dedicated Event Management Teams: ---START------- */
  function Increaseindex(element) {
    var className = element.getAttribute('class');
    // Reset z-index of all elements to 2
    var elements = document.querySelectorAll('details');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.zIndex = '1';
      // elements.style.width = "20px";
    }

    // Set z-index of clicked element to 3
    element.style.zIndex = '2';
  }
/* ---------------DROPDOWN INFO  Dedicated Event Management Teams:---END-------- */



// ---------------GET IN TOUCH FORM VALIDATION---START-----------


function validateFeedbackForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;

    // name validation
    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "*NAME IS REQUIRED";
        isValid = false;
    } 
    else if (!/^[a-zA-Z\s]*$/.test(name)) {
        document.getElementById("nameError").innerHTML = "*NAME CANNOT CONTAIN NUMBERS";
        isValid = false;
    }else {
        document.getElementById("nameError").innerHTML = "";
    }

    // email validation
    if (email.trim() === "") {
        document.getElementById("emailError").innerHTML = "*EMAIL IS REQUIRED";
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "*PLEASE ENTER THE VALID EMAIL";
        isValid = false;
    }  else {
        document.getElementById("emailError").innerHTML = "";
    }

    // message validation
    if (message.trim() === "") {
        document.getElementById("messageError").innerHTML = "*MESSAGE IS REQUIRED";
        isValid = false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    return isValid;
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// ---------------GET IN TOUCH FORM VALIDATION---end-----------

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}