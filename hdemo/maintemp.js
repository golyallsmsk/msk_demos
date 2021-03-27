// alert("Hello");
// let x = 10;
// const pi = 3.14;
// alert(x * pi);

window.addEventListener("scroll", handleScroll);
// window.addEventListener("load", handleWindowload);

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    console.log("Document State complete");
    handleWindowload();
  }
};

// location.addEventListener("reload", handleWindowload);
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }
// console.info(performance.navigation.type);
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   console.info("This page is reloaded");
// } else {
//   console.info("This page is not reloaded");
// }
if (sessionStorage.getItem("reloaded") != null) {
  console.log("page was reloaded");
}
let heading5 = null; //document.querySelector(".heading5");
let offsetheading5 = null; //heading5.getBoundingClientRect();
let offsetheading5parent = null; // heading5.parentNode.getBoundingClientRect();
// console.log("parent: ", offsetheading5parent, "; heading :", offsetheading5);

function handleWindowload() {
  heading5 = document.querySelector(".heading5");
  // console.log('clientrect: ', heading5.parentNode.getClientRects(),  heading5.getClientRects());
  console.log(
    heading5.offsetTop,
    "clientrect",
    heading5.getClientRects(),
    "Bounding :",
    heading5.getBoundingClientRect()
  );
  offsetheading5 = heading5.getBoundingClientRect();
  offsetheading5parent = heading5.parentNode.getBoundingClientRect();
}
function handleScroll() {
  console.log(
    window.pageYOffset,
    offsetheading5parent.top,
    offsetheading5parent.height
  );

  heading5 = document.querySelector(".heading5");
  console.log(
    heading5.offsetTop,
    heading5.parentNode.scrollTop,
    offsetheading5parent.top
  );
  if (
    window.pageYOffset > offsetheading5parent.top &&
    window.pageYOffset < offsetheading5parent.top + offsetheading5parent.height
    // - offsetheading5.height
  ) {
    heading5.style.position = "fixed";
  } else {
    heading5.style.position = "static";
  }
}

function handleScroll() {
  if (
    window.pageYOffset > heading5.sectiontop &&
    window.pageYOffset <
      heading5.sectiontop + heading5.sectionheight - heading5.height
  ) {
    // el5.parentNode.insertBefore(tmp, el5.parentNode.childNodes[0]);
    // el5.style.position = "fixed";
    el5.classList.add("heading5fixed");
    tmp.style.display = "block";
  } else {
    // el5.parentNode.removeChild(tmp);
    // el5.style.position = "static";
    el5.classList.remove("heading5fixed");
    tmp.style.display = "none";
  }
}

// referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// console.log("Added heading5fixed");
// console.log("Removed heading5fixed");
// tmp.style.visiblity = "hidden";

// tmp.style.height = 2 * heading5.headerHeight;
// tmp.style.visibility = "hidden";
// tmptoolbar.classList.remove(".toolbar");
// console.log(heading5);

// const parentElement = document.querySelector('.parent-element');
// const fixedElement = document.querySelector('.fixed-element');

// window.addEventListener('load', changeFixedElementWidth);
// window.addEventListener('resize', changeFixedElementWidth);

// function changeFixedElementWidth() {
//   const parentElementWidth = parentElement.getBoundingClientRect().width;
//   fixedElement.style.width = parentElementWidth + 'px';
// }

