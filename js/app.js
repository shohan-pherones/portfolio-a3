// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

// Application architechture
class App {
  constructor() {
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
  }

  // Sticky navbar
  _stickyNavbar() {
    const navHeight = nav.getBoundingClientRect().height;

    const navObs = new IntersectionObserver(this._stickOperation, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navObs.observe(header);
  }

  _stickOperation(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }

  // Link activate
  _activeLinks() {
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");

        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      })
    );
  }

  // Toggle mobile navbar
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }

  // Tag cloud
  _tagCloud() {
    const myTags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Git",
      "GitHub",
      "Netlify",
      "AJAX",
      "THREE.js",
      "GSAP",
      "Parcel",
      "Webpack",
      "React",
      "Angular",
      "Vue",
      "Svelt",
      "Redux",
      "Next",
      "Nuxt",
      "Gatsby",
      "Node",
      "GS8",
      "Marcas",
      "Mellow",
      "FiraQ",
      "HypeS",
      "Corsel",
      "Keptalor",
    ];

    TagCloud(".content", myTags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }
}

const myApp = new App();
