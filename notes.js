
document.addEventListener("DOMContentLoaded", () => {
    const technology = localStorage.getItem("selectedTechnology");
    const title = document.getElementById("technology-title");
    const notesList = document.getElementById("notes-list");

    const learningLinks = {
        "Python": {
            name: "MIT — Introduction to Computer Science and Programming in Python",
            url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/"
        },
        "C": {
            name: "MIT — Practical Programming in C",
            url: "https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/"
        },
        "C++": {
            name: "MIT — Introduction to C++",
            url: "https://ocw.mit.edu/courses/6-096-introduction-to-c-january-iap-2011/"
        },
        "Java": {
            name: "MIT — Introduction to Programming in Java",
            url: "https://ocw.mit.edu/courses/6-092-introduction-to-programming-in-java-january-iap-2010/"
        },
        "AI": {
            name: "MIT — Artificial Intelligence",
            url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/"
        },
        "Data Science": {
            name: "MIT — Introduction to Computational Thinking and Data Science",
            url: "https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/"
        },
        "R": {
        name: "R for Data Science",
        url: "https://r4ds.hadley.nz/"
    },
    "PHP": {
        name: "Official PHP Manual",
        url: "https://www.php.net/manual/en/"
    },
    "HTML": {
        name: "MDN — HTML and Web Development",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    },
    "CSS": {
        name: "MDN — CSS Tutorials",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    },
    "JavaScript": {
        name: "MDN — JavaScript and Web Development",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    },
    "Data Analysis": {
        name: "Microsoft Learn — Power BI",
        url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
    },
    "Business Analyst": {
        name: "IIBA — Business Analysis Resources",
        url: "https://www.iiba.org/"
    },
    "ML": {
        name: "Google Machine Learning Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course"
    },
    "DL": {
        name: "PyTorch Deep Learning Tutorials",
        url: "https://pytorch.org/tutorials/"
    },
    "Gen AI": {
        name: "Hugging Face Learn — LLMs and AI",
        url: "https://huggingface.co/learn"
    },
    "AWS": {
        name: "AWS Official Training",
        url: "https://aws.amazon.com/training/"
    },
    "Azure": {
        name: "Microsoft Learn — Azure",
        url: "https://learn.microsoft.com/en-us/training/azure/"
    }


    };

    if (!technology) {
        title.textContent = "Select a Technology";
        notesList.textContent = "Please return to Content and select a technology.";
        return;
    }

    title.textContent = `${technology} Learning Notes`;

    const resource = learningLinks[technology];

    if (!resource) {
        const message = document.createElement("p");
        message.textContent =
            `A dedicated MIT course link for ${technology} has not been configured yet.`;

        notesList.appendChild(message);
        return;
    }

    const card = document.createElement("article");
    card.className = "note-item";

    const heading = document.createElement("h3");
    heading.textContent = resource.name;

    const description = document.createElement("p");
    description.textContent =
        "Open the course to explore its available lectures, readings, assignments and other learning materials.";

    const link = document.createElement("a");
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "back-button";
    link.textContent = "Open MIT Learning Materials ↗";

    card.append(heading, description, link);
    notesList.appendChild(card);
});
