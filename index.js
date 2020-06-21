// This code is animation part work properly in Desktop but issue in small Devices
// const svgImage = document.querySelector('.svgImage');
// const myImage = document.querySelector('.myImage');
// const firstDiv = document.querySelector('.first');
// const secondDiv = document.querySelector('.second');
// const fourthContainer = document.querySelector('.fourthContainer');
// const introduction = document.querySelector('.introduction');
// window.onscroll = function () {
//     myFunction();
// }
// function myFunction() {
//     let top = document.documentElement.scrollTop;
//     console.log(top);
//     if (top > 80 && top < 253) {
//         svgImage.classList.add('animate__animated', 'animate__backInLeft');
//     }
//     if (top > 639 && top < 758) {
//         myImage.classList.add('animate__animated', 'animate__fadeInLeft')
//     }
//     if (top > 801 && top < 918) {
//         introduction.classList.add('animate__animated', 'animate__fadeInBottomRight');
//     }
//     if (top > 1450 && top < 1748) {
//         firstDiv.classList.add('animate__animated', 'animate__fadeInBottomLeft')
//         secondDiv.classList.add('animate__animated', 'animate__fadeInBottomRight')
//     }
//     if (top > 2085 && top < 2235) {
//         fourthContainer.classList.add('animate__animated', 'animate__zoomIn')
//     }
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
