document.addEventListener('DOMContentLoaded', () => {
    // --- Signature Hover Effect ---
    const signature = document.querySelector('.signature');
    if (signature) {
        signature.addEventListener('mouseover', () => {
            signature.style.color = '#000000'; // Change to black or gold on hover
            signature.style.textShadow = '1px 1px 2px var(--gold-accent)';
        });
        signature.addEventListener('mouseout', () => {
            signature.style.color = 'var(--primary-red)';
            signature.style.textShadow = 'none';
        });
    }

    // --- Audio Autoplay Fix for "It's Nice to Have a Friend" ---
    const audio = document.getElementById('background-music');
    
    // Attempt to play the audio
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Autoplay was successful (unmuted or browser allowed it)
        }).catch(error => {
            // Autoplay was prevented by the browser. Show a button to start it.
            const musicStarter = document.createElement('div');
            
            // Create the wrapper for the button
            musicStarter.style.cssText = `
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                background: rgba(0,0,0,0.8); /* Semi-transparent overlay */
                z-index: 9999;
            `;
            
            // Create the button element
            musicStarter.innerHTML = '<button id="play-music-btn">Click to Start Music</button>';
            document.body.appendChild(musicStarter);

            // Add listener to the button
            document.getElementById('play-music-btn').addEventListener('click', () => {
                audio.play();
                musicStarter.remove(); // Remove the overlay once music starts
            });
        });
    }
});