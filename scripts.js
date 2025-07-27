const games = [
    {
        link: "bound.html",
        imageSrc: "Images/BOUND.png",
        altText: "BOUND アイコン"
    },
    {
        link: "fallwords.html",
        imageSrc: "Images/FallWords.gif",
        altText: "FallWords アイコン"
    }
    // ここに新しいゲームを追加できます
];

document.addEventListener('DOMContentLoaded', () => {
    const iconGrid = document.querySelector('.icon-grid');
    if (iconGrid) {
        games.forEach(game => {
            const linkElement = document.createElement('a');
            linkElement.href = game.link;
            linkElement.classList.add('game-icon-link');

            const imgElement = document.createElement('img');
            imgElement.src = game.imageSrc;
            imgElement.alt = game.altText;
            imgElement.classList.add('game-icon');

            linkElement.appendChild(imgElement);
            iconGrid.appendChild(linkElement);
        });
    }
}); 