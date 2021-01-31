let headerDefaultsH1 = document.querySelector(".cms-header-h1").textContent;
let headerDefaultsP = document.querySelector(".cms-header-p").textContent;
let shopDefaultsP = document.querySelector(".cms-shop-p").textContent;
let contactDefaultsP = document.querySelector(".cms-contact-p").textContent;

// Takes in the object sent from cms-cms_html.js to apply it here
const defaults = JSON.parse(localStorage.getItem("defaultsObj"));


// stores the values within the header and p tags into local storage only when
// ?admin is added into the url.
if (window.location.href.indexOf("admin") != -1) {
	localStorage.setItem("headerH2", headerDefaultsH1);
	localStorage.setItem("headerP", headerDefaultsP);
	localStorage.setItem("shopP", shopDefaultsP);
	localStorage.setItem("contactP", contactDefaultsP);
	location.replace("cms.html");
}
setTextContent();

// This statement checks if any of the values from the the cms have changed from the default before it
// changes them in the website.
if (
  defaults.headerH2 !== "Headline" ||
  defaults.headerP.search("Lorem") === -1 ||
  defaults.shopP.search("Lorem") === -1 ||
  defaults.contactP.search("Lorem") === -1
) {
  document.querySelector(".cms-header-h1").innerHTML = localStorage.getItem(
    "headerH2"
  );
  document.querySelector(".cms-header-p").innerHTML = localStorage.getItem(
    "headerP"
  );
  document.querySelector(".cms-shop-p").innerHTML = localStorage.getItem(
    "shopP"
  );
  document.querySelector(".cms-contact-p").innerHTML = localStorage.getItem(
    "contactP"
  );
}

// This function changes the content inside of the html tags so that when cms.html pulls
// the values from them they can see the new stored values within the input tags
function setTextContent() {
  headerDefaultsH1 = defaults.headerH2;
  headerDefaultsP = defaults.headerP;
  shopDefaultsP = defaults.contactP;
  contactDefaultsP = defaults.contactP;
}
