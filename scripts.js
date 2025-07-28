const games = [
    {
        link: "bound.html",
        imageSrc: "Images/BOUND.png",
        altText: "BOUND アイコン",
        name: "BOUND",
        description: "着地のタイミングを見極めるアクションゲーム"
    },
    {
        link: "fallwords.html",
        imageSrc: "Images/FallWords.gif",
        altText: "FallWords アイコン",
        name: "FallWords",
        description: "落ちてくる文字をタイプする。瞬発力が試される！"
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

            const nameElement = document.createElement('h4');
            nameElement.textContent = game.name;
            nameElement.classList.add('game-name');
            linkElement.appendChild(nameElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = game.description;
            descriptionElement.classList.add('game-description');
            linkElement.appendChild(descriptionElement);

            iconGrid.appendChild(linkElement);
        });
    }
}); 