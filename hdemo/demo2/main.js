window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Home Menu bar fixed
let homemenubar = document.querySelector(".homemenubar");

// Fixed Heading DOM Elements
const fixedHeadings = document.querySelectorAll(".heading5");
const dummyFixedHeadings = [];
fixedHeadings.forEach((node) => {
  dummyFixedHeadings.push(insertDummyHeading(node));
});


(function loadFixedHeadings() {

  fixedHeadings.forEach((node) => {
    node.style.width = node.parentNode.clientWidth + "px";
  });
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

  // document.querySelectorAll(".heading5")
  // heading.style.width = heading.parentNode.clientWidth + "px";

  document.querySelector(".heading4").style.top =
    homemenubar.offsetHeight + "px";

  // headingprops.sectionTop = heading.parentNode.offsetTop;
  // headingprops.sectionHeight = heading.parentNode.offsetHeight;
  // headingprops.headerHeight = heading.offsetHeight;
  // headingprops.sectionWidth = heading.offsetWidth;
}

// handle Scroll
function handleScroll() {
  let scrollTop = window.pageYOffset;


  // debug(headingprops);

  const headingprops = {};
  let heading = null;
  fixedHeadings.forEach((node) => {
    if (
      scrollTop > node.parentNode.offsetTop &&
      scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
    ) {
      heading = node;

      headingprops.toolbarHeight = homemenubar.offsetHeight;
      headingprops.sectionTop = node.parentNode.offsetTop;
      headingprops.sectionHeight = node.parentNode.offsetHeight;
      headingprops.headerHeight = node.offsetHeight;
      headingprops.sectionWidth = node.offsetWidth;
      console.log(headingprops);
    }
    else {
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

  if (heading === null || dummyheading === null ) return;

  // console.log(scrollTop, headingprops);

  if (shouldFix(scrollTop, headingprops))
  {
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

function shouldFix(scrollTop, headingprops) {
  return (
    scrollTop + headingprops.toolbarHeight > headingprops.sectionTop &&
    scrollTop + headingprops.toolbarHeight <
    headingprops.sectionTop + headingprops.sectionHeight - headingprops.headerHeight
  );
}

// insertDummyMenubar
(function insertDummyMenubar() {
  const dummymenubar = homemenubar.cloneNode(true);
  dummymenubar.classList.add("dummymenubar");
  homemenubar.parentNode.insertBefore(dummymenubar, homemenubar.nextSibling);
})();


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
