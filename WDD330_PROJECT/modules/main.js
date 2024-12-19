import { loadContent } from './contentloader.js';
import { displayRandomCatImage } from './catapi.js';

const categoryButtons = document.querySelectorAll('.category-button');

categoryButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category; 
        loadContent(category);  
    });
});

