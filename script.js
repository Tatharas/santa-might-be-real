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
       MUSIC START ON FIRST CLICK
       ========================= */
    const audio = document.getElementById('background-music');
    if (!audio) return;

    let started = false;

    const startMusic = () => {
        if (started) return;

        audio.play()
            .then(() => {
                started = true;
                document.removeEventListener('click', startMusic);
            })
            .catch(() => {
                // If browser blocks it once, next click will retry
            });
    };

    document.addEventListener('click', startMusic);
});
