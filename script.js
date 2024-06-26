const projectGrid = document.getElementById("projects-grid");

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
];

// Functionality to display the different projects
const renderProjects = (array) => {
  const projectGridDisplay = array
    .map((project) => {
      return `
    <a id="${project.id}" href="${project.href}" target="_blank" class="project project-tile">
    <img src="${project.src}" alt="project image" class="project-image"/>
    <p class="project-title">
    <span class ="code">&lt;</span>${project.projectTitle} <span class ="code">&#47;&gt;</span>
    </p>
    </a>
    `;
    })
    .join("");

  projectGrid.innerHTML = projectGridDisplay;
};

renderProjects(allProjects);
