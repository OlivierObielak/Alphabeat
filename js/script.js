document.addEventListener("keydown", event => {
    const letterPressed = event.key.toLowerCase();
    const gifContainer = document.getElementById("lettergif-container");

    if (letterPressed >= `a` && letterPressed <= `z`) {
        const gifDisplayed = `letters/${letterPressed}.gif`;
        const soundPlayed = `beats/${letterPressed}.wav`;
        


        gifContainer.innerHTML = `<img src="${gifDisplayed}" alt="${letterPressed} GIF">`;

        const audio = new Audio(soundPlayed);
        audio.loop = true;
        audio.play();
    }
});