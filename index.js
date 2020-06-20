const svgImage = document.querySelector('.svgImage');
const myImage = document.querySelector('.myImage');
const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const fourthContainer = document.querySelector('.fourthContainer');
const introduction = document.querySelector('.introduction');
window.onscroll = function () {
    myFunction();
}
function myFunction() {
    let top = document.documentElement.scrollTop;
    if (top > 115 && top < 346) {
        svgImage.classList.add('animate__animated', 'animate__backInLeft');
    }
    if (top > 700 && top < 806) {
        myImage.classList.add('animate__animated', 'animate__fadeInLeft')
    }
    if (top > 864 && top < 1325) {
        introduction.classList.add('animate__animated', 'animate__fadeInBottomRight');
    }
    if (top > 1500 && top < 2014) {
        firstDiv.classList.add('animate__animated', 'animate__fadeInBottomLeft')
        secondDiv.classList.add('animate__animated', 'animate__fadeInBottomRight')
    }
    if (top > 2016 && top < 2176) {
        fourthContainer.classList.add('animate__animated', 'animate__zoomIn')
    }
}