const games = [
    {
        slug: "type-volley",
        pageUrl: "type-volley.html",
        cardImage: "Images/Games/TypeVolley/type-volley-poster.jpg",
        title: "Type Volley",
        shortTitle: "Type Volley",
        tagline: "キーをつないで、3タッチのラリーを組み立てる。",
        description: "キーボード型のコートで指定キーをつなぎ、レシーブ・セット・スパイクのラリーを組み立てる開発中のタイピングバレーボールゲームです。",
        cardDescription: "キー入力で3タッチのラリーを組み立てるタイピングバレーボールです。",
        status: "制作中",
        genre: "Typing Sports",
        platforms: ["PC"],
        engine: "Godot 4.7",
        cardMetaLabel: "状態",
        cardMeta: "開発中",
        release: "開発中",
        media: [
            {
                src: "Images/Games/TypeVolley/type-volley-poster.jpg",
                alt: "日本の学校体育館を背景に、キーボード型コートでラリーするType Volleyの開発中画面"
            }
        ]
    },
    {
        slug: "shiroi-toko-igai-michi-janai",
        pageUrl: "shiroi-toko-igai-michi-janai.html",
        cardImage: "Images/Games/Shiro/icon.png",
        title: "白いとこ以外、道じゃない",
        titleLines: ["白いとこ以外、", "道じゃない"],
        shortTitle: "白いとこ以外、道じゃない",
        tagline: "白いところだけを踏んで、家まで帰ろう。",
        description: "放課後、11歳の青路トワは「白いところだけを踏んで家まで帰る」という遊びを始めます。けれど、白線を追うほど家とは違う方向へ。道路標示、校庭のライン、工事設備、車の屋根、室外機――町にある白いものを足場に、昨日の失敗も抱えながら家を目指す、全6話の斜め見下ろし型3Dジャンプアクションです。",
        cardDescription: "白いものだけを足場に、トワの少し遠回りな帰宅を描く全6話の3Dジャンプアクション。",
        status: "公開予約済み",
        genre: "3D Jump Action",
        platforms: ["unityroom"],
        engine: "Godot",
        release: "2026年8月2日",
        releaseAt: "2026-08-02T20:00:00+09:00",
        playUrl: "https://unityroom.com/games/shiroi-toko-igai-michi-janai",
        playLabel: "unityroomでプレイ",
        availabilityNote: "unity1weekの公開予約中です。2026年8月2日20:00から一般公開されます。",
        externalLinks: [
            { label: "unityroomでゲームを開く", url: "https://unityroom.com/games/shiroi-toko-igai-michi-janai" }
        ],
        facts: [
            { label: "想定プレイ時間", value: "5〜8分" },
            { label: "対応操作", value: "キーボード / タッチ" },
            { label: "参加イベント", value: "unity1week「しろ」" }
        ],
        character: {
            name: "青路トワ",
            reading: "あおじ・トワ",
            role: "主人公・11歳／小学5年生",
            image: "Images/Games/Shiro/towa-character-design-sheet-v2.png",
            alt: "青路トワの正面、斜め、側面、背面、ランドセルと配色をまとめたキャラクター設定画",
            description: "好奇心旺盛で、思いついたらすぐに動く小学5年生。白線や街の形から道を見つけるのが得意で、誰かが困っていると放っておけません。高いところは少し怖いけれど、平気なふりをして次の白へ跳びます。",
            visual: "矢印のように立ち上がる青緑の髪、黄色い上着、紺色のTシャツ、黒いハイカットスニーカーとランドセルが目印です。"
        },
        features: [
            "WASDで移動、Shiftでダッシュ。Spaceまたは左クリックですぐに跳び、走る勢いをそのままジャンプへつなげます。空中ではWASDで着地点を微調整できます。",
            "道路標示、走る車、校庭のライン引き、点滅する工事足場、立体駐車場の二つのルート、家のインターホンへと、話ごとに「白」の遊び方が変化します。",
            "白ではない場所へ着地すると「白じゃない！」。短い演出のあと、直前の安全地帯からすぐに再挑戦できます。",
            "青路トワの走り・跳躍・着地アニメーション、足音とランドセルの揺れ、頭上に現れる会話、全編のキャラクターボイスで帰り道を描きます。",
            "PCのキーボード／マウスだけでなく、スマートフォンでは画面上のスティックとジャンプボタンで遊べます。",
            "全6話の帰宅タイムを計測し、クリア後はunityroomの最速ランキングへの送信とXへの結果共有ができます。"
        ],
        chapters: [
            {
                number: "1話",
                title: "近道のはず",
                location: "渋谷・松濤／神泉の坂道",
                description: "太い道路標示をたどり、白い場所だけが安全という基本ルールを覚えます。"
            },
            {
                number: "2話",
                title: "家、どっちだっけ？",
                location: "西新宿",
                description: "細い白線と長距離ジャンプに挑戦。三方向を行き交う車にも注意が必要です。"
            },
            {
                number: "3話",
                title: "今日は本当に近道",
                location: "放課後の校庭",
                description: "複数のライン引きから正しい一台を選び、新しく描かれた白線で道をつなぎます。"
            },
            {
                number: "4話",
                title: "工事中の近道",
                location: "高架下・工事区画",
                description: "一定間隔で消える白いバリケードと足場の順番を見極めて渡ります。"
            },
            {
                number: "5話",
                title: "見覚えのある高さ",
                location: "立体駐車場・屋上",
                description: "安全な遠回りの床面ルートか、車と設備を渡る難しい近道かを選びます。"
            },
            {
                number: "最終話",
                title: "ただいま",
                location: "家の前",
                description: "インターホン前の白線へ到達すると母親の声が返り、玄関の光が最後の着地点になります。"
            }
        ],
        credits: [
            {
                label: "Development",
                value: "egg 3d Studio"
            },
            {
                label: "Voice",
                value: '<a href="https://aivis-project.com/" target="_blank" rel="noopener noreferrer">AivisSpeech</a> — にせ（青路トワ）／morioki（母親）、Aivis Common Model License 1.0'
            },
            {
                label: "Character",
                value: '<a href="https://www.meshy.ai/" target="_blank" rel="noopener noreferrer">Meshy</a> user-generated protagonist rig; <a href="https://www.mixamo.com/" target="_blank" rel="noopener noreferrer">Adobe Mixamo</a> animations'
            },
            {
                label: "Character Props",
                value: '<a href="https://sketchfab.com/3d-models/sneakers-689c29ec3a8a4f44b32f616bcb97cfaa" target="_blank" rel="noopener noreferrer">sneakers</a> by abazibiz — CC BY 4.0; <a href="https://sketchfab.com/3d-models/japanese-school-backpack-608a48391a534d9aa67bbe82e2a96748" target="_blank" rel="noopener noreferrer">Japanese School Backpack</a> by AFX/CGMotion 3DModel Maker — CC BY 4.0'
            },
            {
                label: "Environment",
                value: '<a href="https://yarenkrmn.itch.io/low-poly-japanese-houses" target="_blank" rel="noopener noreferrer">Low Poly Japanese Houses</a> by yarenkrmn; <a href="https://seaeees.itch.io/japanese-road-signs" target="_blank" rel="noopener noreferrer">Japanese Road Signs</a> by Seaeees'
            },
            {
                label: "Environment",
                value: '<a href="https://kenney.nl/assets/city-kit-roads" target="_blank" rel="noopener noreferrer">City Kit (Roads)</a> by Kenney — CC0 1.0; <a href="https://valentin-laffitte.itch.io/retro-vending-machine-3d-asset" target="_blank" rel="noopener noreferrer">Retro Vending Machine 3D Asset</a> by Valentin Laffitte — CC0 1.0; <a href="https://yumeforge.itch.io/japanese-rural-village" target="_blank" rel="noopener noreferrer">Japanese Rural Village - Free Pack</a> by YumeForge'
            },
            {
                label: "Vehicles",
                value: '<a href="https://sketchfab.com/3d-models/generic-passenger-car-pack-20f9af9b8a404d5cb022ac6fe87f21f5" target="_blank" rel="noopener noreferrer">Generic passenger car pack</a> by Comrade1280 — CC BY 4.0; <a href="https://sketchfab.com/3d-models/low-poly-japan-offroad-car-5bde8c57de3d4be880ed6457f88636ad" target="_blank" rel="noopener noreferrer">Low poly Japan Offroad Car</a> by Han66st — CC BY 4.0'
            },
            {
                label: "Music",
                value: '<a href="https://opengameart.org/content/two-simple-game-music-loops" target="_blank" rel="noopener noreferrer">Two Simple Game Music Loops</a> by qubodup — CC0 1.0'
            },
            {
                label: "Sound Effects",
                value: '<a href="https://kenney.nl/assets/impact-sounds" target="_blank" rel="noopener noreferrer">Impact Sounds</a> and <a href="https://kenney.nl/assets/rpg-audio" target="_blank" rel="noopener noreferrer">RPG Audio</a> by Kenney; <a href="https://opengameart.org/content/car-sound-effects-pack-low-quality" target="_blank" rel="noopener noreferrer">Car Sound Effects Pack</a> by GGBotNet; <a href="https://opengameart.org/content/scrapes" target="_blank" rel="noopener noreferrer">Scrapes</a> by AntumDeluge — CC0 1.0'
            },
            {
                label: "Font",
                value: '<a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP" target="_blank" rel="noopener noreferrer">Noto Sans JP</a> — SIL Open Font License 1.1'
            },
            {
                label: "Stage Geometry",
                value: '<a href="https://github.com/microsoft/MoGe" target="_blank" rel="noopener noreferrer">MoGe-2</a> by Microsoft — MIT License'
            },
            {
                label: "Generated Art",
                value: "Title key art and stage presentation images — user-generated output created with OpenAI image generation"
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/Shiro/title-screen.png",
                alt: "『白いとこ以外、道じゃない』のタイトル画面",
                caption: "放課後の帰り道を始めよう"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/gameplay.png",
                alt: "青路トワが坂道の白い道路標示へジャンプするゲーム画面",
                caption: "走る勢いをつないで、次の白へ"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-01-shibuya-shoto.png",
                alt: "第1話、渋谷・松濤の坂道に白い道路標示が続くUIなしの背景画像",
                caption: "第1話｜近道のはず — 渋谷・松濤／神泉の坂道"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-02-nishi-shinjuku.png",
                alt: "第2話、西新宿の大きな交差点に白線が広がるUIなしの背景画像",
                caption: "第2話｜家、どっちだっけ？ — 西新宿"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-03-schoolyard.png",
                alt: "第3話、放課後の校庭に白い走路とけんけんぱが描かれたUIなしの背景画像",
                caption: "第3話｜今日は本当に近道 — 放課後の校庭"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-04-construction-underpass.png",
                alt: "第4話、高架下の工事区画に途切れた白線が見えるUIなしの背景画像",
                caption: "第4話｜工事中の近道 — 高架下・工事区画"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-05-parking-structure.png",
                alt: "第5話、夕暮れの立体駐車場に白い区画線が続くUIなしの背景画像",
                caption: "第5話｜見覚えのある高さ — 立体駐車場・屋上"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/stages/stage-06-home.png",
                alt: "最終話、家の前のインターホンへ白線が続くUIなしの背景画像",
                caption: "最終話｜ただいま — 家の前"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/icon.png",
                alt: "白線を跳び進む青路トワのアイコン",
                caption: "白いところだけを踏んで、家まで帰ろう"
            },
            {
                type: "image",
                src: "Images/Games/Shiro/towa-white-line-title.png",
                alt: "青路トワが白い道路標示へ跳ぶキービジュアル",
                caption: "白を見つけて、次の一歩へ"
            }
        ]
    },
    {
        slug: "recoil-survivor",
        pageUrl: "recoil-survivor.html",
        cardImage: "Images/Games/RecoilSurvivor.gif",
        title: "リコイル・サバイバー",
        shortTitle: "リコイル・サバイバー",
        tagline: "撃てば、逆へ飛ぶ。反動だけで生き残れ。",
        description: "射撃の反動だけで移動しながら、地下避難路へ迫る敵を迎え撃つ3Dアクションシューティングです。攻撃方向と移動方向を一発ごとに組み立て、6つの防衛ステージを突破して生存者を最終避難設備へ導きます。",
        cardDescription: "射撃の反動だけで地下避難路を守り抜く3Dアクションシューティング。",
        status: "制作中",
        isComingSoon: true,
        genre: "3D Arena Shooter",
        platforms: ["unityroom", "Google Play"],
        engine: "Godot",
        release: "公開時期未定",
        playUrl: "https://unityroom.com/games/recoil-survivor",
        playLabel: "ゲームをプレイ",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/recoil-survivor" }
        ],
        features: [
            "Godot Engineで制作中の3Dアクションシューティング。",
            "移動キーを使わず、ショットの反動だけで戦場を移動。",
            "四方から迫る敵をかわしながら、ウェーブごとの防衛戦に挑戦。",
            "6ステージのストーリーキャンペーンとエンドレス防衛を収録。"
        ],
        credits: [
            {
                label: "UI Font",
                value: '<a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP" target="_blank" rel="noopener noreferrer">Noto Sans JP Variable</a> by Google Fonts — SIL Open Font License 1.1'
            },
            {
                label: "3D Models",
                value: '<a href="https://www.mixamo.com/" target="_blank" rel="noopener noreferrer">Mixamo</a> — Swat Guy (Idle / Running / Shooting Pistol / Dying), Mannequin (Idle / Running / Punching / Dying)'
            },
            {
                label: "3D Models",
                value: '<a href="https://quaternius.com/packs/cutemonsters.html" target="_blank" rel="noopener noreferrer">Cute Animated Monsters Pack</a> by Quaternius — Alien, Yellow Dragon, Yeti; CC0 1.0 Universal'
            },
            {
                label: "Sound Effects",
                value: '<a href="https://opengameart.org/content/random-sounds-samples" target="_blank" rel="noopener noreferrer">Random Sounds Samples</a> by Augmentality (Brandon Morris) — CC0; <a href="https://opengameart.org/content/platformer-sounds-terminal-interaction-door-shots-bang-and-footsteps" target="_blank" rel="noopener noreferrer">Platformer Sounds: Terminal, Interaction, Door, Shots, Bang and Footsteps</a> by yd — CC0'
            },
            {
                label: "Music",
                value: '<a href="https://opengameart.org/content/sci-fi-melancholy" target="_blank" rel="noopener noreferrer">Sci-Fi Melancholy</a> by firstspace — CC BY 4.0'
            },
            {
                label: "Sound Effects",
                value: "Player bullet fire sound — source and license under confirmation."
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/recoil-survivor-recoil-hero.png",
                alt: "射撃の反動で移動するリコイル・サバイバー",
                caption: "撃てば、弾と反対方向へ飛ぶ"
            }
        ]
    },
    {
        slug: "bound",
        pageUrl: "bound.html",
        title: "BOUND",
        shortTitle: "BOUND",
        tagline: "タイミング良く跳んで進むジャンプアクション",
        description: "地面の動きとジャンプの気持ちよさに集中して作ったアクションゲームです。短いプレイでもテンポ良く遊べるように調整しています。",
        cardDescription: "タイミング良くクリックするリズムアクション",
        status: "公開中",
        genre: "Action",
        platforms: ["itch.io", "App Store", "Google Play", "unityroom"],
        engine: "Unity",
        release: "2025年5月",
        playUrl: "https://egg-3d.itch.io/bound",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/bound_egg" },
            { label: "itch.io", url: "https://egg-3d.itch.io/bound" },
            { label: "PLiCy", url: "https://plicy.net/GamePlay/207296" },
            { label: "App Store", url: "https://apps.apple.com/us/app/bound-timing-jump-action/id6753901555?itscg=30200&itsct=apps_box_badge&mttnsubad=6753901555" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.egg3d.bound" }
        ],
        features: [
            "ジャンプの手触りとテンポ感を中心に設計しています。",
            "短時間でも繰り返し挑戦したくなるバランスを意識しています。",
            "1入力で深い駆け引きが生まれるようにしています。"
        ],
        credits: [
            {
                label: "公開ページ",
                value: '<a href="https://unityroom.com/games/bound_egg" target="_blank" rel="noopener noreferrer">unityroom</a>'
            },
            {
                label: "使用アセット",
                value: '<a href="https://www.cgtrader.com/free-3d-models/plant/other/earth-16k-f2b2ab91-665c-4409-beac-be0f8069af8d" target="_blank" rel="noopener noreferrer">Earth 16k</a><br>EARTHステージ、背景'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/BOUND.png",
                alt: "BOUND のキービジュアル",
                caption: "キービジュアル"
            },
        ],
        video: {
            title: "BOUND プレイ動画",
            url: "https://youtube.com/shorts/-gTMPMWtRuk"
        }
    },
    {
        slug: "fallwords",
        pageUrl: "fallwords.html",
        title: "FallWords",
        shortTitle: "FallWords",
        tagline: "落ちてくる単語を打つタイピングアクション",
        description: "落下してくるワードを素早くタイプして処理していくタイピングゲームです。視認性と気持ちのいい入力体験を重視しています。",
        cardDescription: "落ちてくる単語を打つ自由度の高いタイピングアクション",
        status: "公開中",
        genre: "Typing Action",
        platforms: ["itch.io", "App Store", "Google Play", "unityroom"],
        engine: "Unity",
        release: "2025年7月",
        playUrl: "https://egg-3d.itch.io/fallwords",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/fallwords" },
            { label: "itch.io", url: "https://egg-3d.itch.io/fallwords" },
            { label: "PLiCy", url: "https://plicy.net/GamePlay/207294" },
            { label: "App Store", url: "https://apps.apple.com/us/app/fallwords-%E9%A2%A8%E8%88%B9%E7%A0%B4%E8%A3%82%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0/id6753872271" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.egg3d.FallWords" }
        ],
        features: [
            "単語の認識と入力をテンポ良く切り替える構成です。",
            "プレイ感を見ながら表示や難度を調整しています。",
            "どの文字からでも打てる自由度を実現しています。"
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
                alt: "FallWords のゲーム画面",
                caption: "アイコン画像"
            }
        ],
        video: {
            title: "FallWords プレイ動画",
            url: "https://youtu.be/zggfj0j06w4"
        }
    },
    {
        slug: "infinitebatting",
        pageUrl: "infinitebatting.html",
        title: "無限バッティング",
        shortTitle: "無限バッティング",
        tagline: "打って飛ばして気持ちよく遊ぶバッティングゲーム",
        description: "ボールを打ち返す気持ちよさを前面に出した作品です。スコアを伸ばしながら繰り返し遊べるようにしています。",
        cardDescription: "スコアを伸ばしながら繰り返し遊べるバッティングゲーム",
        status: "公開中",
        genre: "Batting Action",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年11月",
        playUrl: "https://unityroom.com/games/infinitebatting",
        playLabel: "プレイ ▶",
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
                label: "音楽",
                value: '<a href="http://notanomori.net/sound/2386/" target="_blank" rel="noopener noreferrer">野球のボールが飛ぶ音</a><br>Sound Effect by <a href="https://pixabay.com/ja/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=52818" target="_blank" rel="noopener noreferrer">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=52818" target="_blank" rel="noopener noreferrer">Pixabay</a><br><a href="https://pixabay.com/ja/sound-effects/search/%E9%87%8E%E7%90%83%E5%A0%B4/" target="_blank" rel="noopener noreferrer">Free 野球場 Sound Effects Download - Pixabay</a>'
            },
            {
                label: "3D",
                value: '"Baseball Helmet" (<a href="https://skfb.ly/DYSJ" target="_blank" rel="noopener noreferrer">https://skfb.ly/DYSJ</a>) by Microsoft is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"Baseball Cap" (<a href="https://skfb.ly/6sEqr" target="_blank" rel="noopener noreferrer">https://skfb.ly/6sEqr</a>) by Scott VanArsdale is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"BaseBall" (<a href="https://skfb.ly/6WXOE" target="_blank" rel="noopener noreferrer">https://skfb.ly/6WXOE</a>) by neutralize is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"Baseball Glove" (<a href="https://skfb.ly/6pDON" target="_blank" rel="noopener noreferrer">https://skfb.ly/6pDON</a>) by Andre Bond Sr. is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"glove_6-6-20_deci600k" (<a href="https://skfb.ly/6SZPS" target="_blank" rel="noopener noreferrer">https://skfb.ly/6SZPS</a>) by lamont-media is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.'
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
            url: "https://youtu.be/2WwUUUuVbmM"
        }
    },
    {
        slug: "6arapon",
        pageUrl: "6arapon.html",
        title: "6ARAPON",
        shortTitle: "6ARAPON",
        tagline: "回して集めるガラポン収集ゲーム",
        description: "ガラポンを回してアイテムを集めていくゲームです。少しずつ進めたくなる収集感を大切にしています。",
        cardDescription: "回して集めるガラポン効率化収集ゲーム",
        status: "公開中",
        genre: "Idle / Collection",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年10月",
        playUrl: "https://unityroom.com/games/6arapon",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/6arapon" },
            { label: "App Store", url: "https://apps.apple.com/jp/app/6arapon-%E3%82%AC%E3%83%A9%E3%83%9D%E3%83%B3%E5%8A%B9%E7%8E%87%E5%8C%96%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AB%E3%83%BC/id6754412698" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.egg3dStudio.GARAPON" }
        ],
        features: [
            "回して集める行為の楽しさを素直に味わえます。",
            "見た目の変化と収集進捗が分かりやすい構成です。",
            "軽い操作で遊び続けられるテンポにしています。"
        ],
        credits: [
            {
                label: "使用アセット",
                value: '<a href="https://otologic.jp/free/se/lottery-drawing-bingo01.html" target="_blank" rel="noopener noreferrer">OtoLogic</a><br>BGM（木漏れ日の中で）、効果音（ガラポンを回す音など）を使用させていただきました<br>ありがとうございます'
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
            url: "https://youtube.com/shorts/Vf7Pq84lHQo"
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
        playLabel: "プレイ ▶",
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
                label: "クレジット",
                value: 'ありがとうございます<br><a href="https://soundeffect-lab.info/sound/battle/battle2.html" target="_blank" rel="noopener noreferrer">効果音ラボ - フリー、商用無料、報告不用の効果音素材をダウンロード</a><br>BGM: In That Mood<br>"Stone Elemental" (<a href="https://skfb.ly/6SJrZ" target="_blank" rel="noopener noreferrer">https://skfb.ly/6SJrZ</a>) by 3DWorkbench is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"Rocks Low Poly Starter Pack" (<a href="https://skfb.ly/6TuOH" target="_blank" rel="noopener noreferrer">https://skfb.ly/6TuOH</a>) by Dreyx is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"Torch" (<a href="https://skfb.ly/6AR9T" target="_blank" rel="noopener noreferrer">https://skfb.ly/6AR9T</a>) by DJMaesen is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br><a href="https://fonts.google.com/specimen/Rubik+Spray+Paint?preview.text=ABCDEFGHIJKLMN&categoryFilters=Feeling:%2FExpressive%2FPlayful" target="_blank" rel="noopener noreferrer">Rubik Spray Paint - Google Fonts</a><br><a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?preview.text=ABCDEFGHIJKLMN%E3%81%82&query=sans&lang=ja_Jpan" target="_blank" rel="noopener noreferrer">Noto Sans Japanese - Google Fonts</a><br>"lowpoly pig black" (<a href="https://skfb.ly/onUu6" target="_blank" rel="noopener noreferrer">https://skfb.ly/onUu6</a>) by fabiotambone is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.<br>"Stylized Chest" (<a href="https://skfb.ly/o99NY" target="_blank" rel="noopener noreferrer">https://skfb.ly/o99NY</a>) by Pasindu.Anjana is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.'
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
            url: "https://youtu.be/W4cl-E779Ew"
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
        playLabel: "プレイ ▶",
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
                label: "使用アセット",
                value: '"Musical Note Symbols" by <a href="https://sketchfab.com/3d-models/musical-note-symbols-f5b9e3e74d874c11a3acc4fc64ddd5cf" target="_blank" rel="noopener noreferrer">SharpWind</a><br>音符3Dモデル'
            },
            {
                label: "使用アセット",
                value: '<a href="https://sketchfab.com/3d-models/macintosh-128k-896ea439b67b4606a23fb8b93be6af6d" target="_blank" rel="noopener noreferrer">Macintosh 128K by kreems</a><br>PC'
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
            url: "https://youtube.com/shorts/RCgnANDR-Fo"
        }
    },
    {
        slug: "canyougravity",
        pageUrl: "canyougravity.html",
        title: "Can You 引力",
        shortTitle: "Can You 引力",
        tagline: "引力エネルギーを使いこなすパズルアクション",
        description: "引力エネルギーを使いこなしゴールを目指すアクションパズルです。短いステージの中に考える楽しさを詰めています。",
        cardDescription: "引力を得て、そのエネルギーを消費してジャンプするゲーム",
        status: "公開中",
        genre: "Puzzle Action",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年8月",
        playUrl: "https://unityroom.com/games/canyougravity",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "unityroom", url: "https://unityroom.com/games/canyougravity" }],
        features: [
            "引力を軸にした明快なルールです。",
            "短いステージで試行錯誤しやすくしています。",
            "unity1week（お題：ひく）参加作品です。"
        ],
        credits: [
            {
                label: "使用アセット",
                value: 'BGM、ロゴは <a href="https://x.com/akamonsuta" target="_blank" rel="noopener noreferrer">赤モンスターさん</a> に作っていただきました。'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/CanYouGravity.gif",
                alt: "Can You 引力 のサムネイル",
                caption: "unityroom 掲載画像"
            }
        ],
        video: {
            title: "プレイ動画",
            url: "https://youtu.be/ZCZVIMjMHKI"

        }
    },
    {
        slug: "one-more-piece",
        pageUrl: "one-more-piece.html",
        title: "もうひとつむつむ",
        shortTitle: "もうひとつむつむ",
        tagline: "積んで高さを競う物理ゲーム",
        description: "オブジェクトを積み上げながら駆け引きを楽しむ対戦寄りの作品です。物理挙動の意外性も含めて遊びにしています。",
        cardDescription: "積んでつなげて遊ぶ物理ゲーム",
        status: "公開中",
        genre: "Physics Battle",
        platforms: ["unityroom"],
        engine: "Unity",
        release: "2025年12月",
        playUrl: "https://unityroom.com/games/onemorepiece",
        playLabel: "プレイ ▶",
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
                label: "BGM",
                value: '<a href="https://dova-s.jp/bgm/detail/21617" target="_blank" rel="noopener noreferrer">Southerly Wind written by MFP【Marron Fields Production】</a>'
            },
            {
                label: "効果音",
                value: '<a href="https://soundeffect-lab.info/sound/various/" target="_blank" rel="noopener noreferrer">水滴1</a>'
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
            url: "https://youtube.com/shorts/pzKQW1R4yvA?feature=share"
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
        genre: "Action",
        platforms: ["Roblox"],
        engine: "Roblox Studio",
        release: "2026年3月",
        playUrl: "https://www.roblox.com/games/70411997326136/",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "Roblox", url: "https://www.roblox.com/games/70411997326136/" }
        ],
        features: [
            "時間経過で速度と密度が増していく、反射神経重視の回避アクションです。",
            "無敵やスキルのパワーアップを拾って切り抜ける構成です。",
            "ニアミスでスコアを伸ばす、攻めた回避を誘う設計です。"
        ],
        credits: [],
        media: [
            {
                type: "image",
                src: "Images/Games/RobloxVoxelDodge.png",
                alt: "ボクセル・ドッジ のサムネイル",
                caption: "Roblox 掲載画像"
            }
        ],
        video: {
            title: "ボクセル・ドッジ プレイ動画",
            url: "https://youtu.be/bz0o6NbNMKs"
        }
    },
    {
        slug: "gumball-rush-tycoon",
        pageUrl: "gumball-rush-tycoon.html",
        title: "Gumball Rush Tycoon",
        shortTitle: "Gumball Rush",
        tagline: "回して集めて強化するタイクーン",
        description: "マシンを強化しながらガムボールを量産するゲームです。BOOST や FEVER、実績報酬やランキングを組み合わせた成長型のタイクーンにしています。",
        cardDescription: "回して集めて強化するタイクーンです。",
        status: "公開中",
        genre: "Tycoon",
        platforms: ["Roblox"],
        engine: "Roblox Studio",
        release: "2026年4月",
        playUrl: "https://www.roblox.com/games/135339943321106/",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "Roblox", url: "https://www.roblox.com/games/135339943321106/" }
        ],
        features: [
            "マシン強化と収集を繰り返して規模を広げるタイクーン作品です。",
            "BOOST と FEVER で一気に生産量を伸ばす山場を作っています。",
            "デイリー報酬、放置報酬、実績報酬、ランキングを用意しています。"
        ],
        credits: [
            {
                label: "使用アセット",
                value: '"Gumball Machine (Free Download)" (<a href="https://skfb.ly/6tLGv" target="_blank" rel="noopener noreferrer">https://skfb.ly/6tLGv</a>) by pizzaguyty is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>.'
            }
        ],
        media: [
            {
                type: "image",
                src: "Images/Games/RobloxGumballRushTycoon.png",
                alt: "Gumball Rush Tycoon のサムネイル",
                caption: "Roblox 掲載画像"
            }
        ],
        video: {
            title: "Gumball Rush Tycoon プレイ動画",
            url: "https://youtu.be/3G_C4K7geg0"
        }
    },
    {
        slug: "odd-reversi-stone-battle",
        pageUrl: "odd-reversi-stone-battle.html",
        title: "おかしなリバーシ",
        shortTitle: "おかしなリバーシ",
        tagline: "ふつうのリバーシとはちょっとちがう、ドキドキのストーンバトル",
        description: "石をひっくり返して、ステージを自分の色でいっぱいにするRobloxのボードゲームです。ばくだん、シールド、タワー、サイコロなどのアビリティストーンを使って、自分だけのデッキで大逆転をねらえます。NPCとのバトル、デイリーチャレンジャー、宝箱、クエスト、ランキング、リアルタイムPvPまで楽しめます。",
        cardDescription: "アビリティストーンで戦うRobloxの対戦ボードゲームです。",
        status: "公開中",
        genre: "Board Game",
        platforms: ["Roblox"],
        engine: "Roblox Studio",
        release: "2026年5月",
        playUrl: "https://www.roblox.com/ja/games/119363174550537/Odd-Reversi-Stone-Battle",
        playLabel: "プレイ ▶",
        externalLinks: [
            { label: "Roblox", url: "https://www.roblox.com/ja/games/119363174550537/Odd-Reversi-Stone-Battle" }
        ],
        features: [
            "石を置いて相手の石をはさみ、自分の色に変えてステージを広げていきます。",
            "ばくだん、シールド、タワー、サイコロなどのアビリティストーンで、ふつうのリバーシとは違う逆転の読み合いが生まれます。",
            "リバーシ・ワールドのNPC、デイリーチャレンジャー、宝箱、クエスト、アチーブメント、ランキング、リアルタイムPvPに対応しています。"
        ],
        credits: [],
        media: [
            {
                type: "image",
                src: "Images/Games/OddReversi.png",
                alt: "おかしなリバーシ のアイコン",
                caption: "Roblox 掲載画像"
            }
        ],
        video: {
            title: "おかしなリバーシ プレイ動画",
            url: "https://www.youtube.com/watch?v=utMJWXE7Bf4"
        }
    }
];

