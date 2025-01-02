document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-description", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn-primary", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });


    fetch("data/Recent.json")
    .then((response) => response.json())
    .then((data) => {
        const RecentGrid = document.getElementById("Recent-content");
        data.forEach((item) => {
            const RecentItem = document.createElement("div");
            RecentItem.className = "Recent-item";
            RecentItem.innerHTML = `
                ${item.videoUrl.includes("youtube") 
                    ? `<iframe src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>` 
                    : `<video controls><source src="${item.videoUrl}" type="video/mp4"></video>`}
                <div class="Recent-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>`;
            RecentGrid.appendChild(RecentItem);
        });
    })
    .catch((error) => console.error("Error Recent data:", error));

    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            const portfolioGrid = document.getElementById("portfolio-content");
            data.forEach((item) => {
                const portfolioItem = document.createElement("div");
                portfolioItem.className = "portfolio-item";
                portfolioItem.innerHTML = `
                    ${item.videoUrl.includes("youtube") 
                        ? `<iframe src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>` 
                        : `<video controls><source src="${item.videoUrl}" type="video/mp4"></video>`}
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>`;
                portfolioGrid.appendChild(portfolioItem);
            });
        })
        .catch((error) => console.error("Error loading portfolio data:", error));
});
