const plusBtns = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
const imgPlus = Array.from(document.querySelectorAll(".img-plus"));
const plusCircles = Array.from(document.querySelectorAll(".plus"));
let viewPortWidth = document.documentElement.clientWidth;
window.addEventListener('resize', function(event){
  viewPortWidth = document.documentElement.clientWidth;
});


plusBtns.forEach( (item,ind) => {
  let toggle = false;
  item.addEventListener("click", () => {
    answers[ind].classList.toggle("active-answer");
    if (viewPortWidth < 1024) {
      if (toggle === false) {
        imgPlus[ind].style.rotate = "45deg";
        plusCircles[ind].style.top = "25px"
        toggle = true;
      } else {
        imgPlus[ind].style.rotate = "0deg";
        plusCircles[ind].style.top = "50%"
        toggle = false;
      }
    } else if (viewPortWidth > 1024){
      if (toggle === false) {
        imgPlus[ind].style.rotate = "45deg";
        plusCircles[ind].style.top = "47px"
        toggle = true;
      } else {
        imgPlus[ind].style.rotate = "0deg";
        plusCircles[ind].style.top = "50%"
        toggle = false;
      }
    }
  })
})