const siteMeta = {
    studioName: "egg 3d Studio",
    creatorName: "なまたまご",
    featuredSlugs: [
        "shiroi-toko-igai-michi-janai",
        "fallwords",
        "gumball-rush-tycoon"
    ]
};

const gameCardArt = {
    "type-volley": { src: "Images/Games/TypeVolley/type-volley-poster.jpg", background: "#dce7ff" },
    "shiroi-toko-igai-michi-janai": { src: "Images/Games/Icons/shiro.png", background: "#dce7ff" },
    "recoil-survivor": { src: "Images/Games/Icons/recoil-survivor.png", background: "#fff0c4" },
    bound: { src: "Images/Games/Icons/bound.png", background: "#d9f3e4" },
    fallwords: { src: "Images/Games/Icons/fallwords.png", background: "#e7ddff" },
    infinitebatting: { src: "Images/Games/Icons/infinite-batting.png", background: "#d9f3e4" },
    "6arapon": { src: "Images/Games/Icons/6arapon.png", background: "#dce7ff" },
    bombtype: { src: "Images/Games/Icons/bombtype.png", background: "#fff0c4" },
    "tone-compare": { src: "Images/Games/Icons/tone-compare.png", background: "#e7ddff" },
    canyougravity: { src: "Images/Games/Icons/can-you-gravity.png", background: "#e7ddff" },
    "one-more-piece": { src: "Images/Games/Icons/one-more-piece.png", background: "#dce7ff" },
    "roblox-voxel-dodge": { src: "Images/Games/Icons/voxel-dodge.png", background: "#dce7ff" },
    "gumball-rush-tycoon": { src: "Images/Games/Icons/gumball-rush.png", background: "#fff0c4" },
    "odd-reversi-stone-battle": { src: "Images/Games/Icons/odd-reversi.png", background: "#e7ddff" }
};

