window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Home Menu bar fixed
let homemenubar = document.querySelector(".homemenubar");
createDummyElement(homemenubar, ["dummymenubar"], []);

// Fixed Heading DOM Elements
const fixedHeadings = document.querySelectorAll(".heading5");

const qmElements = document.querySelectorAll(".qmclass");

const dummyFixedHeadings = [];
const dummyQMElements = [];

fixedHeadings.forEach((node) => {
  dummyFixedHeadings.push(
    createDummyElement(node, ["heading5dummy"], ["heading5"])
  );
});

qmElements.forEach((node) => {
  dummyQMElements.push(createDummyElement(node, ["qmclassdummy"], ["qmclass"]));
});

function loadFixedHeadings() {
  fixedHeadings.forEach((node) => {
    node.style.width = node.parentNode.clientWidth + "px";
  });
}

function createDummyElement(element, addClassess, removeClassess) {
  const dummyElement = element.cloneNode(true);
  addClassess.forEach((c) => dummyElement.classList.add(c));
  removeClassess.forEach((c) => dummyElement.classList.remove(c));
  element.parentNode.insertBefore(dummyElement, element.nextSibling);
  return dummyElement;
}

// Resize
function handleResize() {
  homemenubar.style.width = homemenubar.nextSibling.clientWidth + "px";

  loadFixedHeadings();

  document.querySelector(".heading4").style.top =
    homemenubar.offsetHeight + "px";
}

// handle Scroll
function handleScroll() {
  let scrollTop = window.pageYOffset;

  // debug(headingprops);

  const headingprops = {};
  let heading = null;

  // scrollTop + headingprops.toolbarHeight > headingprops.sectionTop &&
  // scrollTop + headingprops.toolbarHeight <
  //   headingprops.sectionTop +
  //     headingprops.sectionHeight -
  //     headingprops.headerHeight

  fixedHeadings.forEach((node) => {
    if (
      scrollTop + homemenubar.offsetHeight > node.parentNode.offsetTop &&
      scrollTop + homemenubar.offsetHeight + node.offsetHeight <
        node.parentNode.offsetTop + node.parentNode.offsetHeight
    ) {
      heading = node;

      headingprops.toolbarHeight = homemenubar.offsetHeight;
      headingprops.sectionTop = node.parentNode.offsetTop;
      headingprops.sectionHeight = node.parentNode.offsetHeight;
      headingprops.headerHeight = node.offsetHeight;
      headingprops.sectionWidth = node.offsetWidth;
    } else {
      node.classList.remove("heading5fixed");
      node.style.top = "";
    }
  });

  let dummyheading = null;
  dummyFixedHeadings.forEach((node) => {
    if (
      scrollTop > node.parentNode.offsetTop &&
      scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
    ) {
      dummyheading = node;
    } else {
      node.classList.add("heading5dummy");
      node.classList.remove("heading5dummyfixed");
    }
  });

  let qmfixed = null;
  qmElements.forEach((node) => {
    if (
      scrollTop > node.parentNode.offsetTop &&
      scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
    ) {
      qmfixed = node;
      headingprops.qmfixedTop = node.parentNode.offsetTop;
      headingprops.qmfixedHeight = node.parentNode.offsetHeight;
    } else {
      node.style.top = "";
      node.classList.remove("qmclassfixed");
    }
  });

  let dummyQmFixed = null;
  dummyQMElements.forEach((node) => {
    if (
      scrollTop > node.parentNode.offsetTop &&
      scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
    ) {
      dummyQmFixed = node;
    } else {
      node.classList.add("qmclassdummy");
      node.classList.remove("qmclassdummyfixed");
    }
  });

  console.log(headingprops);
  if (heading === null || dummyheading === null) return;

  // console.log(scrollTop, headingprops);

  // if (shouldFix(scrollTop, headingprops)) {
  if (heading !== null) {
    dummyheading.classList.remove("heading5dummy");
    dummyheading.classList.add("heading5dummyfixed");
    dummyheading.style.height =
      headingprops.toolbarHeight + headingprops.headerHeight + 10 + "px";
    heading.classList.add("heading5fixed");
    heading.style.top = headingprops.toolbarHeight + "px";
    heading.style.width =
      heading.parentNode.getBoundingClientRect().width + "px" + "px";
  }
  //  else {
  //   // dummyqmfixed
  // }
  // }
  if (qmfixed !== null) {
    qmfixed.classList.add("qmclassfixed");
    qmfixed.style.top =
      headingprops.toolbarHeight + headingprops.headerHeight + "px";
    qmfixed.style.width =
      qmfixed.parentNode.getBoundingClientRect().width + "px" + "px";
  }
  // else {
  //   heading.classList.remove("heading5fixed");
  //   heading.style.top = "";
  //   dummyheading.classList.add("heading5dummy");
  //   dummyheading.classList.remove("heading5dummyfixed");
  // }
}

function shouldFix(scrollTop, headingprops) {
  return (
    scrollTop + headingprops.toolbarHeight > headingprops.sectionTop &&
    scrollTop + headingprops.toolbarHeight <
      headingprops.sectionTop +
        headingprops.sectionHeight -
        headingprops.headerHeight
  );
}

// insertDummyMenubar
// (function insertDummyMenubar() {
//   const dummymenubar = homemenubar.cloneNode(true);
//   dummymenubar.classList.add("dummymenubar");
//   homemenubar.parentNode.insertBefore(dummymenubar, homemenubar.nextSibling);
// })();

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
