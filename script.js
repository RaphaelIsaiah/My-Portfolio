// HTML DOM Element selection
const projectGrid = document.getElementById("projects-grid");
const projectToggle = document.getElementById("project_toggle");

// Array to store projects list.
const allProjects = [
  {
    id: 0,
    projectTitle: "Technical documentation Page",
    href: "https://raphaelisaiah.github.io/Technical-Documentation-Page/",
    src: "https://i.postimg.cc/1tmpv28T/image.png",
  },
  {
    id: 1,
    projectTitle: "Product Landing Page",
    href: "https://raphaelisaiah.github.io/Product-Landing-Page/",
    src: "https://i.postimg.cc/rF7WfYzd/Product-Landing-Page.png",
  },
  {
    id: 2,
    projectTitle: "Role Playing Game",
    href: "https://raphaelisaiah.github.io/Role-Playing-Game/",
    src: "https://i.postimg.cc/LXZ4TN2f/image.png",
  },
  {
    id: 3,
    projectTitle: "Calorie Counter",
    href: "https://raphaelisaiah.github.io/Calorie-Counter/",
    src: "https://i.postimg.cc/g2BWgsNq/image.png",
  },
  {
    id: 4,
    projectTitle: "Music Player",
    href: "https://raphaelisaiah.github.io/Music-Player/",
    src: "https://i.postimg.cc/v8KHz8g1/image.png",
  },
  {
    id: 5,
    projectTitle: "Rock, Paper, Scissors Game",
    href: "https://raphaelisaiah.github.io/Rock_Paper_Scissors-Game/",
    src: "https://i.postimg.cc/GhLfTz5Q/image.png",
  },
  {
    id: 6,
    projectTitle: "Palindrome Checker",
    href: "https://raphaelisaiah.github.io/Palindrome-Checker/",
    src: "https://i.postimg.cc/t45Ctrq4/image.png",
  },
  {
    id: 7,
    projectTitle: "Todo App",
    href: "https://raphaelisaiah.github.io/TODO-APP/",
    src: "https://i.postimg.cc/qRk3XVkR/image.png",
  },
  {
    id: 8,
    projectTitle: "Binary to Decimal Converter",
    href: "https://raphaelisaiah.github.io/Decimal-to-Binary-Converter/",
    src: "https://i.postimg.cc/Twg2yJNf/image.png",
  },
  {
    id: 9,
    projectTitle: "Roman Numeral Converter",
    href: "https://raphaelisaiah.github.io/Roman-Numeral-Converter/",
    src: "https://i.postimg.cc/0N824bVb/Roman-Numeral-Converter.png",
  },
  {
    id: 10,
    projectTitle: "Two and Five Inventory Manager",
    href: "https://two-and-five-inventory-manager.onrender.com/",
    src: "https://i.postimg.cc/mD0ZK0Dt/Two-and-Five-Inventory-Manager.png",
  },
  {
    id: 11,
    projectTitle: "Phone Number Validator",
    href: "https://raphaelisaiah.github.io/Phone-Number-Validator/",
    src: "https://i.postimg.cc/Kzrk2jGx/Phone-Number-Validator.png",
  },
  {
    id: 12,
    projectTitle: "Advanced Dice Game",
    href: "https://raphaelisaiah.github.io/Advanced-Dice-Game/",
    src: "https://i.postimg.cc/C15yKmyn/Advanced-Dice-Game.png",
  },
  {
    id: 13,
    projectTitle: "Cash Register App",
    href: "https://raphaelisaiah.github.io/Cash-Register-App/",
    src: "https://i.postimg.cc/KYFMLNnk/Cash-Register-App.png",
  },
  {
    id: 14,
    projectTitle: "FCC News Author Page",
    href: "https://raphaelisaiah.github.io/FCC-Authors-Page/",
    src: "https://i.postimg.cc/0Q5FH8PJ/FCC-News-Author-Page.png",
  },
  {
    id: 15,
    projectTitle: "FCC Forum Leaderboard",
    href: "https://raphaelisaiah.github.io/FCC-Forum-Leaderboard/",
    src: "https://i.postimg.cc/brrY8nX0/FCC-Forum-Leaderboard.png",
  },
  {
    id: 16,
    projectTitle: "Pokémon Search App",
    href: "https://raphaelisaiah.github.io/Pokemon-Search-App/",
    src: "https://i.postimg.cc/d31svkD7/Pok-mon-Search-App.png",
  },
  {
    id: 17,
    projectTitle: "Random Quote Machine",
    href: "https://random-quote-machine-nu-two.vercel.app/",
    src: "https://i.postimg.cc/7PRW4C66/Random-Quote-Machine.png",
  },
  {
    id: 18,
    projectTitle: "Markdown Previewer",
    href: "https://markdown-previewer-seven-chi.vercel.app/",
    src: "https://i.postimg.cc/gcZx1S10/Markdown-Previewer.png",
  },
  {
    id: 19,
    projectTitle: "Drum Machine",
    href: "https://drum-machine-one-chi.vercel.app/",
    src: "https://i.postimg.cc/WzY1tT4K/Drum-Machine.png",
  },
  {
    id: 20,
    projectTitle: "JavaScript Calculator",
    href: "https://java-script-calculator-theta.vercel.app/",
    src: "https://i.postimg.cc/T2DFhkj9/Java-Script-Calculator.png",
  },
  {
    id: 21,
    projectTitle: "Pomodoro Clock",
    href: "https://pomodoro-clock-neon.vercel.app/",
    src: "https://i.postimg.cc/T3FK0yZL/Pomodoro-Clock.png",
  },
  {
    id: 22,
    projectTitle: "Bar Chart Visualization",
    href: "https://raphaelisaiah.github.io/Bar-Chart-Visualization/",
    src: "https://i.postimg.cc/j2VmjPtF/Bar-Chart-Visualization.png",
  },
  {
    id: 23,
    projectTitle: "Scatter Plot Visualization",
    href: "https://raphaelisaiah.github.io/Scatter-Plot-Visualization/",
    src: "https://i.postimg.cc/X70nz16z/Scatter-Plot-Visualization.png",
  },
  {
    id: 24,
    projectTitle: "Heat Map Visualization",
    href: "https://raphaelisaiah.github.io/Heat-Map-Visualization/",
    src: "https://i.postimg.cc/c4TcCY5T/Heat-Map-Visualization.png",
  },
  {
    id: 25,
    projectTitle: "Choropleth Map Visualization",
    href: "https://raphaelisaiah.github.io/Choropleth-Map-Visualization/",
    src: "https://i.postimg.cc/k5PxDKRp/Choropleth-Map-Visualization.png",
  },
  {
    id: 26,
    projectTitle: "Treemap Diagram Visualization",
    href: "https://raphaelisaiah.github.io/Treemap-Diagram-Visualization/",
    src: "https://i.postimg.cc/Cx24LrkH/Treemap-Diagram-Visualization.png",
  },
  {
    id: 27,
    projectTitle: "Timestamp Microservice",
    href: "https://boilerplate-project-timestamp-one-teal.vercel.app/",
    src: "https://i.postimg.cc/FFx63ch4/Timestamp-Microservice.png",
  },
  {
    id: 28,
    projectTitle: "Request Header Parser Microservice",
    href: "https://boilerplate-project-headerparser-six.vercel.app/",
    src: "https://i.postimg.cc/hjdS1cNX/Request-Header-Parser.png",
  },
  {
    id: 29,
    projectTitle: "URL Shortener Microservice",
    href: "https://boilerplate-project-urlshortener-omega.vercel.app/",
    src: "https://i.postimg.cc/pLwm91Rt/URL-Shortener-Microservice.png",
  },
];

