let currentBeat = null;

document.addEventListener("keydown", event => {
    const letterPressed = event.key.toLowerCase();
    const gifContainer = document.getElementById("lettergif-container");

    if (letterPressed >= `a` && letterPressed <= `z`) {
        const gifDisplayed = `letters/${letterPressed}.gif`;
        const soundPlayed = `beats/${letterPressed}.wav`;
        if (currentBeat) {
            currentBeat.pause();
            currentBeat.currentTime = 0;
        }
        
        gifContainer.innerHTML = `<img src="${gifDisplayed}" alt="${letterPressed} GIF">`;

        currentBeat = new Audio(soundPlayed);
        currentBeat.play();
    }
});