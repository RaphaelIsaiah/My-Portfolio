// HTML DOM Element selection
const projectGrid = document.getElementById("projects-grid");
const projectToggle = document.getElementById("project_toggle");

// Array to store projects list.
const allProjects = [
  // {
  //   id: 0,
  //   projectTitle: "Survey Form",
  //   href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form",
  //   src: "https://i.postimg.cc/0NR60Xfk/Survey-Form.png",
  // },
  // {
  //   id: 1,
  //   projectTitle: "Tribute Page",
  //   href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page",
  //   src: "https://i.postimg.cc/kXHRBgRt/Tribute-Page.png",
  // },
  {
    id: 1,
    projectTitle: "Technical documentation Page",
    href: "https://raphaelisaiah.github.io/Technical-Documentation-Page/",
    src: "https://i.postimg.cc/1tmpv28T/image.png",
  },
  {
    id: 2,
    projectTitle: "Product Landing Page",
    href: "https://raphaelisaiah.github.io/Product-Landing-Page/",
    src: "https://i.postimg.cc/rF7WfYzd/Product-Landing-Page.png",
  },
  {
    id: 3,
    projectTitle: "City Skyline",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-118",
    src: "https://i.postimg.cc/VLvbfCv8/City-Skyline.png",
  },
  {
    id: 4,
    projectTitle: "FCC Magazine",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-grid-by-building-a-magazine/step-80",
    src: "https://i.postimg.cc/x1bJHVLp/FCC-Magazine.png",
  },
  {
    id: 5,
    projectTitle: "Role Playing Game",
    href: "https://raphaelisaiah.github.io/Role-Playing-Game/",
    src: "https://i.postimg.cc/LXZ4TN2f/image.png",
  },
  {
    id: 6,
    projectTitle: "Calorie Counter",
    href: "https://raphaelisaiah.github.io/Role-Playing-Game/",
    src: "https://i.postimg.cc/g2BWgsNq/image.png",
  },
  {
    id: 7,
    projectTitle: "Music Player",
    href: "https://raphaelisaiah.github.io/Music-Player/",
    src: "https://i.postimg.cc/v8KHz8g1/image.png",
  },
  {
    id: 8,
    projectTitle: "Rock, Paper, Scissors Game",
    href: "https://raphaelisaiah.github.io/Rock_Paper_Scissors-Game/",
    src: "https://i.postimg.cc/GhLfTz5Q/image.png",
  },
  {
    id: 9,
    projectTitle: "Palindrome Checker",
    href: "https://raphaelisaiah.github.io/Palindrome-Checker/",
    src: "https://i.postimg.cc/t45Ctrq4/image.png",
  },
  {
    id: 10,
    projectTitle: "Todo App",
    href: "https://raphaelisaiah.github.io/TODO-APP/",
    src: "https://i.postimg.cc/qRk3XVkR/image.png",
  },
  {
    id: 11,
    projectTitle: "Binary to Decimal Converter",
    href: "https://raphaelisaiah.github.io/Decimal-to-Binary-Converter/",
    src: "https://i.postimg.cc/Twg2yJNf/image.png",
  },
  {
    id: 12,
    projectTitle: "Roman Numeral Converter",
    href: "https://raphaelisaiah.github.io/Roman-Numeral-Converter/",
    src: "https://i.postimg.cc/0N824bVb/Roman-Numeral-Converter.png",
  },
  {
    id: 13,
    projectTitle: "Two and Five Inventory Manager",
    href: "https://two-and-five-inventory-manager.onrender.com/",
    src: "https://i.postimg.cc/mD0ZK0Dt/Two-and-Five-Inventory-Manager.png",
  },
  {
    id: 14,
    projectTitle: "Phone Number Validator",
    href: "https://raphaelisaiah.github.io/Phone-Number-Validator/",
    src: "https://i.postimg.cc/Kzrk2jGx/Phone-Number-Validator.png",
  },
  {
    id: 15,
    projectTitle: "Advanced Dice Game",
    href: "https://raphaelisaiah.github.io/Advanced-Dice-Game/",
    src: "https://i.postimg.cc/C15yKmyn/Advanced-Dice-Game.png",
  },
  {
    id: 16,
    projectTitle: "Cash Register App",
    href: "https://raphaelisaiah.github.io/Cash-Register-App/",
    src: "https://i.postimg.cc/KYFMLNnk/Cash-Register-App.png",
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
    // if (a.id < b.id) {
    //   return 1; // Swap positions if a's ID is less than b's ID
    // }

    // if (a.id > b.id) {
    //   return -1; // Swap positions if a's ID is greater than b's ID
    // }

    // return 0; // Keep the order unchanged if IDs are equal
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
