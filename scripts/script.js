let modalBox = document.getElementById('modalbox');
let crossIcon = document.querySelector('.fa-xmark');
let step1 = document.querySelector('.steps-advice1');

step1.onclick = function () {
    modalBox.style.display = 'grid';
}

crossIcon.onclick = function () {
    modalBox.style.display = 'none';
}

let bodyElHeight = document.getElementById('bodyEl').style.height;
let bgImgHeight = document.getElementById('bgimg').style.height;

if (bodyElHeight>bgImgHeight) {
    bgImgHeight.style.height=bodyElHeight;  
}

function shopFunction (){
    window.location.href = "https://vinimini.nl/collections/frontpage/products/3-stappen-starter-kit";
}
function shopFunction1 (){
    window.location.href = "https://vinimini.nl/collections/frontpage/products/6-stappen-starter-kit";
}

function shopFunctionAll (){
    window.location.href = "https://vinimini.nl/collections/all";
}

function shopFunctionYoung (){
    window.location.href = "https://vinimini.nl/";
}