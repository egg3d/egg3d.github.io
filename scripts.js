const games = [
    {
        slug: "bound",
        pageUrl: "bound.html",
        title: "BOUND",
        shortTitle: "BOUND",
        tagline: "タイミング良く跳んで進むジャンプアクション",
        description: "地面の動きとジャンプの気持ちよさに集中して作ったアクションゲームです。短いプレイでもテンポ良く遊べるように調整しています。",
        cardDescription: "リズム感のあるジャンプで進む作品です。",
        status: "公開中",
        genre: "Action",
        platforms: ["itch.io", "App Store", "Google Play", "unityroom"],
        engine: "Unity",
        release: "2025年1月",
        playUrl: "https://egg-3d.itch.io/bound",
        playLabel: "プレイページへ",
        externalLinks: [
            { label: "itch.io", url: "https://egg-3d.itch.io/bound" },
            { label: "App Store", url: "https://apps.apple.com/us/app/bound-timing-jump-action/id6753901555?itscg=30200&itsct=apps_box_badge&mttnsubad=6753901555" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.egg3d.bound" },
            { label: "unityroom", url: "https://unityroom.com/games/bound_egg" }
        ],
        features: [
            "ジャンプの手触りとテンポ感を中心に設計しています。",
            "短時間でも繰り返し挑戦したくなるバランスを意識しています。",
            "複数の配信先で遊べるように展開しています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/bound_egg" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/BOUND.png",
                alt: "BOUND のキービジュアル",
                caption: "キービジュアル"
            },
            {
                type: "image",
                src: "Images/Games/BOUND.png",
                alt: "BOUND のゲーム画面",
                caption: "ゲーム画面"
            }
        ],
        video: {
            title: "BOUND プレイ動画",
            youtubeUrl: "https://youtube.com/shorts/-gTMPMWtRuk"
        }
    },
    {
        slug: "fallwords",
        pageUrl: "fallwords.html",
        title: "FallWords",
        shortTitle: "FallWords",
        tagline: "落ちてくる単語を打つタイピングアクション",
        description: "落下してくるワードを素早くタイプして処理していくタイピングゲームです。視認性と気持ちのいい入力体験を重視しています。",
        cardDescription: "単語を打ってさばくタイピングゲームです。",
        status: "公開中",
        genre: "Typing Action",
        platforms: ["itch.io", "unityroom"],
        engine: "Unity",
        release: "2025年5月",
        playUrl: "https://egg-3d.itch.io/fallwords",
        playLabel: "プレイページへ",
        externalLinks: [
            { label: "Latest", url: "https://egg-3d.itch.io/fallwords" },
            { label: "ver.1.0", url: "https://egg-3d.itch.io/fallwords-1" },
            { label: "unityroom", url: "https://unityroom.com/games/fallwords" }
        ],
        features: [
            "単語の認識と入力をテンポ良く切り替える構成です。",
            "プレイ感を見ながら表示や難度を調整しています。",
            "配信先ごとのバージョン差も追いやすく整理しています。"
        ],
        credits: [
            {
                label: "効果音",
                value: '<a href="https://otologic.jp/free/se/party_goods01.html" target="_blank" rel="noopener noreferrer">OtoLogic</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/FallWords.gif",
                alt: "FallWords のプレイ画面",
                caption: "プレイ中の様子"
            },
            {
                type: "image",
                src: "Images/Games/FallWords.gif",
                alt: "FallWords のゲーム画面",
                caption: "ゲーム画面"
            }
        ],
        video: {
            title: "FallWords プレイ動画",
            youtubeUrl: "https://youtu.be/zggfj0j06w4"
        }
    },
    {
        slug: "infinitebatting",
        pageUrl: "infinitebatting.html",
        title: "無限バッティング",
        shortTitle: "無限バッティング",
        tagline: "打って飛ばして気持ちよく遊ぶバッティングゲーム",
        description: "ボールを打ち返す気持ちよさを前面に出した作品です。スコアを伸ばしながら繰り返し遊べるようにしています。",
        cardDescription: "爽快感重視のバッティングゲームです。",
        status: "公開中",
        genre: "Batting Action",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年9月",
        playUrl: "https://unityroom.com/games/infinitebatting",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/infinitebatting" }
        ],
        features: [
            "打球の爽快感を分かりやすく伝える構成です。",
            "スコア更新を目指して何度も遊べます。",
            "短いセッションでも満足感が出るようにしています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/infinitebatting" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/InfiniteBatting.gif",
                alt: "無限バッティング のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "無限バッティング プレイ動画",
            youtubeUrl: "https://youtu.be/2WwUUUuVbmM"
        }
    },
    {
        slug: "6arapon",
        pageUrl: "6arapon.html",
        title: "6ARAPON",
        shortTitle: "6ARAPON",
        tagline: "回して集めるガラポン収集ゲーム",
        description: "ガラポンを回してアイテムを集めていくゲームです。少しずつ進めたくなる収集感を大切にしています。",
        cardDescription: "収集欲を刺激するガラポンゲームです。",
        status: "公開中",
        genre: "Idle / Collection",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年9月",
        playUrl: "https://unityroom.com/games/6arapon",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/6arapon" }
        ],
        features: [
            "回して集める行為の楽しさを素直に味わえます。",
            "見た目の変化と収集進捗が分かりやすい構成です。",
            "軽い操作で遊び続けられるテンポにしています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/6arapon" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/6ARAPON.gif",
                alt: "6ARAPON のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "6ARAPON プレイ動画",
            youtubeUrl: "https://youtube.com/shorts/Vf7Pq84lHQo"
        }
    },
    {
        slug: "bombtype",
        pageUrl: "bombtype.html",
        title: "BombType",
        shortTitle: "BombType",
        tagline: "爆弾を処理して進むパズルタイピング",
        description: "文字入力と状況判断を組み合わせたタイピングゲームです。焦りと整理のバランスを楽しめるように設計しています。",
        cardDescription: "判断力も求められるタイピング作品です。",
        status: "公開中",
        genre: "Puzzle Typing",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年12月",
        playUrl: "https://unityroom.com/games/bombtype",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/bombtype" }
        ],
        features: [
            "タイピングだけでなく状況判断も必要です。",
            "入力の速さと優先順位付けの両方が問われます。",
            "短い時間でも緊張感のあるプレイを楽しめます。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/bombtype" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/BombType.gif",
                alt: "BombType のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "つなげるパズルタイピング - BombType",
            youtubeUrl: "https://youtu.be/W4cl-E779Ew"
        }
    },
    {
        slug: "tone-compare",
        pageUrl: "tone-compare.html",
        title: "音くらべ",
        shortTitle: "音くらべ",
        tagline: "音で違いを聴き分けるトレーニングゲーム",
        description: "音の違いを聴き分けて答えるシンプルなゲームです。繰り返し触れることで感覚的に慣れていけるように作っています。",
        cardDescription: "音感を使って遊ぶトレーニングゲームです。",
        status: "公開中",
        genre: "Music Training",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年11月",
        playUrl: "https://unityroom.com/games/tone_compare",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/tone_compare" }
        ],
        features: [
            "シンプルなルールですぐに遊び始められます。",
            "繰り返し試して感覚を掴みやすい構成です。",
            "音に集中できるよう画面要素を整理しています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/tone_compare" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/ToneCompare.gif",
                alt: "音くらべ のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "音くらべ プレイ動画",
            youtubeUrl: "https://youtube.com/shorts/RCgnANDR-Fo"
        }
    },
    {
        slug: "canyougravity",
        pageUrl: "canyougravity.html",
        title: "Can You 引力",
        shortTitle: "Can You 引力",
        tagline: "重力を切り替えて進むパズルアクション",
        description: "重力方向を使い分けながらゴールを目指すアクションパズルです。短いステージの中に考える楽しさを詰めています。",
        cardDescription: "引力を使い分けるアクションパズルです。",
        status: "公開中",
        genre: "Puzzle Action",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年8月",
        playUrl: "https://unityroom.com/games/canyougravity",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/canyougravity" },
            { label: "配信アーカイブ", url: "https://youtu.be/N3fGJzKKztI?t=1054" }
        ],
        features: [
            "重力の切り替えを軸にした明快なルールです。",
            "短いステージで試行錯誤しやすくしています。",
            "unity1week向けにまとめた作品です。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/canyougravity" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/CanYouGravity.gif",
                alt: "Can You 引力 のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ]
    },
    {
        slug: "one-more-piece",
        pageUrl: "one-more-piece.html",
        title: "もうひとつむつむ",
        shortTitle: "もうひとつむつむ",
        tagline: "積んで崩して遊ぶ物理バトル",
        description: "オブジェクトを積み上げながら駆け引きを楽しむ対戦寄りの作品です。物理挙動の意外性も含めて遊びにしています。",
        cardDescription: "物理の崩れ方も面白さになる作品です。",
        status: "公開中",
        genre: "Physics Battle",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年12月",
        playUrl: "https://unityroom.com/games/onemorepiece",
        playLabel: "unityroomで遊ぶ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/onemorepiece" }
        ],
        features: [
            "積み方と崩し方の駆け引きを楽しめます。",
            "物理挙動による想定外の展開も魅力です。",
            "見た目の分かりやすさと操作感を重視しています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/onemorepiece" target="_blank" rel="noopener noreferrer">unityroom</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/OneMorePiece.gif",
                alt: "もうひとつむつむ のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "グラグラタワーバトル - もうひとつむつむ",
            youtubeUrl: "https://youtube.com/shorts/pzKQW1R4yvA?feature=share"
        }
    },
    {
        slug: "roblox-voxel-dodge",
        pageUrl: "roblox-voxel-dodge.html",
        title: "ボクセル・ドッジ",
        shortTitle: "ボクセル・ドッジ",
        tagline: "スレスレ回避でスコアを伸ばす 3D 弾幕回避アクション",
        description: "次々と迫る障害物をスレスレで避けながらハイスコアを狙う Roblox 作品です。時間経過で難度が上がるスピード感に、パワーアップとニアミスボーナスを組み合わせた回避アクションになっています。",
        cardDescription: "Roblox で公開しているボクセル回避アクションです。",
        status: "公開中",
        genre: "Roblox Action",
        platforms: ["Roblox"],
        engine: "Roblox Studio",
        release: "2026年2月",
        playUrl: "https://www.roblox.com/games/70411997326136/",
        playLabel: "Roblox で遊ぶ",
        externalLinks: [
            { label: "Roblox", url: "https://www.roblox.com/games/70411997326136/" },
            { label: "Creations", url: "https://www.roblox.com/ja/users/10142301930/profile#!/creations" }
        ],
        features: [
            "時間経過で速度と密度が増していく、反射神経重視の回避アクションです。",
            "無敵やスキルのパワーアップを拾って切り抜ける構成です。",
            "ニアミスでスコアを伸ばす、攻めた回避を誘う設計です。"
        ],
        credits: [
            {
                label: "掲載ページ",
                value: '<a href="https://www.roblox.com/games/70411997326136/" target="_blank" rel="noopener noreferrer">Roblox</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/RobloxVoxelDodge.png",
                alt: "ボクセル・ドッジ のサムネイル",
                caption: "Roblox 掲載画像"
            }
        ]
    },
    {
        slug: "gumball-rush-tycoon",
        pageUrl: "gumball-rush-tycoon.html",
        title: "Gumball Rush Tycoon",
        shortTitle: "Gumball Rush",
        tagline: "回して集めて強化する Roblox 製キャンディタイクーン",
        description: "マシンを強化しながらガムボールを量産し、より大きなキャンディ帝国を目指す Roblox 作品です。BOOST や FEVER、実績報酬やランキングを組み合わせた成長型のタイクーンにしています。",
        cardDescription: "Roblox で公開している強化型タイクーンです。",
        status: "公開中",
        genre: "Roblox Tycoon",
        platforms: ["Roblox"],
        engine: "Roblox Studio",
        release: "2025年12月",
        playUrl: "https://www.roblox.com/games/135339943321106/",
        playLabel: "Roblox で遊ぶ",
        externalLinks: [
            { label: "Roblox", url: "https://www.roblox.com/games/135339943321106/" },
            { label: "Creations", url: "https://www.roblox.com/ja/users/10142301930/profile#!/creations" }
        ],
        features: [
            "マシン強化と収集を繰り返して規模を広げるタイクーン作品です。",
            "BOOST と FEVER で一気に生産量を伸ばす山場を作っています。",
            "デイリー報酬、放置報酬、実績報酬、ランキングを用意しています。"
        ],
        credits: [
            {
                label: "掲載ページ",
                value: '<a href="https://www.roblox.com/games/135339943321106/" target="_blank" rel="noopener noreferrer">Roblox</a>'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/RobloxGumballRushTycoon.png",
                alt: "Gumball Rush Tycoon のサムネイル",
                caption: "Roblox 掲載画像"
            }
        ]
    }
];

