window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

let toolbar = document.querySelector(".toolbar");
let el5 = document.querySelector(".heading5");
let heading5 = {};

const tmptoolbar = toolbar.cloneNode(true);
const tmp = el5.cloneNode(false);

tmptoolbar.classList.add("toolbardummy");
console.log('Container Width : ', toolbar.parentNode.offsetWidth);
toolbar.style.width = toolbar.parentNode.clientWidth + "px";
toolbar.parentNode.insertBefore(tmptoolbar, toolbar.nextSibling);

function handleResize() {
  heading5.toolbarHeight = toolbar.offsetHeight;
  heading5.sectionTop = el5.parentNode.offsetTop;
  heading5.sectionHeight = el5.parentNode.offsetHeight;
  heading5.headerHeight = el5.offsetHeight;
  heading5.sectionWidth = el5.offsetWidth;


  tmp.classList.add("heading5dummy");
  tmp.style.height = toolbar.toolbarHeight + el5.headerHeight;
  tmp.style.display = "none";
  el5.parentNode.insertBefore(tmp, el5.nextSibling);

  el5.style.top = heading5.toolbarHeight + "px";
  el5.style.width = heading5.sectionWidth + "px";

  toolbar.style.width = toolbar.parentNode.clientWidth + "px";
  console.log('HandleResize : ', toolbar.parentNode.clientWidth);
}

function handleScroll() {
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
  // }<br>`;

  let fixtop = heading5.sectionTop - heading5.toolbarHeight;
  let fixbottom =
    heading5.sectionTop +
    heading5.sectionHeight -
    heading5.headerHeight -
    heading5.toolbarHeight;

  // debug += `Window PageYOffset : ${window.pageYOffset}<br>`;
  // debug += `fixtop : ${fixtop}<br>`;
  // debug += `fixbottom : ${fixbottom}<br>`;
  document.getElementById("debug").innerHTML = debug;
  // if (window.pageYOffset > fixtop && window.pageYOffset + heading5.toolbarHeight + heading5.headerHeight < fixbottom ) {
  if (window.pageYOffset > fixtop && window.pageYOffset < fixbottom) {
    el5.classList.add("heading5fixed");
    el5.style.top = heading5.toolbarHeight + "px";
    el5.style.width = heading5.sectionWidth + "px";
  } else {
    el5.classList.remove("heading5fixed");
    el5.style.top = "";
    tmp.style.display = "none";
  }
}

// function changeFixedElementWidth() {
//   const parentElementWidth = parentElement.getBoundingClientRect().width;
//   el5.style.width = parentElementWidth + 'px';
// }
