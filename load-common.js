document.addEventListener("DOMContentLoaded", async () => {
    const headerFallback = `
        <header class="site-header">
            <div class="page-shell header-inner">
                <a class="site-brand" href="index.html">
                    <span class="site-brand-mark">
                        <img src="Images/Site/namatamago-icon.png" alt="なまたまごの卵ロゴ">
                    </span>
                    <span class="site-brand-copy">
                        <strong>egg 3d Studio</strong>
                        <small>game development studio</small>
                    </span>
                </a>
                <nav class="site-nav" aria-label="グローバルナビゲーション">
                    <a href="index.html" data-nav="home">ホーム</a>
                    <a href="about.html" data-nav="about">プロフィール</a>
                    <a href="about.html#contact">お問い合わせ</a>
                </nav>
            </div>
        </header>
    `;
    const footerFallback = `
        <footer class="site-footer">
            <div class="page-shell footer-inner">
                <div>
                    <p class="footer-title">egg 3d Studio</p>
                    <p class="footer-copy">スマートフォン・PC・Web向けゲームの企画・開発・運営。</p>
                </div>
                <div class="footer-links">
                    <a href="about.html#contact">お問い合わせ</a>
                    <a href="privacy.html">プライバシーポリシー</a>
                    <a href="https://twitter.com/egg_3d" target="_blank" rel="noopener noreferrer">X</a>
                    <a href="https://unityroom.com/users/egg_3d" target="_blank" rel="noopener noreferrer">unityroom</a>
                    <a href="https://www.roblox.com/ja/users/10142301930/profile" target="_blank" rel="noopener noreferrer">Roblox</a>
                    <a href="https://egg-3d.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
                </div>
            </div>
        </footer>
    `;
    const insertFragment = async (path, target, position) => {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`${path} could not be loaded.`);
        }
        const html = await response.text();
        target.insertAdjacentHTML(position, html);
    };

    if (window.location.protocol === "file:") {
        document.body.insertAdjacentHTML("afterbegin", headerFallback);
        document.body.insertAdjacentHTML("beforeend", footerFallback);
    } else {
        try {
            await insertFragment("header.html", document.body, "afterbegin");
            await insertFragment("footer.html", document.body, "beforeend");
        } catch (error) {
            console.error(error);
            if (!document.querySelector(".site-header")) {
                document.body.insertAdjacentHTML("afterbegin", headerFallback);
            }
            if (!document.querySelector(".site-footer")) {
                document.body.insertAdjacentHTML("beforeend", footerFallback);
            }
        }
    }

    const activePage = document.body.dataset.page;
    const activeSlug = document.body.dataset.gameSlug;
    const activeNav = activePage === "game" ? activeSlug : activePage;
    const activeLink = document.querySelector(`[data-nav="${activeNav}"]`);
    if (activeLink) {
        activeLink.classList.add("is-active");
    }

    const gaMeasurementId = "G-C15BSFR0VG";
    if (!window.__eggAnalyticsLoaded) {
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
        `;
        document.head.appendChild(script2);
        window.__eggAnalyticsLoaded = true;
    }
});
