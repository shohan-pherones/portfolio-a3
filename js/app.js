// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

// Projects
const projects = [
  {
    title: "Spectra Bank - An online bank application",
    description:
      "Spectra Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Spectra Bank!",
    image: "https://pbs.twimg.com/media/FeSw4W6VIAEDuOg?format=jpg&name=large",
    tools: "html, css, js, parcel",
    liveLink: "https://spectra-bank.netlify.app",
    githubLink: "https://github.com/shohan-pherones/spectra-bank",
  },
  {
    title: "Tera Guard - An anti-virus website",
    description:
      "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
    image: "https://pbs.twimg.com/media/FeSw8ekVEAEK797?format=jpg&name=large",
    tools: "html, css, js, parcel",
    liveLink: "https://tera-guard.netlify.app",
    githubLink: "https://github.com/shohan-pherones/tera-guard",
  },
  {
    title: "Map - Pro: A workout mapping application",
    description:
      "Fitness and health have never been more accessible. Map - Pro offers an interactive workout mapping app for athletes and fitness enthusiasts who love tracking their workouts and seeing the change in their fitness. Map - Pro is an easy-to-use fitness app that provides safe and effective workouts in the form of mapped routes from different levels of intensity, suitable for all levels of fitness. Take a post-workout walk or jog with your colleagues, go on a bike ride with the family on weekends or even try taking the stairs to work!",
    image: "https://pbs.twimg.com/media/FeSw_tdVsAA4JxI?format=jpg&name=large",
    tools: "html, css, js, leaflet.js, parcel",
    liveLink: "https://map-pro-shohan.netlify.app",
    githubLink: "https://github.com/shohan-pherones/map-pro",
  },
];

// Application architechture
class App {
  constructor() {
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._renderProjects();
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

  _tagCloud() {
    const tags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "JavaScript",
      "AJAX",
      "THREE.js",
      "GSAP",
      "GIS",
      "React.js",
      "Vue.js",
      "React Router",
      "Redux",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
    ];

    TagCloud(".content", tags, {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }

  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });

    typeWriter
      .typeString("Web developer")
      .pauseFor(2000)
      .deleteChars(7)
      .typeString("signer")
      .pauseFor(2000)
      .start();
  }

  // Projects rendering
  _renderProjects() {
    projects.forEach((project) => {
      const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a
            >
          </div>
        </div>
    `;

      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}

const myApp = new App();
