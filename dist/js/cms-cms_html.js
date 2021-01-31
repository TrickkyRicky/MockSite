// object used to store the default value of the current html site
// once changed it will then hold the new values of the html site
const defaults = {
  headerH2: "",
  headerP: "",
  shopP: "",
  contactP: "",
};

updateDefaults();

// variables to select the input and text tags
const headline = document.getElementById("headline");
const headlineP = document.getElementById("headline-text");
const shopP = document.getElementById("shop-text");
const contactP = document.getElementById("contact-text");

// Places the current values that were stored into the objects properties and views
// these values into input tags for the editor
headline.value = defaults.headerH2;
headlineP.value = defaults.headerP;
shopP.value = defaults.shopP;
contactP.value = defaults.contactP;

// This event takes the click of the save button and sets the
// new values (the users changed inputs from the default ones) inside the
// local storage to be seen within the index.html
function submit() {
  const newHeadline = headline.value;
  const newHeadlineP = headlineP.value;
  const newShopP = shopP.value;
  const newContactP = contactP.value;
  localStorage.setItem("headerH2", newHeadline);
  localStorage.setItem("headerP", newHeadlineP);
  localStorage.setItem("shopP", newShopP);
  localStorage.setItem("contactP", newContactP);
  updateDefaults();
  localStorage.setItem("defaultsObj", JSON.stringify(defaults));
  window.location.assign("index.html");
}

// resets the values to the original within the text content
function setToDefault() {
  headline.value = "Headline";
  headlineP.value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  shopP.value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  contactP.value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
}

// retrieves the information within the local storage and stores it within an object
function updateDefaults() {
  defaults.headerH2 = localStorage.getItem("headerH2");
  defaults.headerP = localStorage
    .getItem("headerP")
    .replace(/\s+/g, " ")
    .trim();
  defaults.shopP = localStorage.getItem("shopP").replace(/\s+/g, " ").trim();
  defaults.contactP = localStorage
    .getItem("contactP")
    .replace(/\s+/g, " ")
    .trim();
}
