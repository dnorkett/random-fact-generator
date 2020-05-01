const getNewButton = document.querySelector('#getNewButton');
const factTextDiv = document.querySelector('.factText');

async function getFact() {
    const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
    const response = await fetch(url);
    const json = await response.json();

    setFact(json.text);    
} 

function setFact(factText) {
    factTextDiv.textContent = factText;
}

getNewButton.addEventListener("click", getFact);