/* Lighbox */ 
const images = document.querySelectorAll(".img-gallery");
const imagesLight = document.getElementById("addImages");
const containerLight = document.getElementById("imagenLight");
const hamburger1 = document.getElementById("hamburger");

 
images.forEach( (img) => {
    img.addEventListener("click", ()=>{
        aparecerImagen(img.getAttribute("src"));
    })
});

containerLight.addEventListener("click", (e)=>{
    if(e.target !== imagesLight){
        containerLight.classList.toggle("show");
        imagesLight.classList.toggle("showImage");
        hamburger1.style.opacity = "1";
    }
})

const aparecerImagen = (img) =>{
    imagesLight.src = img;
    containerLight.classList.toggle("show");
    imagesLight.classList.toggle("showImage");
    hamburger1.style.opacity = "0";
}