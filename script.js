document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       SIGNATURE HOVER EFFECT
       ========================= */
    const signature = document.querySelector('.signature');

    if (signature) {
        signature.addEventListener('mouseover', () => {
            signature.style.color = '#8b6f7a'; // soft rose tone
            signature.style.textShadow = '0 2px 6px rgba(216, 140, 154, 0.6)';
        });

        signature.addEventListener('mouseout', () => {
            signature.style.color = 'var(--tulip-pink)';
            signature.style.textShadow = 'none';
        });
    }

    /* =========================
       AUDIO AUTOPLAY HANDLING
       ========================= */
    const audio = document.getElementById('background-music');

    if (!audio) return; // safety check

    const tryPlay = audio.play();

    if (tryPlay !== undefined) {
        tryPlay.catch(() => {

            // Overlay container
            const musicStarter = document.createElement('div');
            musicStarter.style.cssText = `
                position: fixed;
                inset: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(255, 250, 247, 0.95);
                backdrop-filter: blur(6px);
                z-index: 9999;
            `;

            // Button
            const button = document.createElement('button');
            button.id = 'play-music-btn';
            button.textContent = '🌷 Tap to play our song';

            button.style.cssText = `
                padding: 14px 28px;
                font-size: 1.2em;
                font-family: Georgia, serif;
                background: linear-gradient(to right, #f3b5c1, #d88c9a);
                color: white;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            `;

            button.addEventListener('mouseover', () => {
                button.style.transform = 'scale(1.05)';
                button.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
            });

            button.addEventListener('mouseout', () => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            });

            button.addEventListener('click', () => {
                audio.play();
                musicStarter.remove();
            });

            musicStarter.appendChild(button);
