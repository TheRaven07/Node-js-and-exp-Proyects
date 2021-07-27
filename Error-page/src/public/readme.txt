Efecto modal

HTML 
<div id="modal" class="modal">
          <span id="close" class="cerrar">X</span>
          <img id="imgModal" class="modal__content" src="" />
</div>

Css 
/*Efecto Modal*/
.modal{
    display: none;
    position: fixed;
    padding-top: 200px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
}
.modal__content{
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    animation: zoom 0.5s;
}
.cerrar{
    position: absolute;
    top: 15px;
    right: 35px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
}
@keyframes zoom {
    from {transform: scale(0);}
    to {transform: scale(1);}
}

Javascript
//Efecto modal en imagenes

const modal = document.getElementById("modal");
const modalContent = document.getElementById("imgModal");
const close = document.getElementById("close");

// imges
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let images = [img1, img2, img3];

/* Evento click */

for(let i = 0; i <= images.length; i++){
        let listOfImag = images[i];
        listOfImag.addEventListener("click", openImg);
         // Funcion ----Show img----
        function openImg(){
            modal.style.display = "block";
            modalContent.src = this.src;
        };
        //Cerrar ----Close img----
        let span = document.getElementById("close");
        span.addEventListener("click", closex);
        //Funcion
        function closex(e){
            if(e.target.classList.contains("close")){
            modal.style.display = "none";
            };
        }
};
