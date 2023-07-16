import { Ludo } from './ludo/Ludo.js';

const ludo = new Ludo();

function getMouseCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    return { x, y };
}

// Exemple d'utilisation :
document.addEventListener('click', function(event) {
    const coordinates = getMouseCoordinates(event);
    console.log('Mouse coordinates:', coordinates);
});
