let ImageDisplay=document.querySelector(".Image-Display"),
imgpick=document.querySelector(".img-pick"),
figure=document.querySelectorAll("figure");

let currentImage=ImageDisplay.firstElementChild;

imgpick.addEventListener("click",function(event){
    let clicked = event.target;
  if(clicked.className === "img1"){
    currentImage.setAttribute("src",clicked.src)
  }
  if(clicked.className === "img2"){
    currentImage.setAttribute("src",clicked.src)
  
  }
  if(clicked.className === "img3"){
    currentImage.setAttribute("src",clicked.src)
   
  } 
})