const siteMeta = {
    profileName: "なまたまご"
};

const escapeHtml = (value) =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

const createPlatformBadges = (platforms) =>
    platforms.map((platform) => `<span class="pill">${escapeHtml(platform)}</span>`).join("");

const officialBrandAssets = {
    appStoreBadge: {
        src: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
        alt: "Download on the App Store"
    },
    googlePlayBadge: {
        src: "Images/Brand/google-play-badge.png",
        alt: "Get it on Google Play"
    },
    itchIoBadge: {
        src: "Images/Brand/itchio-badge.svg",
        alt: "Available on itch.io"
    }
};

const createExternalLinkCard = (link) => {
    const normalizedLabel = link.label.trim().toLowerCase();
    const isAppStore = normalizedLabel === "app store";
    const isGooglePlay = normalizedLabel === "google play";
    const isItchIo = normalizedLabel === "itch.io";
    const badgeAsset = isAppStore
        ? officialBrandAssets.appStoreBadge
        : isGooglePlay
            ? officialBrandAssets.googlePlayBadge
            : isItchIo
                ? officialBrandAssets.itchIoBadge
                : null;

    return `
        <a class="external-link-card${badgeAsset ? " is-store-badge" : ""}" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(link.label)}">
            ${badgeAsset
                ? `<img class="store-badge-image" src="${badgeAsset.src}" alt="${badgeAsset.alt}" loading="lazy" decoding="async">`
                : `<span>${escapeHtml(link.label)}</span>`}
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
    `;
};

