const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((navLink, index) => {
  navLink.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctaTexth1 = document.querySelector(".cta-text h1");

ctaTexth1.textContent = siteContent.cta.h1;

const ctaTextbutton = document.querySelector(".cta-text button");

ctaTextbutton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById("cta-img");

ctaImage.setAttribute("src", siteContent.cta["img-src"]);

const topContentDivs = document.querySelectorAll(".top-content .text-content");

const featuresDiv = topContentDivs[0];

const featuresDivh4 = featuresDiv.querySelector("h4");

featuresDivh4.textContent = siteContent["main-content"]["features-h4"];

const featuresDivParagraph = featuresDiv.querySelector("p");

featuresDivParagraph.textContent =
  siteContent["main-content"]["features-content"];

const aboutDiv = topContentDivs[1];

const aboutDivh4 = aboutDiv.querySelector("h4");

aboutDivh4.textContent = siteContent["main-content"]["about-h4"];

const aboutDivParagraph = aboutDiv.querySelector("p");

aboutDivParagraph.textContent = siteContent["main-content"]["about-content"];

const middleImage = document.getElementById("middle-img");

middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContentDivs = document.querySelectorAll(
  ".bottom-content .text-content"
);

const servicesDiv = bottomContentDivs[0];

const servicesDivh4 = servicesDiv.querySelector("h4");

servicesDivh4.textContent = siteContent["main-content"]["services-h4"];

const servicesDivParagraph = servicesDiv.querySelector("p");

servicesDivParagraph.textContent =
  siteContent["main-content"]["services-content"];

const productDiv = bottomContentDivs[1];

const productDivh4 = productDiv.querySelector("h4");

productDivh4.textContent = siteContent["main-content"]["product-h4"];

const productDivParagraph = productDiv.querySelector("p");

productDivParagraph.textContent =
  siteContent["main-content"]["product-content"];

const visionDiv = bottomContentDivs[2];

const visionDivh4 = visionDiv.querySelector("h4");

visionDivh4.textContent = siteContent["main-content"]["vision-h4"];

const visionDivParagraph = visionDiv.querySelector("p");

visionDivParagraph.textContent = siteContent["main-content"]["vision-content"];

const sectionContent = document.querySelector(".contact");

sectionContent.querySelector("h4").textContent =
  siteContent.contact["contact-h4"];

sectionContent.querySelector("p:nth-of-type(1)").textContent =
  siteContent.contact.address;

sectionContent.querySelector("p:nth-of-type(2)").textContent =
  siteContent.contact.phone;

sectionContent.querySelector("p:nth-of-type(3)").textContent =
  siteContent.contact.email;

const footerParagraph = document.querySelector("footer p");

footerParagraph.textContent = siteContent.footer.copyright;

navLinks.forEach(navLink => {
  navLink.style.color = "green";
});

const nav = document.querySelector("nav");

const freebiesLink = document.createElement("a");

freebiesLink.setAttribute("href", "#");
freebiesLink.textContent = "Freebies";

nav.append(freebiesLink);

const teamLink = document.createElement("a");

teamLink.setAttribute("href", "#");
teamLink.textContent = "Team";

nav.prepend(teamLink);
