// catapi.js
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=25';
const API_KEY = 'live_p8fjidOvgEWQr8Qkt3Cv4H9ieJd0lJUnXMRAIoCx6IEAT2bO1YaY36RZIuZRBtQk';

let catImages = [];

export async function fetchCatImages() {
    try {
        const response = await fetch(`${CAT_API_URL}&api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Error al obtener imágenes de TheCatAPI');

        catImages = await response.json();
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
    }
}

// Función para obtener una imagen aleatoria del conjunto
export async function getRandomCatImage() {
    if (catImages.length === 0) {
        await fetchCatImages();
    }

    const randomIndex = Math.floor(Math.random() * catImages.length);
    return catImages[randomIndex].url;
}

export async function displayRandomCatImage() {
    const imageUrl = await getRandomCatImage();

    const catImageElement = document.createElement('img');
    catImageElement.src = imageUrl;
    catImageElement.alt = 'Cat Image';
    catImageElement.style.maxWidth = '100%';
    catImageElement.style.borderRadius = '10px';

    const contentArea = document.getElementById('content-area');
    contentArea.appendChild(catImageElement);
}
