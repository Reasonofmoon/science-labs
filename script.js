const experiments = {
    ancient: [
        {
            title: "Archimedes' Principle",
            description: "Explore buoyancy and fluid displacement with the famous Greek mathematician.",
            image: "images/archimedes-principle.jpg",
            link: "https://interactive-science-travel.edu/experiments/archimedes-principle"
        },
        {
            title: "Measuring Earth's Circumference",
            description: "Recreate Eratosthenes' ingenious method for calculating the size of our planet.",
            image: "images/eratosthenes-earth.jpg",
            link: "https://interactive-science-travel.edu/experiments/eratosthenes-earth"
        }
    ],
    renaissance: [
        {
            title: "Galileo's Motion Studies",
            description: "Investigate the laws of motion using inclined planes and pendulums.",
            image: "images/galileo-motion.jpg",
            link: "https://interactive-science-travel.edu/experiments/galileo-motion"
        },
        {
            title: "Newton's Prism Experiment",
            description: "Discover the nature of light and color through prismatic dispersion.",
            image: "images/newton-prism.jpg",
            link: "https://interactive-science-travel.edu/experiments/newton-prism"
        }
    ],
    industrial: [
        {
            title: "Faraday's Electromagnetic Discoveries",
            description: "Explore the relationship between electricity and magnetism.",
            image: "images/faraday-electricity.jpg",
            link: "https://interactive-science-travel.edu/experiments/faraday-electromagnetism"
        },
        {
            title: "Building the Periodic Table",
            description: "Arrange elements and discover periodic trends with Mendeleev.",
            image: "images/mendeleev-periodic.jpg",
            link: "https://interactive-science-travel.edu/experiments/mendeleev-periodic-table"
        }
    ],
    modern: [
        {
            title: "Einstein's Relativity",
            description: "Visualize time dilation and space contraction in special relativity.",
            image: "images/einstein-relativity.jpg",
            link: "https://interactive-science-travel.edu/experiments/einstein-relativity"
        },
        {
            title: "Unraveling DNA's Structure",
            description: "Work alongside Watson, Crick, and Franklin to decode the blueprint of life.",
            image: "images/dna-structure.jpg",
            link: "https://interactive-science-travel.edu/experiments/dna-structure"
        }
    ],
    future: [
        {
            title: "Quantum Computing Basics",
            description: "Explore the principles of superposition and entanglement in quantum systems.",
            image: "images/quantum-computing.jpg",
            link: "https://interactive-science-travel.edu/experiments/quantum-computing"
        },
        {
            title: "Nanotech Assembly Simulation",
            description: "Manipulate atoms to create microscopic machines and structures.",
            image: "images/nanotech-assembly.jpg",
            link: "https://interactive-science-travel.edu/experiments/nanotech-assembly"
        },
        {
            title: "Futuristic Spaceship Engineering",
            description: "Design and test advanced propulsion systems and life support for interstellar travel.",
            image: "images/spaceship-engineering.jpg",
            link: "https://interactive-science-travel.edu/experiments/spaceship-engineering"
        }
    ]
};

function createExperimentCard(experiment) {
    return `
        <div class="experiment-card">
            <img src="${experiment.image}" alt="${experiment.title}" class="experiment-image">
            <div class="experiment-content">
                <h3 class="experiment-title">${experiment.title}</h3>
                <p>${experiment.description}</p>
                <a href="${experiment.link}" class="cta-button">Start Experiment</a>
            </div>
        </div>
    `;
}

function populateExperiments() {
    for (const [era, experimentList] of Object.entries(experiments)) {
        const grid = document.querySelector(`#${era} .experiment-grid`);
        grid.innerHTML = experimentList.map(createExperimentCard).join('');
    }
}

document.addEventListener('DOMContentLoaded', populateExperiments);

// Smooth scrolling for navigation links
document.querySelectorAll('.era-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});