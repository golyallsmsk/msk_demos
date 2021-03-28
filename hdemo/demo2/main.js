// @collapse

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Home Menu bar fixed
let homemenubar = document.querySelector(".homemenubar");
let heading = document.querySelector(".heading5");
const dummyheading = insertDummyHeading(heading, homemenubar.offsetHeight);
let headingprops = {};

// Load FixedHeaddings();
(function loadFixedHeadings() {
  headingprops.toolbarHeight = homemenubar.offsetHeight;
  headingprops.sectionTop = heading.parentNode.offsetTop;
  headingprops.sectionHeight = heading.parentNode.offsetHeight;
  headingprops.headerHeight = heading.offsetHeight;
  headingprops.sectionWidth = heading.offsetWidth;
})();

let fixedHeadingsList = [];

(function loadFixedHeadings1() {
  const fixedHeadings = document.querySelectorAll(".heading5");
  fixedHeadings.forEach((node) => {
    let fixedHeading = {};
    fixedHeading.sectionTop = node.parentNode.offsetTop;
    fixedHeading.sectionHeight = node.parentNode.offsetHeight;
    fixedHeading.headerHeight = node.offsetHeight;
    fixedHeading.sectionWidth = node.offsetWidth;
    fixedHeadingsList.push(fixedHeading);
  });
})();

// insertDummyMenubar
(function insertDummyMenubar() {
  const dummymenubar = homemenubar.cloneNode(true);
  dummymenubar.classList.add("dummymenubar");
  homemenubar.parentNode.insertBefore(dummymenubar, homemenubar.nextSibling);
})();

// insertDummyHeading
function insertDummyHeading(headingElement) {
  const dummyheading = headingElement.cloneNode(true);
  dummyheading.classList.add("heading5dummy");
  dummyheading.classList.remove("heading5");

  headingElement.parentNode.insertBefore(
    dummyheading,
    headingElement.nextSibling
  );
  return dummyheading;
}

// Resize
function handleResize() {
  homemenubar.style.width = homemenubar.nextSibling.clientWidth + "px";

  heading.style.width = heading.parentNode.clientWidth + "px";

  document.querySelector(".heading4").style.top =
    headingprops.toolbarHeight + "px";

  headingprops.sectionTop = heading.parentNode.offsetTop;
  headingprops.sectionHeight = heading.parentNode.offsetHeight;
  headingprops.headerHeight = heading.offsetHeight;
  headingprops.sectionWidth = heading.offsetWidth;
}

// handle Scroll
function handleScroll() {
  debug(headingprops);

  const temp = fixedHeadingsList.find(
    (item) => item.sectionTop > window.pageYOffset
  );
  console.log(temp);

  let fixtop = headingprops.sectionTop - headingprops.toolbarHeight;
  let fixbottom =
    headingprops.sectionTop +
    headingprops.sectionHeight -
    headingprops.headerHeight -
    headingprops.toolbarHeight;

  if (window.pageYOffset > fixtop && window.pageYOffset < fixbottom) {
    dummyheading.classList.remove("heading5dummy");
    dummyheading.classList.add("heading5dummyfixed");
    dummyheading.style.height =
      headingprops.toolbarHeight + headingprops.headerHeight + 10 + "px";
    heading.classList.add("heading5fixed");
    heading.style.top = headingprops.toolbarHeight + "px";
    heading.style.width =
      heading.parentNode.getBoundingClientRect().width + "px" + "px";
  } else {
    heading.classList.remove("heading5fixed");
    heading.style.top = "";
    dummyheading.classList.add("heading5dummy");
    dummyheading.classList.remove("heading5dummyfixed");
  }
}

// Debug
function debug(heading5) {
  // console.log(
  //   window.pageYOffset,
  //   heading5.sectionTop - heading5.toolbarHeight,
  //   heading5.sectionTop,
  //   heading5.toolbarHeight
  // );
  let debug = "Debug<br>";
  debug += `heading5.toolbarHeight : ${heading5.toolbarHeight}<br>`;
  // debug += `window.pageYOffset + heading5.toolbarHeight : ${
  //   window.pageYOffset + heading5.toolbarHeight
  // }<br>`;
  debug += `heading5.sectionTop : ${heading5.sectionTop}<br>`;
  debug += `heading5.sectionHeight : ${heading5.sectionHeight}<br>`;
  debug += `heading5.headerHeight : ${heading5.headerHeight}<br>`;
  // debug += `heading5.sectionTop - heading5.toolbarHeight : ${
  //   heading5.sectionTop - heading5.toolbarHeight
  // }<br>`;
  // debug += `heading5.sectionTop + heading5.sectionHeight : ${
  //   heading5.sectionTop + heading5.sectionHeight
  // }<br>`;  // debug += `Window PageYOffset : ${window.pageYOffset}<br>`;
  // debug += `fixtop : ${fixtop}<br>`;
  // debug += `fixbottom : ${fixbottom}<br>`;
  document.getElementById("debug").innerHTML = debug;
}
