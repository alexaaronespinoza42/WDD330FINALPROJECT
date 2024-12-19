import { loadContent } from './contentloader.js';
import { displayRandomCatImage } from './catapi.js';

// Seleccionamos todos los botones de categorías
const categoryButtons = document.querySelectorAll('.category-button');

categoryButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category; // Obtenemos la categoría desde el data-category
        loadContent(category);  // Carga el contenido según la categoría seleccionada
    });
});

