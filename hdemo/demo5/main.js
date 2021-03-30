"use strict";
// window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Home Menu bar fixed
let homemenubar = document.querySelector(".homemenubar");
createDummyElement(homemenubar, ["dummymenubar"], []);

// // Fixed Heading DOM Elements
const fixedHeadings = document.querySelectorAll(".heading4");

// const dummyFixedHeadings = [];
// fixedHeadings.forEach((node) => {
//   dummyFixedHeadings.push(
//     createDummyElement(node, ["heading5dummy"], ["heading5"])
//   );
// });

let getAllSiblings = (els) => {
  let siblings = [];
  if (!els.parentNode) {
    return siblings;
  }

  let sibling = els.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== els) {
      siblings.push(sibling);
    }
    if (sibling === els) {
      break;
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

// // Question Matrix Elements
const qmElements = document.querySelectorAll(".qmclass");
function qmrefresh() {
  qmElements.forEach((node) => {
    // console.log(node.parentNode);
    console.log(getAllSiblings(node.parentNode));
    // console.log(node.parentNode.previousElementSibling);
    let prevSiblings = _.reverse(getAllSiblings(node.parentNode));

    let firstSticky = _.find(prevSiblings, (n) =>
      n.classList.contains("heading4")
    );
    let n = 200;
    if (firstSticky) {
      node.style.top =
        firstSticky.offsetHeight + homemenubar.offsetHeight + "px";
    }
    // console.log(firstSticky);
    // console.log(prevSiblings);
    console.log("foreach complete");
  });
}
// const dummyQMElements = [];

// qmElements.forEach((node) => {
//   dummyQMElements.push(createDummyElement(node, ["qmclassdummy"], ["qmclass"]));
// });

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

  fixedHeadings.forEach((node) => {
    node.style.width = node.parentNode.clientWidth + "px";
    node.style.top = homemenubar.offsetHeight + "px";
  });

  qmElements.forEach((node) => {
    node.style.width = node.parentNode.clientWidth + "px";
    node.style.top = homemenubar.offsetHeight + "px";
  });
  console.log("on load completed");
  qmrefresh();
  // document.querySelector(".heading4").style.top =
  //   homemenubar.offsetHeight + "px";
  // document.querySelectorAll(".heading4").style.top =
  //   homemenubar.offsetHeight + "px";
}

// // handle Scroll
// function handleScroll() {
//   let scrollTop = window.pageYOffset;

//   const headingprops = {};
//   let heading = null;
//   let dummyheading = null;

//   headingprops.scrollTop = scrollTop;
//   headingprops.toolbarHeight = homemenubar.offsetHeight;

//   // scrollTop + headingprops.toolbarHeight > headingprops.sectionTop &&
//   // scrollTop + headingprops.toolbarHeight <
//   //   headingprops.sectionTop +
//   //     headingprops.sectionHeight -
//   //     headingprops.headerHeight

//   fixedHeadings.forEach((node, index) => {
//     if (
//       scrollTop + homemenubar.offsetHeight > node.parentNode.offsetTop &&
//       scrollTop + homemenubar.offsetHeight < node.parentNode.offsetTop + node.parentNode.offsetHeight
//     ) {
//       heading = node;

//       console.log(node.nextElementSibling);
//       dummyheading = node.nextElementSibling;

//       headingprops.sectionTop = node.parentNode.offsetTop;
//       headingprops.sectionHeight = node.parentNode.offsetHeight;
//       headingprops.headerHeight = index === 0 ? node.offsetHeight : 0;
//       headingprops.sectionWidth = node.offsetWidth;
//     } else {
//       node.classList.remove("heading5fixed");
//       node.style.top = "";

//       node.nextElementSibling.classList.add("heading5dummy");
//       node.nextElementSibling.classList.remove("heading5dummyfixed");
//     }
//   });

//   // dummyFixedHeadings.forEach((node) => {
//   //   if (
//   //     scrollTop + homemenubar.offsetHeight > node.parentNode.offsetTop &&
//   //     scrollTop + homemenubar.offsetHeight < node.parentNode.offsetTop + node.parentNode.offsetHeight
//   //   ) {
//   //     dummyheading = node;
//   //   } else {
//   //     node.classList.add("heading5dummy");
//   //     node.classList.remove("heading5dummyfixed");
//   //   }
//   // });

//   let qmfixed = null;
//   qmElements.forEach((node) => {
//     if (
//       scrollTop > node.parentNode.offsetTop &&
//       scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
//     ) {
//       qmfixed = node;
//       headingprops.qmfixedSectionTop = node.parentNode.offsetTop;
//       headingprops.qmfixedSectionHeight = node.parentNode.offsetHeight;
//       headingprops.qmfixedHeight = node.offsetHeight;
//     } else {
//       node.style.top = "";
//       node.classList.remove("qmclassfixed");
//     }
//   });

//   // scrollTop + headingprops.toolbarHeight + headingprops.headerHeight <
//   // headingprops.qmfixedSectionTop +
//   //   headingprops.qmfixedSectionHeight - headingprops.qmfixedHeight

//   let dummyQmFixed = null;
//   dummyQMElements.forEach((node) => {
//     console.log(node.parentNode.offsetTop, node.parentNode.offsetHeight, node.offsetHeight);
//     if (
//       scrollTop  > node.parentNode.offsetTop &&
//       scrollTop  < node.parentNode.offsetTop + node.parentNode.offsetHeight
//     ) {
//       dummyQmFixed = node;
//     } else {
//       node.classList.add("qmclassdummy");
//       node.classList.remove("qmclassdummyfixed");
//     }
//   });

