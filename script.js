const experiments = {
    ancient: [
        {
            title: "Archimedes' Principle",
            description: "Explore buoyancy and fluid displacement with the famous Greek mathematician.",
            image: "images/archimedes-principle.jpg",
            link: "experiments/archimedes-principle.html"
        },
        {
            title: "Measuring Earth's Circumference",
            description: "Recreate Eratosthenes' ingenious method for calculating the size of our planet.",
            image: "images/eratosthenes-earth.jpg",
            link: "experiments/eratosthenes-earth.html"
        }
    ],
    renaissance: [
        {
            title: "Galileo's Motion Studies",
            description: "Investigate the laws of motion using inclined planes and pendulums.",
            image: "images/galileo-motion.jpg",
            link: "experiments/galileo-motion.html"
        },
        {
            title: "Newton's Prism Experiment",
            description: "Discover the nature of light and color through prismatic dispersion.",
            image: "images/newton-prism.jpg",
            link: "experiments/newton-prism.html"
        }
    ],
    industrial: [
        {
            title: "Faraday's Electromagnetic Discoveries",
            description: "Explore the relationship between electricity and magnetism.",
            image: "images/faraday-electricity.jpg",
            link: "experiments/faraday-electromagnetism.html"
        },
        {
            title: "Building the Periodic Table",
            description: "Arrange elements and discover periodic trends with Mendeleev.",
            image: "images/mendeleev-periodic.jpg",
            link: "experiments/mendeleev-periodic-table.html"
        }
    ],
    modern: [
        {
            title: "Einstein's Relativity",
            description: "Visualize time dilation and space contraction in special relativity.",
            image: "images/einstein-relativity.jpg",
            link: "experiments/einstein-relativity.html"
        },
        {
            title: "Unraveling DNA's Structure",
            description: "Work alongside Watson, Crick, and Franklin to decode the blueprint of life.",
            image: "images/dna-structure.jpg",
            link: "experiments/dna-structure.html"
        }
    ],
    future: [
        {
            title: "Quantum Computing Basics",
            description: "Explore the principles of superposition and entanglement in quantum systems.",
            image: "images/quantum-computing.jpg",
            link: "experiments/quantum-computing.html"
        },
        {
            title: "Nanotech Assembly Simulation",
            description: "Manipulate atoms to create microscopic machines and structures.",
            image: "images/nanotech-assembly.jpg",
            link: "experiments/nanotech-assembly.html"
        },
        {
            title: "Futuristic Spaceship Engineering",
            description: "Design and test advanced propulsion systems and life support for interstellar travel.",
            image: "images/spaceship-engineering.jpg",
            link: "experiments/spaceship-engineering.html"
        }
    ]
};

// 나머지 코드는 그대로 유지
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