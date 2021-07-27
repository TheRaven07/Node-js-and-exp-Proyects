 //circle

 const circle = document.getElementById("circle");
 const upBtn = document.getElementById("upBtn");
 const downBtn = document.getElementById("downBtn");

 let rotateValue = circle.style.transform;
 let rotateSum;

//Up arrow
 upBtn.addEventListener("click", ()=>{
     rotateSum = rotateValue + "rotate(-90deg)";
     circle.style.transform = rotateSum;
     rotateValue = rotateSum
 });
//Down arrow
downBtn.addEventListener("click", ()=>{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
});

 