//   // console.log(headingprops);
//   debug(headingprops);
//   if (heading === null || dummyheading === null) return;

//   // console.log(scrollTop, headingprops);

//   if (shouldFix(scrollTop, headingprops))
//   {
//     dummyheading.classList.remove("heading5dummy");
//     dummyheading.classList.add("heading5dummyfixed");
//     dummyheading.style.height =
//       headingprops.toolbarHeight + headingprops.headerHeight + "px";
// //  +
//     heading.classList.add("heading5fixed");
//     heading.style.top = headingprops.toolbarHeight + "px";
//     heading.style.width =
//       heading.parentNode.getBoundingClientRect().width + "px" + "px";
//   }
//    else {
//     heading.classList.remove("heading5fixed");
//     heading.style.top = "";
//     dummyheading.classList.add("heading5dummy");
//     dummyheading.classList.remove("heading5dummyfixed");
//   }

//   if (qmfixed !== null &&  shouldQMFix(scrollTop, headingprops)) {
//     dummyQmFixed.classList.remove("qmclassdummy");
//     dummyQmFixed.classList.add("qmclassdummyfixed");

//     qmfixed.classList.add("qmclassfixed");
//     qmfixed.style.top =
//       headingprops.toolbarHeight + headingprops.headerHeight + "px";
//     qmfixed.style.width =
//       qmfixed.parentNode.getBoundingClientRect().width + "px" + "px";

//     // dummyQmFixed.style.height =
//     //   headingprops.toolbarHeight + headingprops.headerHeight + 10 + "px";
//   }
//   else {
//     // qmfixed.classList.remove("qmclassfixed");
//     // qmfixed.style.top = "";
//     // dummyQmFixed.classList.add("qmclassdummy");
//     // dummyQmFixed.classList.remove("qmclassdummyfixed");
//   }
// }

// function shouldFix(scrollTop, headingprops) {
//   return (
//     scrollTop + headingprops.toolbarHeight > headingprops.sectionTop &&
//     scrollTop + headingprops.toolbarHeight <
//       headingprops.sectionTop +
//         headingprops.sectionHeight -
//         headingprops.headerHeight
//   );
// }

// function shouldQMFix(scrollTop, headingprops) {

//   return (
//     scrollTop + headingprops.toolbarHeight > headingprops.qmfixedSectionTop &&
//     scrollTop + headingprops.toolbarHeight + headingprops.headerHeight <
//       headingprops.qmfixedSectionTop +
//         headingprops.qmfixedSectionHeight - headingprops.qmfixedHeight
//         // headingprops.headerHeight - headingprops.qmfixedHeight
//   );
// }

// // insertDummyMenubar
// // (function insertDummyMenubar() {
// //   const dummymenubar = homemenubar.cloneNode(true);
// //   dummymenubar.classList.add("dummymenubar");
// //   homemenubar.parentNode.insertBefore(dummymenubar, homemenubar.nextSibling);
// // })();

// // Debug
// function debug(heading5) {
//   // console.log(
//   //   window.pageYOffset,
//   //   heading5.sectionTop - heading5.toolbarHeight,
//   //   heading5.sectionTop,
//   //   heading5.toolbarHeight
//   // );
//   let debug = "Debug<br>";
//   // debug += `window.pageYOffset + heading5.toolbarHeight : ${
//   //   window.pageYOffset + heading5.toolbarHeight
//   // }<br>`;
//   // scrollTop > node.parentNode.offsetTop &&
//   // scrollTop < node.parentNode.offsetTop + node.parentNode.offsetHeight
//   debug += `scrollTop : ${heading5.scrollTop}<br>`;
//   debug += `toolbarHeight : ${heading5.toolbarHeight}<br>`;
//   debug += `fixTop : ${heading5.scrollTop + heading5.toolbarHeight} > ${heading5.sectionTop} <br>`;
//   debug += `fixBottom : ${heading5.scrollTop + heading5.toolbarHeight} < ${heading5.sectionTop + heading5.sectionHeight -heading5.headerHeight } <br>`;
//   debug += `sectionTop : ${heading5.sectionTop}<br>`;
//   debug += `sectionHeight : ${heading5.sectionHeight}<br>`;
//   debug += `headerHeight : ${heading5.headerHeight}<br>`;
//   debug += `qmfixedSectionTop : ${heading5.qmfixedSectionTop}<br>`;
//   debug += `qmfixedSectionHeight : ${heading5.qmfixedSectionHeight}<br>`;
//   debug += `qmfixedHeight : ${heading5.qmfixedHeight}<br>`;
//   // debug += `heading5.sectionTop - heading5.toolbarHeight : ${
//   //   heading5.sectionTop - heading5.toolbarHeight
//   // }<br>`;
//   // debug += `heading5.sectionTop + heading5.sectionHeight : ${
//   //   heading5.sectionTop + heading5.sectionHeight
//   // }<br>`;  // debug += `Window PageYOffset : ${window.pageYOffset}<br>`;
//   // debug += `fixtop : ${fixtop}<br>`;
//   // debug += `fixbottom : ${fixbottom}<br>`;
//   document.getElementById("debug").innerHTML = debug;
// }
