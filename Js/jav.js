
let parallaxMirror = document.querySelector(".parallax-mirror"),
parallaxSlider = document.querySelector(".parallax-slider");

window.addEventListener("scroll" , myFunction);
function myFunction() {

const scrollVal = window.scrollY,
scrollOut = "-" + scrollVal + "px",
scrollimg = (scrollVal - 40) + "px";

parallaxMirror.style.transform = `translate3d(0px, ${scrollOut}, 0px)`;
parallaxSlider.style.transform = `translate3d(0px, ${scrollimg}, 0px)`;
}

document.querySelector(".");