
//MEnu
const menuId = document.getElementById("menu");
menuId.addEventListener("click", toggle);

function toggle(){
    const menu = document.querySelector("#menu");
    menu.classList.toggle("active");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
}

//image / link
const home = document.getElementById("home");
const about = document.getElementById("about");
const serv = document.getElementById("serv");
const port = document.getElementById("port");
const team = document.getElementById("team");
const contact = document.getElementById("contact");

const allInfo = [ home, about, serv, port, team, contact];

const allImages = [
    "../img/img4.jpg",
    "../img/img1.jpg",
    "../img/img2.jpg",
    "../img/img3.jpg",
    "../img/img5.jpg",
    "../img/img6.jpg"
]

for( let i = 0; i <= allInfo.length; i++){
    
    const all = allInfo;
    all[i].addEventListener("mouseenter", () => {
        const slider = document.getElementById("slider");
        slider.src = allImages[i];
    });

    
};



//Menu Toggle 11:06 continuar cuando haya internet





