
let skroled = 0;
let timer;
    
window.onload = function () {
    document.querySelector(".scrollToTop").addEventListener('click', goUp);
    // if (window.pageYOffset) {
    // }
    console.log(skroled)
}

function goUp() {
    skroled = window.pageYOffset;
    skrollToTop();
}

function skrollToTop() {
    if (skroled > 0) {
        window.scrollTo(0, skroled);
        skroled = skroled - 100;
        timer = setTimeout(skrollToTop, 40);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}