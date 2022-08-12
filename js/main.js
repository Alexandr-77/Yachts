
let burgerBlock = document.querySelector('.header__burger');
let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__block-nav');
let menu = document.querySelector('.header__ul');



burgerBlock.addEventListener('click', miFunction);

function miFunction() {
  burger.classList.toggle('burger-active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}
menu.addEventListener('click', miFunction22);
function miFunction22() {
  if (window.matchMedia("( max-width: 768px)") && nav.style.display === "none") {
    nav.style.display = "block";
  } else if (window.matchMedia("( max-width: 768px)") && nav.style.display === "block") {
    nav.style.display = "none";
  }

}

// ==================================

$('.slyder__box').slick({
  dots: true, 
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1331,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ===========================
$('.route__slyder').slick({
  dots: true, 
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1331,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// =============================================
let answersBtn = document.querySelectorAll('.answers__btn');
let answersOpen = document.querySelectorAll('.answers__box-text');

  for (let i = 0; i < answersBtn.length; i++) {
    answersBtn[i].onclick = function (){
      answersOpen[i].classList.toggle('answers__box-text--active') 
      answersBtn[i].classList.toggle('answers__btn--active') 
    }
  }
  // answersBtn.forEach( (e, index) => {
  //   e.onclick = function () {
  //     e.classList.toggle('answers__btn--active') 
  //     answersOpen[index].classList.toggle('answers__box-text--active') 
  //   }
  // })



// ================================================




