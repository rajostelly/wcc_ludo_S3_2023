import { Ludo } from './ludo/Ludo.js';

const ludo = new Ludo();

const rotateXProgress = document.getElementById('rotateXProgress');
const rotateYProgress = document.getElementById('rotateYProgress');
const rotateZProgress = document.getElementById('rotateZProgress');
const myDiv = document.querySelector('.ludo');

let rotateX = 0;
let rotateY = 0;
let rotateZ = 0;

function updateRotation() {
  myDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
}

rotateXProgress.addEventListener('input', function () {
  rotateX = parseInt(rotateXProgress.value);
  updateRotation();
});

rotateYProgress.addEventListener('input', function () {
  rotateY = parseInt(rotateYProgress.value);
  updateRotation();
});

rotateZProgress.addEventListener('input', function () {
  rotateZ = parseInt(rotateZProgress.value);
  updateRotation();
});


