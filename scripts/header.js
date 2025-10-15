// LOGO
const header = document.getElementById("header");
const logoImg = document.createElement("img");

logoImg.setAttribute("class", "logo");
logoImg.setAttribute("src", "images/ccii-logo-long.webp");
logoImg.setAttribute("alt", "CCII logo");
logoImg.setAttribute("height", "50 px");

header.appendChild(logoImg);

// SOCIAL MEDIA ICONS
const socials = document.getElementById("socials");
const socialUL = document.createElement("ul");

socials.appendChild(socialUL);

const iconArray = [
  {
    href: "https://www.facebook.com/p/Capital-City-Illinois-Indivisible-61574735680682/",
    src: "images/facebook.svg",
    alt: "Facebook icon",
  },
  {
    href: "https://bsky.app/profile/ccilindivisible.bsky.social",
    src: "images/bluesky.svg",
    alt: "Bluesky icon",
  },
  {
    href: "https://www.instagram.com/ccilindivisible/",
    src: "images/instagram.svg",
    alt: "Instagram icon",
  },
];
// target="_blank" rel="noopener noreferrer"
iconArray.forEach((icon) => {

    const socialLink = document.createElement("a");
    const socialSVG = document.createElement("img");
    const socialLI = document.createElement("li");

     socialLink.appendChild(socialSVG);

    socialLink.setAttribute("href", `${icon.href}`);
    socialSVG.setAttribute("src", `${icon.src}`);
    socialSVG.setAttribute("alt", `${icon.alt}`);
    socialLink.setAttribute("target", "_blank");
    socialLink.setAttribute("rel", "noopener noreferrer");

    socialLI.appendChild(socialLink);
    socialUL.appendChild(socialLI);
});




