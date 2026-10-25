
document.addEventListener("DOMContentLoaded", () => {
  // 1. Get HTML elements
  const technologyGrid = document.getElementById("technologyGrid");
  const platformSection = document.getElementById("platformSection");
  const platformGrid = document.getElementById("platformGrid");
  const selectedTitle = document.getElementById("selectedTitle");
  const backButton = document.getElementById("backButton");

  // 2. Check if all required elements exist
  if (
    !technologyGrid ||
    !platformSection ||
    !platformGrid ||
    !selectedTitle ||
    !backButton
  ) {
    console.error("Practice page elements are missing. Check practice.html IDs.");
    return;
  }

  // 3. Technology details
  // These names must match the data-tech values in practice.html.
  const technologies = [
    "Python",
    "C",
    "C++",
    "Java",
    "R",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Data Analysis",
    "Data Science",
    "Business Analyst",
    "AI",
    "ML",
    "DL",
    "Gen AI",
    "AWS",
    "Azure"
  ];

  // 4. Handle technology card clicks
  technologyGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".tech-card");

    if (!card || !technologyGrid.contains(card)) {
      return;
    }

    const technologyName = card.dataset.tech;

    if (!technologies.includes(technologyName)) {
      console.error("Unknown technology:", technologyName);
      return;
    }

    openTechnology(technologyName);
  });

  // 5. Display practice platforms
  function openTechnology(technologyName) {
    // Check whether the platform data loaded
    const platforms = window.practicePlatforms?.[technologyName];

    if (!platforms || platforms.length === 0) {
      console.error("No practice platforms found for:", technologyName);
      selectedTitle.textContent = `${technologyName} Practice`;
      platformGrid.replaceChildren();

      const message = document.createElement("p");
      message.textContent =
        "Practice platforms are not available yet. Please try again later.";

      platformGrid.appendChild(message);
    } else {
      selectedTitle.textContent = `${technologyName} Practice`;
      platformGrid.replaceChildren();

      platforms.forEach((platform) => {
        const link = document.createElement("a");

        link.className = "platform-card";
        link.href = platform.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const category = document.createElement("span");
        category.textContent = platform.type;

        const name = document.createElement("h3");
        name.textContent = platform.name;

        const description = document.createElement("p");
        description.textContent =
          "Click to open this platform in a new tab.";

        link.append(category, name, description);
        platformGrid.appendChild(link);
      });
    }

    // Save selected technology
    localStorage.setItem("selectedTechnology", technologyName);

    // Hide technology cards and show platform section
    technologyGrid.hidden = true;
    platformSection.hidden = false;

    // Scroll to the platform section
    platformSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // 6. Back button: return to all technologies
  backButton.addEventListener("click", () => {
    platformSection.hidden = true;
    technologyGrid.hidden = false;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 7. Open a technology from the URL if requested
  const params = new URLSearchParams(window.location.search);
  const selectedTechnology = params.get("technology");

  if (
    selectedTechnology &&
    technologies.includes(selectedTechnology)
  ) {
    openTechnology(selectedTechnology);
  }

  console.log("SkillBridge Practice Zone loaded successfully.");
});
