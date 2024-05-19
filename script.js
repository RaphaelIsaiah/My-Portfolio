const projectGrid = document.getElementById("projects-grid");

// Array to store projects list.
const allProjects = [
  {
    id: 0,
    projectTitle: "Survey Form",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form",
    src: "https://www.imghost.net/ib/YG72unREZ9Y81fv_1708409196.png",
  },
  {
    id: 1,
    projectTitle: "Tribute Page",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page",
    src: "https://www.imghost.net/ib/sg0E91jRDAQ1Yq6_1708409496.png",
  },
  {
    id: 2,
    projectTitle: "Technical documentation Page",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page",
    src: "https://www.imghost.net/ib/JiNiejeQJB0viC5_1708410155.png",
  },
  {
    id: 3,
    projectTitle: "Product Landing Page",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page",
    src: "https://www.imghost.net/ib/yjRb19MQYLKBLG3_1708410754.png",
  },
  {
    id: 4,
    projectTitle: "City Skyline",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-118",
    src: "https://www.imghost.net/ib/VUQZFGBNKTNbxKJ_1708411090.png",
  },
  {
    id: 5,
    projectTitle: "FCC Magazine",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page",
    src: "https://www.imghost.net/ib/0Vppl6xqQtfbnZE_1708411406.png",
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
