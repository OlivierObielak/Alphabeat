document.addEventListener("keydown", event => {
    const letterPressed = event.key.toLowerCase();
    const gifContainer = document.getElementById("lettergif-container");
    const instructionDiv = document.getElementById("instruction");

    if (letterPressed >= `a` && letterPressed <= `z`) {
        const gifDisplayed = `letters/${letterPressed}.gif`;
        const soundPlayed = `sounds/${letterPressed}.mp3`;
        instructionDiv.style.display = "none";


        gifContainer.innerHTML = `<img src="${gifDisplayed}" alt="${letterPressed} GIF">`;

        const audio = new Audio(soundPlayed);
        audio.play();
    }
});