
let skroled = 0;
let timer;

const goTopBtn = document.querySelector(".scrollToTop");

window.onload = function () {
    goTopBtn.addEventListener('click', goUp);
    window.addEventListener('scroll', trackScroll);
}

function goUp() {
    skroled = window.pageYOffset;
    skrollToTop();
}

function skrollToTop() {
    if (skroled > 0) {
        window.scrollTo(0, skroled);
        skroled = skroled - 100;
        timer = setTimeout(skrollToTop, 20);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}

function trackScroll() {
    skroled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (skroled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (skroled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }