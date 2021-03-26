window.addEventListener("scroll", handleScroll);

let toolbar = document.querySelector(".toolbar");
const tmptoolbar = toolbar.cloneNode(true);
tmptoolbar.style.visiblity = "hidden";
tmptoolbar.style.position = "static";
toolbar.parentNode.insertBefore(tmptoolbar, toolbar.nextSibling);

let el5 = document.querySelector(".heading5");
let heading5 = {};
heading5.toolbarHeight = toolbar.offsetHeight;
heading5.sectionTop = el5.parentNode.offsetTop;
heading5.sectionHeight = el5.parentNode.offsetHeight;
heading5.headerHeight = el5.offsetHeight;
console.log(heading5);

const tmp = el5.cloneNode(true);
tmp.classList.add("heading5dummy");
// tmp.style.height = 2 * heading5.headerHeight;
// tmp.style.visibility = "hidden";
el5.parentNode.insertBefore(tmp, el5.nextSibling);

function handleScroll() {
  if (
    window.pageYOffset > heading5.sectionTop - heading5.toolbarHeight &&
    window.pageYOffset <
      heading5.sectionTop +
        heading5.sectionHeight -
        heading5.headerHeight -
        heading5.toolbarHeight
  ) {
    el5.classList.add("heading5fixed");
    el5.style.top = heading5.toolbarHeight + "px";
    tmp.style.display = "inline-block";
  } else {
    el5.classList.remove("heading5fixed");
    tmp.style.display = "none";
  }
}
