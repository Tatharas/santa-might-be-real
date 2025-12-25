document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    if (!audio) return;

    audio.play().catch(() => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(255,250,247,0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;

        const btn = document.createElement('button');
        btn.textContent = '🌷 Tap to play our song';
        btn.style.cssText = `
            padding: 14px 28px;
            font-size: 1.2em;
            background: linear-gradient(#f3b5c1, #d88c9a);
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
        `;

        btn.onclick = () => {
            audio.play();
            overlay.remove();
        };

        overlay.appendChild(btn);
        document.body.appendChild(overlay);
    });
});
