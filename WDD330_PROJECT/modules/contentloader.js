
export async function loadContent(category) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/alexaaronespinoza42/WDD330final/main/WDD330_PROJECT/jsonFiles/${category}.json`);
        if (!response.ok) throw new Error(`Error category ${category}`);

        const content = await response.json();
        
        displayCatImage();

        displayRandomContent(content, category);
    } catch (error) {
        console.error(error);
    }
}

function displayRandomContent(content, category) {
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = '';

    let randomItem;
    
    if (category === 'phrases') {
        randomItem = getRandomItem(content.phrases);
        const phraseElement = document.createElement('p');
        phraseElement.textContent = randomItem.text;
        contentArea.appendChild(phraseElement);
    } else if (category === 'questions') {
        randomItem = getRandomItem(content.questions);
        const questionElement = document.createElement('p');
        questionElement.textContent = randomItem.text;
        contentArea.appendChild(questionElement);
    } else if (category === 'scriptures') {
        randomItem = getRandomItem(content.scriptures);
        const scriptureElement = document.createElement('p');
        scriptureElement.textContent = `${randomItem.reference}: ${randomItem.text}`;
        contentArea.appendChild(scriptureElement);
    } else if (category === 'testimonies') {
        randomItem = getRandomItem(content.testimonies);
        const testimonyElement = document.createElement('p');
        testimonyElement.textContent = `${randomItem.name}: ${randomItem.text}`;
        contentArea.appendChild(testimonyElement);
    }
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

async function displayCatImage() {
    const imageUrl = await getRandomCatImage();
    const catImageElement = document.createElement('img');
    catImageElement.src = imageUrl;
    catImageElement.alt = 'Cat Image';
    catImageElement.style.maxWidth = '100%';
    catImageElement.style.borderRadius = '10px';

    const contentArea = document.getElementById('content-area');
    contentArea.appendChild(catImageElement);
}

async function getRandomCatImage() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_p8fjidOvgEWQr8Qkt3Cv4H9ieJd0lJUnXMRAIoCx6IEAT2bO1YaY36RZIuZRBtQk`);
    const data = await response.json();
    return data[0].url;
}

