function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if its not a transform
    this.classList.remove('playing') 
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // selecting all the elements of class audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // selecting all the elements of class key
    if (!audio) return; 
    audio.currentTime = 0; // sets the timer of sound to 0 if multiple keystrocks are detected
    audio.play(); // plays the sound
    key.classList.add("playing") // adds the glowing yellow animation
    //we need to remove this animation
    const keys = document.querySelectorAll(".key"); // selecting all the elements of class key
    keys.forEach(key => key.addEventListener('transitionend',removeTransition)) // adding event listener to all the keys and applying the removeTransition function
}



window.addEventListener('keydown', playSound);