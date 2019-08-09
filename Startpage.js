var backd = document.querySelector('#containers');
var bodd = document.querySelector('.content');
function preloader(){
            backd.style.display = "none";
            bodd.style.display = "block";
        }
window.onload = setTimeout(preloader,2600);