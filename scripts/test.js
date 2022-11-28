// Stappen in het Formulier
let Form1 = document.getElementById("form-one");
let Form2 = document.getElementById("form-two");
let Form3 = document.getElementById("form-three");
let Form4 = document.getElementById("form-four");
let Form5 = document.getElementById("form-five");
let Form5A = document.getElementById("form-fiveA");
let Form6 = document.getElementById("form-six");
let Form6A = document.getElementById("form-sixA");
let Form7 = document.getElementById("form-seven");
let Form7A = document.getElementById("form-sevenA");
let Form8 = document.getElementById("form-eight");

// Vorige en volgende knoppen
let Next1 = document.getElementById("nextstep-1");
let Next2 = document.getElementById("nextstep-2");
let Next3 = document.getElementById("nextstep-3");

let Back1 = document.getElementById("prevstep-1");
let Back2 = document.getElementById("prevstep-2");
let Back3 = document.getElementById("prevstep-3");
let Back4 = document.getElementById("prevstep-4");
let Back5 = document.getElementById("prevstep-5");
let Back6 = document.getElementById("prevstep-6");
let Back7 = document.getElementById("prevstep-7");
let Back8 = document.getElementById("prevstep-8");
let Back9 = document.getElementById("prevstep-9");
let Back10 = document.getElementById("prevstep-10");

// Progress bar
let progressBar = document.getElementById("progress-bar");

// Voor het redirecten naar eerdere reacties vraag
let redirectOne = $('input[name="redirect1"]');
let redirectTwo = $('input[name="redirect2"]');

// Voor het redirecten naar specifieke eerdere reacties vraag
let redirectThree = $('input[name="redirect3"]');
let redirectFour = $('input[name="redirect4"]');

// Voor het redirecten naar eczeem
let redirectFive = $('input[name="redirect5"]');
let redirectSix = $('input[name="redirect6"]');
let redirectSeven = $('input[name="redirect7"]');
let redirectEight = $('input[name="redirect8"]');
let redirectNine = $('input[name="redirect9"]');
let redirectTen = $('input[name="redirect10"]');
let redirectEleven = $('input[name="redirect11"]');


Next1.onclick = function () {
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
  Form1.style.visibility = "hidden";
  Form2.style.visibility = "visible";
}

Back1.onclick = function () {
  Form1.style.left = "40px";
  Form2.style.left = "450px";
  Form1.style.visibility = "visible";
  Form2.style.visibility = "hidden";
}

Next2.onclick = function () {
  Form2.style.left = "-450px";
  Form3.style.left = "40px";
  Form3.style.visibility = "visible";
  Form2.style.visibility = "hidden";
}

Back2.onclick = function () {
  Form2.style.left = "40px";
  Form3.style.left = "450px";
  Form2.style.visibility = "visible";
  Form3.style.visibility = "hidden";
}

Next3.onclick = function () {
  Form3.style.left = "-450px";
  Form4.style.left = "40px";
  Form4.style.visibility = "visible";
  Form3.style.visibility = "hidden";
}

Back3.onclick = function () {
  Form3.style.left = "40px";
  Form4.style.left = "450px";
  Form3.style.visibility = "visible";
  Form4.style.visibility = "hidden";
}

Back4.onclick = function () {
  Form4.style.left = "40px";
  Form5.style.left = "450px";
  Form4.style.visibility = "visible";
  Form5.style.visibility = "hidden";
}

Back5.onclick = function () {
  Form4.style.left = "40px";
  Form5A.style.left = "450px";
  Form4.style.visibility = "visible";
  Form5A.style.visibility = "hidden";
}

Back6.onclick = function () {
  Form5.style.left = "40px";
  Form6.style.left = "450px";
  Form5.style.visibility = "visible";
  Form6.style.visibility = "hidden";
}

Back7.onclick = function () {
  Form5A.style.left = "40px";
  Form6A.style.left = "450px";
  Form5A.style.visibility = "visible";
  Form6A.style.visibility = "hidden";
}

Back8.onclick = function () {
  Form6A.style.left = "40px";
  Form8.style.left = "450px";
  Form6A.style.visibility = "visible";
  Form8.style.visibility = "hidden";
}

Back9.onclick = function () {
  Form6.style.left = "40px";
  Form7.style.left = "450px";
  Form6.style.visibility = "visible";
  Form7.style.visibility = "hidden";
}

Back10.onclick = function () {
  Form6.style.left = "40px";
  Form7A.style.left = "450px";
  Form6.style.visibility = "visible";
  Form7A.style.visibility = "hidden";
}

function redirectPage() {
  if (redirectOne.is(':checked')) {
    window.location.href = "jong.html";
  } else if (redirectTwo.is(':checked')) {
    window.location.href = "overleg.html";
  } else if (redirectThree.is(':checked')) {
    Form4.style.left = "-450px";
    Form5.style.left = "40px";
    Form5.style.visibility = "visible";
    Form4.style.visibility = "hidden";
  } else if (redirectFour.is(':checked')) {
    Form4.style.left = "-450px";
    Form5A.style.left = "40px";
    Form5A.style.visibility = "visible";
    Form4.style.visibility = "hidden";
  }
}

function redirectPageEczeem() {
  if (redirectFive.is(':checked')) {
    window.location.href = "overleg.html";
  } else {
    Form5.style.left = "-450px";
    Form6.style.left = "40px";
    Form6.style.visibility = "visible";
    Form5.style.visibility = "hidden";
  }
}

function redirectPageEczeemA() {
  if (redirectSix.is(':checked')) {
    window.location.href = "overleg.html";
  } else {
    Form5A.style.left = "-450px";
    Form6A.style.left = "40px";
    Form6A.style.visibility = "visible";
    Form5A.style.visibility = "hidden";
  }
}

function redirectPageAllergic() {
  if (redirectSeven.is(':checked')) {
    Form6.style.left = "-450px";
    Form7.style.left = "40px";
    Form7.style.visibility = "visible";
    Form6.style.visibility = "hidden";
  } else {
    Form6.style.left = "-450px";
    Form7A.style.left = "40px";
    Form7A.style.visibility = "visible";
    Form6.style.visibility = "hidden";
  }
}


function redirectPageAllergicA() {
  if (redirectEight.is(':checked')) {
    Form6A.style.left = "-450px";
    Form8.style.left = "40px";
    Form8.style.visibility = "visible";
    Form6A.style.visibility = "hidden";
  } else {
    window.location.href = "overleg.html";
  }
}

function redirectLastStep() {
  if (redirectTen.is(':checked')) {
    window.location.href = "zesstap.html";
  } else {
    window.location.href = "overleg.html";
  }
}

function redirectLastStepA() {
  if (redirectEleven.is(':checked')) {
    window.location.href = "driestap.html";
  } else {
    window.location.href = "overleg.html";
  }
}

function redirectLastStepB() {
  if (redirectNine.is(':checked')) {
    window.location.href = "driestap.html";
  } else {
    window.location.href = "overleg.html";
  }
}

// Maar 1 vakje selecteren
function selectOnlyThis(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis1(id) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("Redirect" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis2(id) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("CheckA" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis3(id) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("CheckB" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis4(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("CheckEc" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis5(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("CheckEcA" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis6(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("Last" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis7(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("LastA" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectOnlyThis8(id) {
  for (let i = 1; i <= 2; i++) {
    document.getElementById("CheckLast" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}