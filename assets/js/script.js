const btnMobil = document.querySelector('.mobile-btn');
const menu = document.querySelector('.list');

btnMobil.addEventListener('click', () => {
    menu.classList.toggle('show');

    btnMobil.textContent = menu.classList.contains('show') ? "✖" : "☰";

    if (menu.classList.contains("show")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
    }

})


menu.addEventListener('click', () => {
    btnMobil.textContent = menu.classList.contains('show') ? "☰" : "✖";
    menu.classList.remove('show')

    if(menu.classList.contains('show')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
})





const radio = document.querySelector('.manual-btn');
let count = 1;

document.getElementById('radio1').checked = true; 

setInterval(() => {
    proximaImg()
},4000);

const proximaImg = () => {
    count++;
    if(count >3) {
        count = 1
    }

    document.getElementById('radio' + count).checked = true; 
};





const track = document.querySelector(".pizza-slider-track");
const slider = document.querySelector(".pizza-slider");
const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");

let interval;
let slideTime = 4000;

function slideNext() {
  const itemWidth = track.children[0].offsetWidth + 20;

  track.style.transform = `translateX(-${itemWidth}px)`;

  setTimeout(() => {
    track.appendChild(track.children[0]);

    track.style.transition = "none";
    track.style.transform = "translateX(0)";

    setTimeout(() => {
      track.style.transition = "transform 0.6s ease";
    }, 30);
  }, 600);
}


function slidePrev() {
  const last = track.lastElementChild;
  track.insertBefore(last, track.firstElementChild);

  const itemWidth = track.children[0].offsetWidth + 20;
  
  track.style.transition = "none";
  track.style.transform = `translateX(-${itemWidth}px)`;

  setTimeout(() => {
    track.style.transition = "transform 0.6s ease";
    track.style.transform = "translateX(0)";
  }, 20);
}


function startAuto() {
  interval = setInterval(slideNext, slideTime);
}

function stopAuto() {
  clearInterval(interval);
}

startAuto();


slider.addEventListener("mouseenter", stopAuto);
slider.addEventListener("mouseleave", startAuto);
arrowLeft.addEventListener("click", slidePrev);
arrowRight.addEventListener("click", slideNext);
