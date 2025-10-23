// LOGO
const logo = document.getElementById("logo");
const logoImg = document.createElement("img");

logoImg.setAttribute("class", "logo");
logoImg.setAttribute("src", "images/ccii-logo-long.webp");
logoImg.setAttribute("alt", "CCII logo");
logoImg.setAttribute("height", "50 px");

logo.appendChild(logoImg);

// SOCIAL MEDIA ICONS
const socials = document.getElementById("socials");
const socialUL = document.createElement("ul");

socials.appendChild(socialUL);

const iconArray = [
  {
    href: "https://www.facebook.com/p/Capital-City-Illinois-Indivisible-61574735680682/",
    src: "images/icons8-facebook-logo-50.svg",
    alt: "Facebook icon",
  },
  {
    href: "https://bsky.app/profile/ccilindivisible.bsky.social",
    src: "images/icons8-bluesky-logo-48.svg",
    alt: "Bluesky icon",
  },
  {
    href: "https://www.instagram.com/ccilindivisible/",
    src: "images/icons8-instagram-50.svg",
    alt: "Instagram icon",
  },
];

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
  socialSVG.className="social-link";

  socialLI.appendChild(socialLink);
  socialUL.appendChild(socialLI);
});

//DONATE BUTTON

const donate = document.getElementById("donate-button");
const donateBtn = document.createElement("button");
donateBtn.className = "donate-btn";
donateBtn.textContent = "Donate";

donate.appendChild(donateBtn);

donateBtn.setAttribute(
  "onclick",
  "window.open('https://secure.actblue.com/donate/indivisiblecc1335522274','_blank');"
);

//SEARCH BAR

const search = document.getElementById("search");

const searchForm = document.createElement("form");
searchForm.className = "search-form";
searchForm.setAttribute("action", "/search");
searchForm.setAttribute("method", "GET");
const input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name", "q");
input.setAttribute("placeholder", "Search...");
input.className="search-bar";

const searchIcon = document.createElement("img");
searchIcon.src = "images/search-icon.svg";
searchIcon.alt = "Search";
searchIcon.className = "search-icon";


search.appendChild(searchForm);
searchForm.appendChild(input);
searchForm.appendChild(searchIcon);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (query) {
    // Redirect to search results page
    globalThis.location.href = `/search.html?q=${encodeURIComponent(query)}`;
  }
});

searchIcon.addEventListener("click", () => {
  searchForm.requestSubmit(); 
});

    const params = new URLSearchParams(globalThis.location.search);
    const query = params.get("q");

    const resultsDiv = document.getElementById("results");

    if (!query) {
      resultsDiv.textContent = "Please enter a search term.";
    } else {
      resultsDiv.textContent = `Search results for: "${query}"`;

      // TODO: Add logic to show real results here
    }


