//Efecto modal en imagenes
const modal = document.getElementById("modal");
const modalContent = document.getElementById("imgModal");
const close = document.getElementById("close");
// imges
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
//Array
let images = [img1, img2, img3];
/* Evento click */
for(let i = 0; i <= images.length; i++){
        let listOfImag = images[i];
        listOfImag.addEventListener("click", openImg);
         // Funcion ----Show img----
        function openImg(){
            modal.style.display = "block";
            modalContent.style.height = "50%";
            modalContent.src = this.src;
        };
        //Cerrar ----Close img----
        let span = document.getElementById("close");
        span.addEventListener("click", closex);
        //Funcion
        function closex(e){
            if(e.target.classList.contains("cerrar")){
            modal.style.display = "none";
            };
        }
};
