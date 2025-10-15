const hamButton = document.createElement("button");
hamButton.setAttribute("id", "myButton");
hamButton.setAttribute("aria-label", "menu");

const navbar = document.getElementById("navbar");

navbar.appendChild(hamButton);

const navUL = document.createElement("ul");
navUL.classList.add("menuLinks");
navbar.appendChild(navUL);

const navLinks = [
  { text: "Home", href: "index.html" },
  {text: "About", href: "about.html"},
  { text: "Events", href: "events.html" },
  { text: "Join", href: "join.html" },
  {text: "Support CCII", href: "support.html"},
  {text: "Contact Us", href: "contact.html"},
  {text: "Resources", href: "resources.html"}
];

navLinks.forEach((link) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLI = document.createElement("li");
    navUL.appendChild(navLI);

    const linkEl = document.createElement("a");
    navLI.appendChild(linkEl);
    linkEl.setAttribute("href", `${link.href}`);
    linkEl.setAttribute("title", `${link.text}`);
    linkEl.textContent = `${link.text}`;
    navLI.appendChild(linkEl);

    if (link.href === page){
        linkEl.classList.add("active");
    }
});

hamButton.addEventListener("click", () => {
    navUL.classList.toggle("open");
    hamButton.classList.toggle("open");
});