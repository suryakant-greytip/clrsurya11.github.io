
function myfunction(){
    document.getElementById("mytopnav").classList.toggle("responsive");
    
}
//navbar sticky
window.onscroll = function() {myFunction()};


var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mytopnav.classList.add("sticky")
  } else {
    mytopnav.classList.remove("sticky");
  }
}

GitHubCalendar(".calendar", "clrsurya11");
// or enable responsive functionality
GitHubCalendar(".calendar", "clrsurya11", { responsive: true });

function resume(){
  window.open("https://drive.google.com/file/d/1kBdAeE0BNjlNOoXdLf-q9CGft1Oke0v0/view?usp=sharing", "_blank");
};