const createGameCard = (game) => `
    <a class="game-card" href="${game.pageUrl}">
        <div class="game-card-media">
            <img src="${game.media[0].src}" alt="${escapeHtml(game.media[0].alt)}" loading="lazy">
        </div>
        <div class="game-card-body">
            <div class="game-card-topline">
                <span class="game-card-title">${escapeHtml(game.title)}</span>
                <span class="game-card-status">${escapeHtml(game.status)}</span>
            </div>
            <p class="game-card-tagline">${escapeHtml(game.tagline)}</p>
            <p class="game-card-description">${escapeHtml(game.cardDescription)}</p>
            <p class="game-card-release">公開年月: ${escapeHtml(game.release)}</p>
        </div>
    </a>
`;

const renderHomePage = () => {
    const shelves = document.getElementById("game-shelves");

    if (!shelves) {
        return;
    }

    shelves.innerHTML = `
        <section class="content-section shelf-section shelf-grid">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">All Works</p>
                    <h2>作品一覧</h2>
                    <p class="section-description">公開中のゲームを一覧で見られます。</p>
                </div>
            </div>
            <div class="game-grid">
                ${games.map((game) => createGameCard(game)).join("")}
            </div>
        </section>
    `;
};

const createMediaMarkup = (item, index, isActive) => {
    if (item.type === "video") {
        return `
            <figure class="media-slide media-slide-video ${isActive ? "is-active" : ""}" data-media-slide data-media-type="video" data-media-index="${index}">
                <iframe
                    class="media-video-frame"
                    src="${item.embedUrl}"
                    title="${escapeHtml(item.alt)}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <figcaption>${escapeHtml(item.caption)}</figcaption>
            </figure>
        `;
    }

    return `
        <figure class="media-slide ${isActive ? "is-active" : ""}" data-media-slide data-media-type="image" data-media-index="${index}">
            <img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy">
            <figcaption>${escapeHtml(item.caption)}</figcaption>
        </figure>
    `;
};

