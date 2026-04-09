document.addEventListener("DOMContentLoaded", async () => {
    const insertFragment = async (path, target, position) => {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`${path} could not be loaded.`);
        }
        const html = await response.text();
        target.insertAdjacentHTML(position, html);
    };

    try {
        await insertFragment("header.html", document.body, "afterbegin");
        await insertFragment("footer.html", document.body, "beforeend");

        const activePage = document.body.dataset.page;
        const activeSlug = document.body.dataset.gameSlug;
        const activeNav = activePage === "game" ? activeSlug : activePage;
        const activeLink = document.querySelector(`[data-nav="${activeNav}"]`);
        if (activeLink) {
            activeLink.classList.add("is-active");
        }
    } catch (error) {
        console.error(error);
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
