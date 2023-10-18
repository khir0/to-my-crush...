function checkCrush() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const response = document.getElementById('response');
    const humorousResponses = [
        "No keeps changing its position! Try again!",
        "Oh, come on, try again with 'Yes'!",
        "No, but seriously, do you have a crush on me?",
        "Nope, not this time! Give it another shot!",
        "Hmmm, it's a slippery 'No,' isn't it?",
        "No, but don't give up, try 'Yes' and see what happens!",
        "Negative, but keep guessing! 😉",
        "Nope, try again! Maybe 'Yes' is the magic word!",
        "No for now, but you never know what the future holds!",
        "No, but don't be discouraged, 'Yes' is just a keystroke away!"
    ];

    if (userInput === 'yes') {
        response.innerHTML = "OMG REALLY? I HAVE A CRUSH ON U TOO! CAN I COURT YOU?";
    } else if (userInput === 'no') {
        const randomIndex = Math.floor(Math.random() * humorousResponses.length);
        response.innerHTML = humorousResponses[randomIndex];
    } else {
        response.innerHTML = "Invalid input. Please enter 'Yes' or 'No'.";
    }
}
