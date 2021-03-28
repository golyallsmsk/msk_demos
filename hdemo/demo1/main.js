window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Home Menu bar fixed
let homemenubar = document.querySelector(".homemenubar");
insertDummyMenubar();

function insertDummyMenubar() {
  const dummymenubar = homemenubar.cloneNode(true);
  dummymenubar.classList.add("dummymenubar");
  homemenubar.parentNode.insertBefore(dummymenubar, homemenubar.nextSibling);
}
// Heading Fixed
let heading = document.querySelector(".heading5");
const dummyheading = insertDummyHeading(heading, homemenubar.offsetHeight);

function insertDummyHeading(headingElement, homemenubarHeight) {
  const dummyheading = headingElement.cloneNode(true);
  dummyheading.classList.add("heading5dummy");

  headingElement.parentNode.insertBefore(
    dummyheading,
    headingElement.nextSibling
  );
  return dummyheading;
}

let headingprops = {};
headingprops.toolbarHeight = homemenubar.offsetHeight;
headingprops.sectionTop = heading.parentNode.offsetTop;
headingprops.sectionHeight = heading.parentNode.offsetHeight;
headingprops.headerHeight = heading.offsetHeight;
headingprops.sectionWidth = heading.offsetWidth;

function handleResize() {
  homemenubar.style.width = homemenubar.nextSibling.clientWidth + "px";

  heading.style.width = heading.parentNode.clientWidth + "px";

  headingprops.sectionTop = heading.parentNode.offsetTop;
  headingprops.sectionHeight = heading.parentNode.offsetHeight;
  headingprops.headerHeight = heading.offsetHeight;
  headingprops.sectionWidth = heading.offsetWidth;
}

function handleScroll() {
  // debug(headingprops);

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

function debug(heading5) {
  console.log(
    window.pageYOffset,
    heading5.sectionTop - heading5.toolbarHeight,
    heading5.sectionTop,
    heading5.toolbarHeight
  );
  let debug = "";
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