// ------ Functionality to display the different projects -------

// Function to generate project HTML Markup
const generateProjectMarkup = (currentProject) => `
  <a id="${currentProject.id}" href="${currentProject.href}" target="_blank" class="project project-tile">
    <img src="${currentProject.src}" alt="project image" class="project-image"/>
    <p class="project-title">
      <span class="code">&lt;</span>${currentProject.projectTitle} <span class="code">&#47;&gt;</span>
    </p>
  </a>
`;

// Function to display only six of the projects
const renderSixProjects = (projectsArray) => {
  const projectMarkup = projectsArray
    .slice(0, 6) // Renders the first 6 projects.
    .map(generateProjectMarkup)
    .join("");

  projectGrid.innerHTML = projectMarkup;
};

// Function to sort projects in descending order.
const sortProjects = (projectsArray) => {
  let sortedProjects = projectsArray.slice(); // Creates a copy of the original array
  sortedProjects.sort((a, b) => {
    return b.id - a.id; // sorts the projects in descending order
  });

  return sortedProjects;
};

// Function to render all projects
const renderAllProjects = (projectsArray) => {
  const isLess = projectToggle.innerText.includes("Less");
  if (!isLess) {
    const projectMarkup = projectsArray.map(generateProjectMarkup).join("");
    projectGrid.innerHTML = projectMarkup;
  } else {
    renderSixProjects(sortProjects(allProjects));
  }

  // updates the innerHTML of the project toggle button
  projectToggle.innerHTML = isLess
    ? `More <i class="fa-solid fa-angles-right"></i>`
    : `Less <i class="fa-solid fa-angles-right"></i>`;
};

// This calls the function to display when the page loads.
renderSixProjects(sortProjects(allProjects));

projectToggle.addEventListener("click", () => {
  renderAllProjects(sortProjects(allProjects));
});

// Add footer dynamic copyright year
document.querySelector(".copy").innerText = new Date().getFullYear();
