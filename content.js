
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("technology-search");
    const cards = document.querySelectorAll(".technology-card");
    const noResults = document.getElementById("no-results");

    // Search and filter technology cards
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
            const matches = card.textContent.toLowerCase().includes(query);
            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        noResults.hidden = visibleCount !== 0;
    });

    // Open Notes page when a technology is clicked
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const technology = card.dataset.tech;

            // Save the selected technology
            localStorage.setItem("selectedTechnology", technology);

            // Open the Notes page
            window.location.href = "notes.html";
        });
    });
});