const gameCardPreviews = {
    "type-volley": { type: "image", src: "Images/Games/TypeVolley/type-volley-poster.jpg" },
    "shiroi-toko-igai-michi-janai": {
        type: "slideshow",
        sources: [
            "Images/Games/Shiro/gameplay.png",
            "Images/Games/Shiro/stages/stage-03-schoolyard.png",
            "Images/Games/Shiro/stages/stage-05-parking-structure.png"
        ]
    },
    "recoil-survivor": { type: "image", src: "Images/Games/RecoilSurvivor.gif" },
    bound: { type: "youtube", id: "-gTMPMWtRuk" },
    fallwords: { type: "image", src: "Images/Games/FallWords.gif" },
    infinitebatting: { type: "image", src: "Images/Games/InfiniteBatting.gif" },
    "6arapon": { type: "image", src: "Images/Games/6ARAPON.gif" },
    bombtype: { type: "image", src: "Images/Games/BombType.gif" },
    "tone-compare": { type: "image", src: "Images/Games/ToneCompare.gif" },
    canyougravity: { type: "image", src: "Images/Games/CanYouGravity.gif" },
    "one-more-piece": { type: "image", src: "Images/Games/OneMorePiece.gif" },
    "roblox-voxel-dodge": { type: "image", src: "Images/Games/RobloxVoxelDodge.png" },
    "gumball-rush-tycoon": { type: "youtube", id: "3G_C4K7geg0" },
    "odd-reversi-stone-battle": { type: "youtube", id: "utMJWXE7Bf4" }
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

const getCompactPlatformLabel = (platforms) => {
    if (!Array.isArray(platforms) || !platforms.length) {
        return "公開先未定";
    }

    return platforms.length === 1
        ? platforms[0]
        : `${platforms[0]} +${platforms.length - 1}`;
};

const getPrimaryPlayUrl = (game) => {
    const links = Array.isArray(game.externalLinks) ? game.externalLinks : [];
    const platforms = Array.isArray(game.platforms) ? game.platforms : [];

    if (platforms.some((platform) => String(platform).toLowerCase() === "roblox")) {
        return links.find((link) => /roblox/i.test(link.label))?.url || game.playUrl;
    }

    return links.find((link) => /unityroom/i.test(link.label))?.url || game.playUrl;
};

const getAvailabilityNote = (game) => {
    if (!game.releaseAt) {
        return game.availabilityNote || "";
    }

    const releaseTime = Date.parse(game.releaseAt);
    return Number.isFinite(releaseTime) && Date.now() < releaseTime
        ? game.availabilityNote || ""
        : game.postReleaseNote || "";
};

const getDisplayStatus = (game) => {
    if (game.releaseAt) {
        const releaseTime = Date.parse(game.releaseAt);
        if (Number.isFinite(releaseTime) && Date.now() >= releaseTime) {
            return "公開中";
        }
    }

    return game.status || (game.isComingSoon ? "制作中" : "公開中");
};

const parseReleaseDateValue = (release) => {
    const match = String(release).match(/(\d{4})年(\d{1,2})月/);
    if (!match) {
        return 0;
    }

    return Number(match[1]) * 100 + Number(match[2]);
};

const getCardImage = (source) => {
    const filename = source.split("/").pop() || "";
    const basename = filename.replace(/\.[^.]+$/, "");
    const slug = basename
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();

    return `Images/Games/Cards/${slug}.webp`;
};

const getStudioStats = () => [
    {
        value: String(games.length),
        label: "掲載タイトル"
    },
    {
        value: String(new Set(games.map((game) => game.engine).filter(Boolean)).size),
        label: "開発環境"
    },
    {
        value: String(new Set(games.flatMap((game) => game.platforms || [])).size),
        label: "公開プラットフォーム"
    }
];

const renderStudioStats = () => {
    const markup = getStudioStats().map((stat) => `
        <div class="studio-stat">
            <strong>${escapeHtml(stat.value)}</strong>
            <span>${escapeHtml(stat.label)}</span>
        </div>
    `).join("");

    document.querySelectorAll("[data-studio-stats]").forEach((root) => {
        root.innerHTML = markup;
    });
};

const createGameCard = (game, options = {}) => {
    const cardTag = game.isComingSoon ? "article" : "a";
    const cardClasses = ["game-card"];
    if (game.isComingSoon) {
        cardClasses.push("game-card-coming-soon");
    }
    if (options.featured) {
        cardClasses.push("game-card-featured");
    }
    const cardAttributes = game.isComingSoon
        ? `class="${cardClasses.join(" ")}" aria-label="${escapeHtml(`${game.title}（準備中）`)}"`
        : `class="${cardClasses.join(" ")}" href="${game.pageUrl}"`;
    const comingSoonBadge = game.isComingSoon
        ? '<span class="game-card-status"><span aria-hidden="true">⌛</span> 準備中</span>'
        : "";
    const displayStatus = getDisplayStatus(game);
    const statusClass = displayStatus === "公開中" ? "is-live" : "is-progress";
    const releaseLabel = game.isComingSoon ? "公開時期未定" : game.release;
    const cardArt = gameCardArt[game.slug];
    const cardImage = cardArt?.src || game.cardImage || getCardImage(game.media[0].src);
    const cardImageAlt = cardArt
        ? `${game.title}のゲーム内容を表す卓上ミニチュア風アイコン`
        : game.media[0].alt;
    const cardArtStyle = cardArt ? ` style="--game-card-art-bg: ${cardArt.background}"` : "";
    const preview = gameCardPreviews[game.slug];
    const previewAttributes = preview
        ? [
            `data-preview-type="${escapeHtml(preview.type)}"`,
            preview.src ? `data-preview-src="${escapeHtml(preview.src)}"` : "",
            preview.id ? `data-preview-youtube-id="${escapeHtml(preview.id)}"` : "",
            preview.sources ? `data-preview-sources="${escapeHtml(preview.sources.join("|"))}"` : ""
        ].filter(Boolean).join(" ")
        : "";
    const previewMarkup = preview
        ? `<div class="game-card-preview" ${previewAttributes} aria-hidden="true"><span class="game-card-preview-badge"><span aria-hidden="true"></span> Preview</span></div>`
        : "";

    return `
    <${cardTag} ${cardAttributes}>
        <div class="game-card-media"${cardArtStyle}>
            <img class="game-card-icon" src="${escapeHtml(cardImage)}" alt="${escapeHtml(cardImageAlt)}" width="640" height="640" loading="lazy">
            ${previewMarkup}
            ${comingSoonBadge}
        </div>
        <div class="game-card-body">
            <div class="game-card-topline">
                <span class="game-card-title">${escapeHtml(game.title)}</span>
            </div>
            <p class="game-card-tagline">${escapeHtml(game.tagline)}</p>
            <div class="game-card-meta" aria-label="開発環境と公開先">
                <span>${escapeHtml(game.engine || "Engine未設定")}</span>
                <span>${escapeHtml(getCompactPlatformLabel(game.platforms))}</span>
            </div>
            <div class="game-card-footer">
                <span class="game-card-state ${statusClass}">${escapeHtml(displayStatus)}</span>
                <span class="game-card-release">${escapeHtml(releaseLabel)}</span>
            </div>
        </div>
    </${cardTag}>
`;
};

const createCollectionPiece = (game, index) => {
    const cardArt = gameCardArt[game.slug];
    const preview = gameCardPreviews[game.slug];
    const fallbackMedia = (game.media || []).find((item) => item.type === "image")?.src
        || cardArt?.src
        || game.cardImage
        || getCardImage(game.media[0].src);
    const previewAttributes = preview
        ? [
            `data-preview-type="${escapeHtml(preview.type)}"`,
            preview.src ? `data-preview-src="${escapeHtml(preview.src)}"` : "",
            preview.id ? `data-preview-youtube-id="${escapeHtml(preview.id)}"` : "",
            preview.sources ? `data-preview-sources="${escapeHtml(preview.sources.join("|"))}"` : ""
        ].filter(Boolean).join(" ")
        : "";

    return `
        <a class="collection-game-piece" href="${game.pageUrl}" role="listitem"
            data-collection-piece data-game-index="${index}"
            data-game-title="${escapeHtml(game.title)}"
            data-game-tagline="${escapeHtml(game.tagline)}"
            data-game-engine="${escapeHtml(game.engine || "Engine未設定")}"
            data-game-platform="${escapeHtml(getCompactPlatformLabel(game.platforms))}"
            data-game-status="${escapeHtml(getDisplayStatus(game))}"
            data-game-release="${escapeHtml(game.isComingSoon ? "公開時期未定" : game.release)}"
            data-preview-fallback="${escapeHtml(fallbackMedia)}"
            ${previewAttributes}
            aria-label="${escapeHtml(`${game.title}を選ぶ`)}">
            <img src="${escapeHtml(cardArt?.src || game.cardImage || getCardImage(game.media[0].src))}"
                alt="" width="640" height="640" loading="lazy">
        </a>
    `;
};

const renderHomePage = () => {
    const shelves = document.getElementById("game-shelves");
    const sortedGames = [...games].sort((left, right) => parseReleaseDateValue(right.release) - parseReleaseDateValue(left.release));

    if (!shelves) {
        return;
    }

    shelves.innerHTML = `
        <section id="game-collection" class="content-section shelf-section collection-section">
            <div class="collection-browser" data-collection-browser>
                <div class="collection-live-preview" data-collection-live-preview aria-live="polite" aria-hidden="true" role="status">
                    <div class="collection-preview-visual" data-collection-preview-visual></div>
                    <div class="collection-preview-info">
                        <h3 data-collection-title></h3>
                        <p class="collection-preview-tagline" data-collection-tagline></p>
                        <div class="collection-preview-meta" aria-label="作品情報">
                            <span data-collection-engine></span>
                            <span data-collection-platform></span>
                            <span data-collection-release></span>
                        </div>
                        <span class="collection-preview-open">アイコンをクリックして作品ページへ →</span>
                    </div>
                </div>
                <div class="collection-piece-grid" role="list" aria-label="全ゲーム一覧">
                    ${sortedGames.map((game, index) => createCollectionPiece(game, index)).join("")}
                </div>
            </div>
        </section>
    `;

    setupCollectionBrowser();
};

const setupCollectionBrowser = () => {
    const browser = document.querySelector("[data-collection-browser]");
    if (!browser) {
        return;
    }

    const pieces = Array.from(browser.querySelectorAll("[data-collection-piece]"));
    const track = browser.querySelector(".collection-piece-grid");
    const visual = browser.querySelector("[data-collection-preview-visual]");
    const title = browser.querySelector("[data-collection-title]");
    const tagline = browser.querySelector("[data-collection-tagline]");
    const engine = browser.querySelector("[data-collection-engine]");
    const platform = browser.querySelector("[data-collection-platform]");
    const release = browser.querySelector("[data-collection-release]");
    const previewLink = browser.querySelector("[data-collection-live-preview]");
    const previewHome = previewLink.parentElement;
    let activePiece;
    let scrollFrame;
    let activationTimer;
    let hideTimer;

    if (!pieces.length || !track || !visual || !previewLink) {
        return;
    }

    const clearVisual = () => {
        visual.replaceChildren();
        visual.classList.remove("is-loading", "is-unavailable");
    };

    const buildVisual = (piece) => {
        clearVisual();
        const type = piece.dataset.previewType;
        const sources = type === "slideshow"
            ? (piece.dataset.previewSources || "").split("|").filter(Boolean)
            : [piece.dataset.previewSrc, piece.dataset.previewFallback].filter(Boolean);
        const image = document.createElement("img");
        image.alt = `${piece.dataset.gameTitle}のゲーム画面`;
        image.decoding = "async";
        const uniqueSources = [...new Set([
            ...sources,
            piece.dataset.previewFallback,
            piece.querySelector("img")?.src
        ].filter(Boolean))];
        let sourceIndex = 0;
        visual.classList.add("is-loading");
        image.addEventListener("load", () => {
            visual.classList.remove("is-loading", "is-unavailable");
        });
        image.addEventListener("error", () => {
            sourceIndex += 1;
            if (uniqueSources[sourceIndex]) {
                image.src = uniqueSources[sourceIndex];
                return;
            }
            visual.classList.remove("is-loading");
            visual.classList.add("is-unavailable");
            image.remove();
        });
        visual.append(image);
        if (uniqueSources[0]) {
            image.src = uniqueSources[0];
        } else {
            visual.classList.remove("is-loading");
            visual.classList.add("is-unavailable");
        }
    };

    const showPreview = () => {
        previewLink.classList.add("is-visible");
        previewLink.setAttribute("aria-hidden", "false");
    };

    const hidePreview = () => {
        previewLink.classList.remove("is-visible");
        previewLink.setAttribute("aria-hidden", "true");
    };

    const mountMobilePreview = (piece) => {
        if (!window.matchMedia("(max-width: 760px)").matches || previewLink.parentElement === piece) {
            return;
        }
        piece.append(previewLink);
    };

    const positionPreview = (piece) => {
        if (window.matchMedia("(max-width: 760px)").matches) {
            previewLink.style.removeProperty("--preview-x");
            previewLink.style.removeProperty("--preview-y");
            return;
        }
        if (previewLink.parentElement !== previewHome) {
            previewHome.insertBefore(previewLink, track);
        }
        window.requestAnimationFrame(() => {
            const browserRect = browser.getBoundingClientRect();
            const pieceRect = piece.getBoundingClientRect();
            const previewRect = previewLink.getBoundingClientRect();
            const gap = 14;
            const margin = 8;
            const centeredX = pieceRect.left - browserRect.left
                + pieceRect.width / 2 - previewRect.width / 2;
            const x = Math.max(margin, Math.min(
                browserRect.width - previewRect.width - margin,
                centeredX
            ));
            const above = pieceRect.top - browserRect.top - previewRect.height - gap;
            const below = pieceRect.bottom - browserRect.top + gap;
            const preferredY = above >= margin ? above : below;
            const y = Math.max(margin, Math.min(
                browserRect.height - previewRect.height - margin,
                preferredY
            ));
            previewLink.style.setProperty("--preview-x", `${x}px`);
            previewLink.style.setProperty("--preview-y", `${y}px`);
        });
    };

    const activate = (piece) => {
        if (!piece) {
            return;
        }
        if (piece === activePiece) {
            mountMobilePreview(piece);
            positionPreview(piece);
            showPreview();
            return;
        }
        activePiece = piece;
        pieces.forEach((candidate) => {
            const selected = candidate === piece;
            candidate.classList.toggle("is-selected", selected);
            candidate.setAttribute("aria-current", selected ? "true" : "false");
        });
        buildVisual(piece);
        title.textContent = piece.dataset.gameTitle || "";
        tagline.textContent = piece.dataset.gameTagline || "";
        engine.textContent = piece.dataset.gameEngine || "";
        platform.textContent = piece.dataset.gamePlatform || "";
        release.textContent = piece.dataset.gameRelease || "";
        previewLink.dataset.href = piece.href;
        mountMobilePreview(piece);
        positionPreview(piece);
        showPreview();
    };

    const scheduleActivation = (piece, delay = 90) => {
        window.clearTimeout(hideTimer);
        window.clearTimeout(activationTimer);
        activationTimer = window.setTimeout(() => activate(piece), delay);
    };

    pieces.forEach((piece) => {
        piece.addEventListener("mouseenter", () => scheduleActivation(piece));
        piece.addEventListener("focus", () => activate(piece));
        piece.addEventListener("mouseleave", () => {
            if (!window.matchMedia("(max-width: 760px)").matches) {
                hideTimer = window.setTimeout(hidePreview, 220);
            }
        });
    });

    pieces.forEach((piece) => {
        const sources = [
            piece.dataset.previewSrc,
            piece.dataset.previewFallback,
            ...(piece.dataset.previewSources || "").split("|")
        ].filter(Boolean);
        sources.forEach((source) => {
            const preload = new Image();
            preload.src = source;
        });
    });

    browser.addEventListener("mouseleave", () => {
        if (!window.matchMedia("(max-width: 760px)").matches && !browser.contains(document.activeElement)) {
            hidePreview();
        }
    });
    browser.addEventListener("focusout", () => {
        window.setTimeout(() => {
            if (!browser.matches(":hover") && !browser.contains(document.activeElement)) {
                hidePreview();
            }
        }, 0);
    });

    const activateNearestToCenter = () => {
        const center = window.innerHeight * 0.52;
        const visiblePieces = pieces.filter((piece) => {
            const rect = piece.getBoundingClientRect();
            return rect.bottom > 120 && rect.top < window.innerHeight;
        });
        const nearest = visiblePieces.reduce((best, piece) => {
            const rect = piece.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - center);
            return !best || distance < best.distance ? { piece, distance } : best;
        }, null);
        activate(nearest?.piece);
    };

    window.addEventListener("scroll", () => {
        if (!window.matchMedia("(max-width: 760px)").matches) {
            return;
        }
        window.cancelAnimationFrame(scrollFrame);
        scrollFrame = window.requestAnimationFrame(activateNearestToCenter);
    }, { passive: true });

    window.addEventListener("resize", () => {
        if (!window.matchMedia("(max-width: 760px)").matches) {
            if (activePiece) {
                positionPreview(activePiece);
            }
            return;
        }
        window.cancelAnimationFrame(scrollFrame);
        scrollFrame = window.requestAnimationFrame(activateNearestToCenter);
    }, { passive: true });

    if (window.matchMedia("(max-width: 760px)").matches) {
        window.requestAnimationFrame(activateNearestToCenter);
    }
};

