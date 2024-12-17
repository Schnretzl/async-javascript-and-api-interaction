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

// 2. Implementing Timers in JavaScript
// Task 1: Countdown Timer

// Create a countdown timer that starts from a user-defined duration (in seconds) and updates every second until it reaches zero. 
// Use setInterval to update the timer display.

function countdownTimer(duration) {
    
    let timer = duration;
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        console.log(`${minutes}:${seconds}`);
        timer--;
        if (timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

document.getElementById('timer-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const duration = parseInt(document.getElementById('countdown-length').value);
    countdownTimer(duration);
});

// Task 2: Delayed Notification

// Implement a function that displays a notification after a specified delay (in milliseconds) using setTimeout.

function delayedNotification(delay) {
    setTimeout(() => {
        alert('Here is a delayed notification');
    }, delay);
}

document.getElementById('delay-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const delay = parseInt(document.getElementById('delayed-notification').value);
    delayedNotification(delay);
});

// Task 3: Repeat Notification

// Develop a function that repeatedly displays a notification at fixed intervals until the user dismisses it. Use setInterval to schedule the notifications.

function repeatNotification(interval) {
    const notification = setInterval(() => {
        alert('Here is a repeated notification');
    }, interval);

    document.getElementById('dismiss-btn').addEventListener('click', (event) => {
        event.preventDefault();
        clearInterval(notification);
    });
}

document.getElementById('repeat-btn').addEventListener('click', (event) => {
    event.preventDefault();
    repeatNotification(4000);
});