const createThumbMarkup = (item, index, isActive) => `
    <button class="media-thumb ${isActive ? "is-active" : ""}" type="button" data-media-thumb="${index}" aria-label="${escapeHtml(item.caption)} を表示">
        <img src="${item.thumbSrc || item.src}" alt="${escapeHtml(item.alt)}" loading="lazy">
        ${item.type === "video" ? '<span class="media-thumb-badge"><i class="fa-solid fa-play" aria-hidden="true"></i> Video</span>' : ""}
    </button>
`;

const getYouTubeVideoId = (url) => {
    if (!url) {
        return "";
    }

    try {
        const parsed = new URL(url);

        if (parsed.hostname.includes("youtu.be")) {
            const id = parsed.pathname.split("/").filter(Boolean)[0];
            return id || "";
        }

        if (parsed.pathname.startsWith("/shorts/")) {
            const id = parsed.pathname.split("/").filter(Boolean)[1];
            return id || "";
        }

        const id = parsed.searchParams.get("v");
        return id || "";
    } catch {
        return "";
    }
};

const createVideoSection = (game) => {
    const embedUrl = getYouTubeEmbedUrl(game.video?.youtubeUrl);
    if (!embedUrl) {
        return "";
    }

    return `
        <section id="game-video" class="content-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">Video</p>
                    <h2>${escapeHtml(game.video?.title || "プレイ動画")}</h2>
                </div>
            </div>
            <div class="video-frame-wrap">
                <iframe
                    class="video-frame"
                    src="${embedUrl}"
                    title="${escapeHtml(game.title)} の動画"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    `;
};

