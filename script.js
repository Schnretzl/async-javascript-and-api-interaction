// 1. Exploring Asynchronous JavaScript
// Task 1: Obtaining API Key and Configuration
// Task 2: Fetching Characters Using Fetch API

// Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. 
// Utilize the API key and configurations obtained in Task 1. 
// Log the fetched characters to the console.

async function fetchMarvelCharacter() {
    const publicKey = 'd3ee3ded50e57e5d9cace17c30b9d77a';
    const privateKey = '067841c04ed14326f1474c3adc8b7f275c6f9c36';
    const ts = new Date().getTime().toString();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com:443/v1/public/characters/1009368?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(url);
    const info = await response.json();
    console.log(info['data']['results']);
    return info['data']['results'];
}

// Task 3: Updating User Interface Dynamically

// Write a function to dynamically update the user interface with the fetched characters' information. 
// Utilize promises and the Fetch API to ensure that the UI updates only after the characters are successfully fetched.

async function updateUI() {
    const character = await fetchMarvelCharacter();
    const name = character[0]['name'];
    const description = character[0]['description'];
    const image = character[0]['thumbnail']['path'] + '.' + character[0]['thumbnail']['extension'];
    document.getElementById('name').innerText = name;
    document.getElementById('description').innerText = description;
    document.getElementById('image').src = image;
}

updateUI();