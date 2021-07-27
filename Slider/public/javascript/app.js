//preview

 const prev = document.getElementById("prev").addEventListener("click", preview);
 const NEXT = document.getElementById("next").addEventListener("click", next);
 let thumbanil = document.getElementsByClassName("thumbnail");
 let hero = document.getElementById("hero");

 let background = [
     "img/bg1.jpg",
     "img/bg2.jpg",
     "img/bg3.jpg",
     "img/bg4.jpg",
     "img/bg5.jpg",
 ];

let i = 0; 
function next(){
    if(i < 4){
        hero.style.backgroundImage = 'url("'+ background[i+1] +'")';
        thumbanil[i+1].classList.add("active");
        thumbanil[i].classList.remove("active");
        i++;
    } 
};
function preview(){
    if( i > 0){
        hero.style.backgroundImage = 'url("'+background[i-1]+'")';
        thumbanil[i-1].classList.add("active");
        thumbanil[i].classList.remove("active");
        i--;
    }
}

//select
// imges
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

let allImages = [img1, img2, img3, img4, img5]

for( let i = 0; i <= allImages.length; i++){
    let allI = allImages[i];
    allI.addEventListener("click", showImg);
    function showImg(){
        hero.style.backgroundImage = 'url("'+ background[i]+'")';
        thumbanil[i].classList.remove("active");
    }
};