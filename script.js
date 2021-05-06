var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function() {
  content.classList.toggle("show");
});

var toggle2  = document.getElementById("toggle2");
var content2 = document.getElementById("content2");

toggle2.addEventListener("click", function() {
  content2.classList.toggle("show");
});

var toggle3  = document.getElementById("toggle3");
var content3 = document.getElementById("content3");

toggle3.addEventListener("click", function() {
  content3.classList.toggle("show");
});

var toggle4  = document.getElementById("toggle4");
var content4 = document.getElementById("content4");

toggle4.addEventListener("click", function() {
  content4.classList.toggle("show");
});

var toggle5  = document.getElementById("toggle5");
var content5 = document.getElementById("content5");

toggle5.addEventListener("click", function() {
  content5.classList.toggle("show");
});

var toggle6  = document.getElementById("toggle6");
var content6 = document.getElementById("content6");

toggle6.addEventListener("click", function() {
  content6.classList.toggle("show");
});

var toggle7  = document.getElementById("toggle7");
var content7 = document.getElementById("content7");

toggle7.addEventListener("click", function() {
  content7.classList.toggle("show");
});

var toggle8  = document.getElementById("toggle8");
var content8 = document.getElementById("content8");

toggle8.addEventListener("click", function() {
  content8.classList.toggle("show");
});

var toggle9  = document.getElementById("toggle9");
var content9 = document.getElementById("content9");

toggle9.addEventListener("click", function() {
  content9.classList.toggle("show");
});

var toggle10  = document.getElementById("toggle10");
var content10 = document.getElementById("content10");

toggle10.addEventListener("click", function() {
  content10.classList.toggle("show");
});

var toggle11  = document.getElementById("toggle11");
var content11 = document.getElementById("content11");

toggle11.addEventListener("click", function() {
  content11.classList.toggle("show");
});

var toggle12  = document.getElementById("toggle12");
var content12 = document.getElementById("content12");

toggle12.addEventListener("click", function() {
  content12.classList.toggle("show");
});

var toggle13  = document.getElementById("toggle13");
var content13 = document.getElementById("content13");

toggle13.addEventListener("click", function() {
  content13.classList.toggle("show");
});

var toggle14  = document.getElementById("toggle14");
var content14 = document.getElementById("content14");

toggle14.addEventListener("click", function() {
  content14.classList.toggle("show");
});

var toggle15  = document.getElementById("toggle15");
var content15 = document.getElementById("content15");

toggle15.addEventListener("click", function() {
  content15.classList.toggle("show");
});

function playclip() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
     {
      document.all.sound.src = "pop.mp3";
     }
    }
    
    else {
    {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    }
    }
    }