const setupGameCardPreviews = () => {
    const cards = Array.from(document.querySelectorAll(".game-card"));
    const startTimers = new WeakMap();
    const slideTimers = new WeakMap();

    const clearSlideTimer = (card) => {
        const timer = slideTimers.get(card);
        if (timer) {
            window.clearInterval(timer);
            slideTimers.delete(card);
        }
    };

    const stopPreview = (card) => {
        const startTimer = startTimers.get(card);
        if (startTimer) {
            window.clearTimeout(startTimer);
            startTimers.delete(card);
        }
        clearSlideTimer(card);
        const preview = card.querySelector(".game-card-preview");
        if (!preview) {
            return;
        }
        card.classList.remove("is-previewing");
        const frame = preview.querySelector("iframe");
        if (frame) {
            frame.remove();
        }
        const image = preview.querySelector("img");
        if (image) {
            image.remove();
        }
    };

    const startPreview = (card) => {
        const preview = card.querySelector(".game-card-preview");
        if (!preview || card.classList.contains("is-previewing")) {
            return;
        }
        const type = preview.dataset.previewType;
        if (type === "youtube" && preview.dataset.previewYoutubeId) {
            const videoId = preview.dataset.previewYoutubeId;
            const frame = document.createElement("iframe");
            frame.title = "ゲーム紹介動画プレビュー";
            frame.tabIndex = -1;
            frame.allow = "autoplay; encrypted-media; picture-in-picture";
            frame.referrerPolicy = "strict-origin-when-cross-origin";
            frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=${encodeURIComponent(videoId)}&playsinline=1&rel=0`;
            preview.prepend(frame);
        } else {
            const sources = type === "slideshow"
                ? (preview.dataset.previewSources || "").split("|").filter(Boolean)
                : [preview.dataset.previewSrc].filter(Boolean);
            if (!sources.length) {
                return;
            }
            const image = document.createElement("img");
            image.alt = "";
            image.decoding = "async";
            image.src = sources[0];
            preview.prepend(image);
            if (sources.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                let slideIndex = 0;
                const timer = window.setInterval(() => {
                    slideIndex = (slideIndex + 1) % sources.length;
                    image.src = sources[slideIndex];
                }, 1400);
                slideTimers.set(card, timer);
            }
        }
        card.classList.add("is-previewing");
    };

    const schedulePreview = (card, delay = 320) => {
        const existingTimer = startTimers.get(card);
        if (existingTimer) {
            window.clearTimeout(existingTimer);
        }
        const timer = window.setTimeout(() => {
            startTimers.delete(card);
            startPreview(card);
        }, delay);
        startTimers.set(card, timer);
    };

    cards.forEach((card) => {
        if (!card.querySelector(".game-card-preview")) {
            return;
        }
        card.addEventListener("mouseenter", () => schedulePreview(card));
        card.addEventListener("mouseleave", () => {
            if (!card.contains(document.activeElement)) {
                stopPreview(card);
            }
        });
        card.addEventListener("focusin", () => schedulePreview(card, 0));
        card.addEventListener("focusout", () => {
            window.setTimeout(() => {
                if (!card.matches(":hover") && !card.contains(document.activeElement)) {
                    stopPreview(card);
                }
            }, 0);
        });
    });

    if (window.matchMedia("(hover: none)").matches && "IntersectionObserver" in window) {
        const featuredCards = cards.filter((card) => card.classList.contains("game-card-featured"));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.72) {
                    featuredCards.forEach((card) => {
                        if (card !== entry.target) {
                            stopPreview(card);
                        }
                    });
                    schedulePreview(entry.target, 700);
                } else {
                    stopPreview(entry.target);
                }
            });
        }, { threshold: [0, 0.72] });
        featuredCards.forEach((card) => observer.observe(card));
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cards.forEach(stopPreview);
        }
    });
};

const setupFeaturedCarousel = () => {
    const viewport = document.querySelector(".featured-grid");
    const cards = Array.from(viewport?.querySelectorAll(".game-card") || []);
    const previousButton = document.querySelector('[data-featured-action="prev"]');
    const nextButton = document.querySelector('[data-featured-action="next"]');
    const currentLabel = document.querySelector("[data-featured-current]");

    if (!viewport || !cards.length || !previousButton || !nextButton || !currentLabel) {
        return;
    }

    let activeIndex = 0;
    let scrollFrame;

    const getCardLeft = (card) =>
        card.getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft;

    const updateControls = (nextIndex) => {
        activeIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
        currentLabel.textContent = String(activeIndex + 1);
        previousButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === cards.length - 1;
    };

    const scrollToCard = (nextIndex) => {
        const boundedIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        viewport.scrollTo({
            left: getCardLeft(cards[boundedIndex]),
            behavior: reduceMotion ? "auto" : "smooth"
        });
        updateControls(boundedIndex);
    };

    previousButton.addEventListener("click", () => scrollToCard(activeIndex - 1));
    nextButton.addEventListener("click", () => scrollToCard(activeIndex + 1));

    viewport.addEventListener("scroll", () => {
        if (scrollFrame) {
            window.cancelAnimationFrame(scrollFrame);
        }

        scrollFrame = window.requestAnimationFrame(() => {
            const nearestIndex = cards.reduce((nearest, card, index) => {
                const currentDistance = Math.abs(getCardLeft(card) - viewport.scrollLeft);
                const nearestDistance = Math.abs(getCardLeft(cards[nearest]) - viewport.scrollLeft);
                return currentDistance < nearestDistance ? index : nearest;
            }, 0);
            updateControls(nearestIndex);
        });
    }, { passive: true });

    updateControls(0);
};

const getMediaVisualStyle = (item) =>
    item.position
        ? ` style="--media-object-position:${escapeHtml(item.position)};"`
        : "";

const createMediaMarkup = (item, index, isActive) => {
    if (item.type === "video") {
        return `
            <figure class="media-slide media-slide-video ${isActive ? "is-active" : ""}" data-media-slide data-media-type="video" data-media-platform="${escapeHtml(item.platform || "")}" data-media-index="${index}">
                <div class="media-visual media-visual-video">
                    ${createVideoEmbedMarkup(item, item.alt)}
                </div>
            </figure>
        `;
    }

    return `
        <figure class="media-slide ${isActive ? "is-active" : ""}" data-media-slide data-media-type="image" data-media-index="${index}">
            <div class="media-visual"${getMediaVisualStyle(item)}>
                <img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy">
            </div>
            ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
        </figure>
    `;
};

const getVideoSource = (url) => {
    if (!url) {
        return { platform: "", id: "", url: "" };
    }

    try {
        const parsed = new URL(url);
        const host = parsed.hostname.replace(/^www\./, "");

        if (host === "youtu.be" || host === "youtube.com" || host === "m.youtube.com") {
            return {
                platform: "youtube",
                id: getYouTubeVideoId(url),
                url
            };
        }

        if ((host === "x.com" || host === "twitter.com") && parsed.pathname.includes("/status/")) {
            const match = parsed.pathname.match(/status\/(\d+)/);
            return {
                platform: "x",
                id: match?.[1] || "",
                url
            };
        }

        if (host === "video.twimg.com" || parsed.pathname.toLowerCase().endsWith(".mp4")) {
            return {
                platform: "file",
                id: parsed.pathname,
                url
            };
        }
    } catch {
        return { platform: "", id: "", url: "" };
    }

    return { platform: "", id: "", url: "" };
};

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
    const videoItem = getVideoMediaItem(game);
    if (!videoItem) {
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
                ${createVideoEmbedMarkup(videoItem, `${game.title} の動画`, true)}
            </div>
        </section>
    `;
};

const createChapterSection = (game) => {
    if (!Array.isArray(game.chapters) || !game.chapters.length) {
        return "";
    }

    return `
        <section id="game-chapters" class="content-section chapter-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">6 Chapters</p>
                    <h2>白を追う、6つの帰り道</h2>
                    <p class="section-description">道路の白線から家の明かりまで、話ごとにルールと風景が少しずつ変わります。</p>
                </div>
            </div>
            <div class="chapter-grid">
                ${game.chapters.map((chapter) => `
                    <article class="chapter-card">
                        <div class="chapter-topline">
                            <span class="chapter-number">${escapeHtml(chapter.number)}</span>
                            <span class="chapter-location">${escapeHtml(chapter.location)}</span>
                        </div>
                        <h3>${escapeHtml(chapter.title)}</h3>
                        <p>${escapeHtml(chapter.description)}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
};

const createCharacterSection = (game) => {
    if (!game.character) {
        return "";
    }

    const character = game.character;

    return `
        <section id="game-character" class="content-section character-section">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">Character</p>
                    <h2>主人公・${escapeHtml(character.name)}</h2>
                    <p class="section-description">${escapeHtml(character.reading)}｜${escapeHtml(character.role)}</p>
                </div>
            </div>
            <div class="character-layout">
                <figure class="character-art">
                    <img src="${character.image}" alt="${escapeHtml(character.alt)}" loading="lazy">
                    <figcaption>${escapeHtml(character.name)} キャラクター設定画</figcaption>
                </figure>
                <article class="character-profile">
                    <p>${escapeHtml(character.description)}</p>
                    <p>${escapeHtml(character.visual)}</p>
                </article>
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

const createVideoEmbedMarkup = (item, title, useVideoFrameClass = false) => {
    const frameClass = useVideoFrameClass ? "video-frame" : "media-video-frame";

    if (item.platform === "x") {
        return `
            <blockquote class="twitter-tweet" data-media-max-width="100%">
                <a class="${frameClass}" href="${escapeHtml(item.postUrl)}">${escapeHtml(title)}</a>
            </blockquote>
        `;
    }

    if (item.platform === "file") {
        return `
            <video
                class="${frameClass}"
                src="${item.videoUrl}"
                title="${escapeHtml(title)}"
                controls
                playsinline
                preload="metadata"
                muted>
            </video>
        `;
    }

    return `
        <iframe
            class="${frameClass}"
            src="${item.embedUrl}"
            title="${escapeHtml(title)}"
            width="1280"
            height="720"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    `;
};

const getVideoMediaItem = (game) => {
    const source = getVideoSource(game.video?.url);

    if (source.platform === "youtube" && source.id) {
        return {
            type: "video",
            platform: "youtube",
            src: `https://img.youtube.com/vi/${source.id}/hqdefault.jpg`,
            thumbSrc: `https://img.youtube.com/vi/${source.id}/hqdefault.jpg`,
            embedUrl: getYouTubeEmbedUrl(source.url),
            alt: `${game.title} のプレイ動画`,
            caption: game.video?.title || "プレイ動画",
            videoId: source.id
        };
    }

    if (source.platform === "x" && source.id) {
        return {
            type: "video",
            platform: "x",
            postUrl: source.url,
            alt: `${game.title} のXポスト`,
            caption: game.video?.title || "X Post",
            videoId: source.id
        };
    }

    if (source.platform === "file" && source.url) {
        return {
            type: "video",
            platform: "file",
            videoUrl: source.url,
            alt: `${game.title} のプレイ動画`,
            caption: game.video?.title || "プレイ動画",
            videoId: source.id
        };
    }

    return null;
};