const getYouTubeEmbedUrl = (url) => {
    const id = getYouTubeVideoId(url);
    return id
        ? `https://www.youtube.com/embed/${id}?enablejsapi=1&playsinline=1&rel=0&mute=1`
        : "";
};

const getGameMediaItems = (game) => {
    const items = [...game.media];
    const videoId = getYouTubeVideoId(game.video?.youtubeUrl);

    if (videoId) {
        items.push({
            type: "video",
            src: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            thumbSrc: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            embedUrl: getYouTubeEmbedUrl(game.video.youtubeUrl),
            alt: `${game.title} のプレイ動画`,
            caption: game.video?.title || "プレイ動画",
            videoId
        });
    }

    return items;
};

const renderGameDetail = () => {
    const root = document.getElementById("game-detail-root");
    const slug = document.body.dataset.gameSlug;

    if (!root || !slug) {
        return;
    }

    const game = games.find((entry) => entry.slug === slug);

    if (!game) {
        root.innerHTML = `
            <section class="content-section">
                <h1>作品が見つかりません</h1>
                <p>指定された作品ページを読み込めませんでした。</p>
                <a class="button button-primary" href="index.html">ホームへ戻る</a>
            </section>
        `;
        return;
    }

    const mediaItems = getGameMediaItems(game);

    root.innerHTML = `
        <section class="game-hero">
            <div class="game-media-panel">
                <div class="media-stage">
                    ${mediaItems.map((item, index) => createMediaMarkup(item, index, index === 0)).join("")}
                    <button class="media-nav prev" type="button" data-media-action="prev" aria-label="前の画像">
                        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button class="media-nav next" type="button" data-media-action="next" aria-label="次の画像">
                        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="media-thumbs">
                    ${mediaItems.map((item, index) => createThumbMarkup(item, index, index === 0)).join("")}
                </div>
            </div>
            <aside class="game-summary-panel">
                <p class="eyebrow">${escapeHtml(game.genre)}</p>
                <h1>${escapeHtml(game.title)}</h1>
                <p class="game-summary-tagline">${escapeHtml(game.tagline)}</p>
                <p class="game-summary-description">${escapeHtml(game.description)}</p>
                <div class="summary-meta">
                    <div class="summary-meta-item">
                        <span class="summary-meta-label">公開状況</span>
                        <span class="summary-meta-value">${escapeHtml(game.status)}</span>
                    </div>
                    <div class="summary-meta-item">
                        <span class="summary-meta-label">エンジン</span>
                        <span class="summary-meta-value">${escapeHtml(game.engine)}</span>
                    </div>
                    <div class="summary-meta-item">
                        <span class="summary-meta-label">公開先</span>
                        <span class="summary-meta-value">${escapeHtml(game.platforms.join(" / "))}</span>
                    </div>
                </div>
                <div class="hero-actions">
                    <a class="button button-primary" href="${game.playUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(game.playLabel)}</a>
                    <a class="button button-secondary" href="#game-details">詳しく見る</a>
                </div>
            </aside>
        </section>

        <nav class="anchor-tabs" aria-label="ページ内ナビゲーション">
            <a href="#game-details">概要</a>
            
            <a href="#game-features">見どころ</a>
            <a href="#game-links">リンク</a>
        </nav>

        <section id="game-details" class="content-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">About</p>
                    <h2>作品概要</h2>
                </div>
            </div>
            <div class="detail-layout">
                <article class="detail-card">
                    <h3>ゲーム紹介</h3>
                    <p>${escapeHtml(game.description)}</p>
                </article>
                <div class="spec-grid">
                    <div class="spec-card">
                        <span class="spec-label">ジャンル</span>
                        <span class="spec-value">${escapeHtml(game.genre)}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">公開年</span>
                        <span class="spec-value">${escapeHtml(game.release)}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">作者</span>
                        <span class="spec-value">${escapeHtml(siteMeta.profileName)}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">プレイ方法</span>
                        <span class="spec-value">外部の公開ページから遊べます</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="game-features" class="content-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">Highlights</p>
                    <h2>見どころ</h2>
                </div>
            </div>
            <div class="info-grid">
                ${game.features.map((feature) => `
                    <article class="info-card">
                        <p>${escapeHtml(feature)}</p>
                    </article>
                `).join("")}
            </div>
        </section>

        <section id="game-links" class="content-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">Links</p>
                    <h2>プレイ先と関連情報</h2>
                </div>
            </div>
            <div class="link-panel">
                <div class="link-group">
                    <h3>プレイ先</h3>
                    <div class="external-link-list">
                        ${game.externalLinks.map((link) => createExternalLinkCard(link)).join("")}
                    </div>
                </div>
                <div class="link-group">
                    <h3>クレジット</h3>
                    <div class="credit-list">
                        ${game.credits.map((credit) => `
                            <div class="credit-row">
                                <span class="credit-label">${escapeHtml(credit.label)}</span>
                                <span class="credit-value">${credit.value}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>
    `;

    setupMediaGallery(root);
};

let youtubeApiPromise;

const loadYouTubeIframeApi = () => {
    if (youtubeApiPromise) {
        return youtubeApiPromise;
    }

    youtubeApiPromise = new Promise((resolve) => {
        if (window.YT?.Player) {
            resolve(window.YT);
            return;
        }

        const previousReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            previousReady?.();
            resolve(window.YT);
        };

        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(script);
        }
    });

    return youtubeApiPromise;
};

const setupMediaGallery = (root) => {
    const slides = Array.from(root.querySelectorAll("[data-media-slide]"));
    const thumbs = Array.from(root.querySelectorAll("[data-media-thumb]"));
    const prevButton = root.querySelector('[data-media-action="prev"]');
    const nextButton = root.querySelector('[data-media-action="next"]');

    if (!slides.length || !thumbs.length) {
        return;
    }

    const AUTO_SLIDE_MS = 5000;
    const players = new Map();
    let activeIndex = 0;
    let autoSlideTimer;

    const clearAutoSlide = () => {
        if (autoSlideTimer) {
            window.clearTimeout(autoSlideTimer);
            autoSlideTimer = undefined;
        }
    };

    const getSlideType = (index) => slides[index]?.dataset.mediaType || "image";

    const stopInactiveVideos = () => {
        players.forEach((player, index) => {
            if (index !== activeIndex) {
                player.pauseVideo?.();
            }
        });
    };

    const scheduleAutoSlide = () => {
        clearAutoSlide();

        if (slides.length <= 1 || getSlideType(activeIndex) === "video") {
            return;
        }

        autoSlideTimer = window.setTimeout(() => {
            updateGallery(activeIndex + 1);
        }, AUTO_SLIDE_MS);
    };

    const handleActiveVideo = () => {
        if (getSlideType(activeIndex) !== "video") {
            stopInactiveVideos();
            scheduleAutoSlide();
            return;
        }

        clearAutoSlide();
        stopInactiveVideos();

        const player = players.get(activeIndex);
        if (player?.mute) {
            player.mute();
            player.playVideo?.();
        }
    };

    const updateGallery = (nextIndex) => {
        activeIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeIndex);
        });

        thumbs.forEach((thumb, index) => {
            thumb.classList.toggle("is-active", index === activeIndex);
        });

        handleActiveVideo();
    };

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => updateGallery(index));
    });

    if (prevButton) {
        prevButton.addEventListener("click", () => updateGallery(activeIndex - 1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => updateGallery(activeIndex + 1));
    }

    const videoSlides = slides.filter((slide) => slide.dataset.mediaType === "video");

    if (videoSlides.length) {
        loadYouTubeIframeApi().then((YT) => {
            videoSlides.forEach((slide) => {
                const index = Number(slide.dataset.mediaIndex);
                const frame = slide.querySelector("iframe");
                if (!frame) {
                    return;
                }

                const player = new YT.Player(frame, {
                    events: {
                        onReady: (event) => {
                            event.target.mute();
                            if (index === activeIndex) {
                                event.target.playVideo();
                            }
                        },
                        onStateChange: (event) => {
                            if (index !== activeIndex) {
                                return;
                            }

                            if (event.data === YT.PlayerState.ENDED) {
                                updateGallery(activeIndex + 1);
                            }

                            if (event.data === YT.PlayerState.PLAYING) {
                                clearAutoSlide();
                            }

                        }
                    }
                });

                players.set(index, player);
            });

            handleActiveVideo();
        });
    } else {
        scheduleAutoSlide();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    renderGameDetail();
});