const getGameMediaItems = (game) => {
    const items = [...game.media];
    const videoItem = getVideoMediaItem(game);

    if (videoItem) {
        items.push(videoItem);
    }

    return items;
};

const renderGameDetail = () => {
    const root = document.getElementById("game-detail-root");
    const slug = document.body.dataset.gameSlug;

    if (!root || !slug) {
        return;
    }

    if (document.body.dataset.staticGameDetail === "true") {
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
    const availabilityNote = getAvailabilityNote(game);
    const displayStatus = getDisplayStatus(game);
    const statusDetail = game.isComingSoon
        ? displayStatus
        : `${displayStatus}（${game.release}）`;

    root.innerHTML = `
        <section class="game-hero">
            <div class="game-media-panel">
                <div class="media-stage">
                    ${mediaItems.map((item, index) => createMediaMarkup(item, index, index === 0)).join("")}
                    <button class="media-nav prev" type="button" data-media-action="prev" aria-label="前の画像"></button>
                    <button class="media-nav next" type="button" data-media-action="next" aria-label="次の画像"></button>
                </div>
            </div>
            <aside class="game-summary-panel">
                <p class="eyebrow">${escapeHtml(game.genre)}</p>
                <h1>${Array.isArray(game.titleLines) && game.titleLines.length
                    ? game.titleLines.map((line) => `<span class="game-title-line">${escapeHtml(line)}</span>`).join("")
                    : escapeHtml(game.title)}</h1>
                <p class="game-summary-tagline">${escapeHtml(game.tagline)}</p>
                <div class="pill-row game-summary-pills" aria-label="開発環境と公開先">
                    <span class="pill">${escapeHtml(game.engine || "Engine未設定")}</span>
                    ${createPlatformBadges(game.platforms || [])}
                </div>
                <div class="hero-actions">
                    <a class="button button-primary" href="${getPrimaryPlayUrl(game)}" target="_blank" rel="noopener noreferrer">${escapeHtml(game.playLabel)}</a>
                </div>
                ${availabilityNote ? `<p class="game-availability-note" role="note">${escapeHtml(availabilityNote)}</p>` : ""}
            </aside>
        </section>

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
                    ${Array.isArray(game.facts) && game.facts.length ? `
                        <div class="game-fact-grid" aria-label="作品情報">
                            ${game.facts.map((fact) => `
                                <div class="game-fact">
                                    <span>${escapeHtml(fact.label)}</span>
                                    <strong>${escapeHtml(fact.value)}</strong>
                                </div>
                            `).join("")}
                        </div>
                    ` : ""}
                </article>
                <div class="spec-grid">
                    <div class="spec-card">
                        <span class="spec-label">開発環境</span>
                        <span class="spec-value">${escapeHtml(game.engine || "未設定")}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">公開先</span>
                        <span class="spec-value">${escapeHtml((game.platforms || []).join(" / ") || "未定")}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">公開状況</span>
                        <span class="spec-value">${escapeHtml(statusDetail)}</span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label">企画・開発</span>
                        <span class="spec-value">${escapeHtml(siteMeta.studioName)}</span>
                    </div>
                </div>
            </div>
        </section>

        ${createCharacterSection(game)}

        ${createChapterSection(game)}

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
                        ${game.externalLinks.map((link) => `
                            <a class="external-link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
                                <span>${escapeHtml(link.label)}</span>
                            </a>
                        `).join("")}
                    </div>
                </div>
                ${game.credits.length ? `
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
                ` : ""}
            </div>
        </section>
    `;

    setupMediaGallery(root);
};

let youtubeApiPromise;
let xWidgetsPromise;

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

const loadXWidgets = () => {
    if (xWidgetsPromise) {
        return xWidgetsPromise;
    }

    xWidgetsPromise = new Promise((resolve) => {
        if (window.twttr?.widgets) {
            resolve(window.twttr);
            return;
        }

        const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
        if (existingScript) {
            existingScript.addEventListener("load", () => resolve(window.twttr), { once: true });
            return;
        }

        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.addEventListener("load", () => resolve(window.twttr), { once: true });
        document.head.appendChild(script);
    });

    return xWidgetsPromise;
};

const setupMediaGallery = (root) => {
    const slides = Array.from(root.querySelectorAll("[data-media-slide]"));
    const prevButton = root.querySelector('[data-media-action="prev"]');
    const nextButton = root.querySelector('[data-media-action="next"]');

    if (!slides.length) {
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
                player.pause?.();
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
        player?.mute?.();
        player?.playVideo?.();
        player?.play?.();
    };

    const updateGallery = (nextIndex) => {
        activeIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeIndex);
        });

        handleActiveVideo();
    };

    if (prevButton) {
        prevButton.addEventListener("click", () => updateGallery(activeIndex - 1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => updateGallery(activeIndex + 1));
    }

    const videoSlides = slides.filter((slide) => slide.dataset.mediaType === "video");
    const youtubeSlides = videoSlides.filter((slide) => slide.dataset.mediaPlatform === "youtube");
    const xSlides = videoSlides.filter((slide) => slide.dataset.mediaPlatform === "x");
    const fileSlides = videoSlides.filter((slide) => slide.dataset.mediaPlatform === "file");

    fileSlides.forEach((slide) => {
        const index = Number(slide.dataset.mediaIndex);
        const video = slide.querySelector("video");
        if (!video) {
            return;
        }

        players.set(index, {
            mute: () => {
                video.muted = true;
            },
            play: () => {
                video.play().catch(() => { });
            },
            pause: () => {
                video.pause();
                video.currentTime = 0;
            }
        });

        video.addEventListener("play", () => {
            if (index === activeIndex) {
                clearAutoSlide();
            }
        });

        video.addEventListener("ended", () => {
            if (index === activeIndex) {
                updateGallery(activeIndex + 1);
            }
        });
    });

    const initializeYouTubeSlides = () => {
        if (!youtubeSlides.length) {
            handleActiveVideo();
            return;
        }

        loadYouTubeIframeApi().then((YT) => {
            youtubeSlides.forEach((slide) => {
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
    };

    if (xSlides.length) {
        loadXWidgets().then((twttr) => {
            twttr?.widgets?.load(root);
            initializeYouTubeSlides();
        });
    } else {
        initializeYouTubeSlides();
    }
};

const addGameStructuredData = () => {
    const slug = document.body.dataset.gameSlug;
    const game = games.find((entry) => entry.slug === slug);

    if (!game) {
        return;
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: game.title,
        description: game.description,
        genre: game.genre,
        image: new URL(game.media[0].src, window.location.href).href,
        url: new URL(game.pageUrl, window.location.href).href,
        playMode: "SinglePlayer",
        applicationCategory: "Game",
        operatingSystem: "Web",
        author: {
            "@type": "Organization",
            name: siteMeta.studioName,
            founder: {
                "@type": "Person",
                name: siteMeta.creatorName
            }
        },
        sameAs: game.externalLinks.map((link) => link.url)
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
};

document.addEventListener("DOMContentLoaded", () => {
    addGameStructuredData();
    renderStudioStats();
    renderHomePage();
    renderGameDetail();
});
