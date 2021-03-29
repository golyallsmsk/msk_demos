let qmlist = [
  { containerTop: 500, containerHeight: 500, headerHeight: 50 },
  { containerTop: 1300, containerHeight: 500, headerHeight: 50 },
  { containerTop: 2000, containerHeight: 500, headerHeight: 50 },
];

let qmprops = {};
qmprops.menuHeight = 100;
qmprops.containerTop = 500;
qmprops.containerHeight = 500;
qmprops.headerHeight = 50;

function shouldFix(scrollTop, qmprops) {
  return (
    scrollTop + qmprops.menuHeight > qmprops.containerTop &&
    scrollTop + qmprops.menuHeight <
      qmprops.containerTop + qmprops.containerHeight - qmprops.headerHeight
  );
}

function findqmItem(scrollTop) {
  return qmlist.find((qm) => qm.containerTop > scrollTop);
}

// Pass 401
console.log(qmprops);
testShouldFix(400);
testShouldFix(401);
testShouldFix(849);
testShouldFix(850);
testShouldFix(999);
testShouldFix(1000);

console.log("Find Item Tests");
testFindQmItem(400);
testFindQmItem(499);
testFindQmItem(500);
testFindQmItem(1299);
testFindQmItem(1300);
testFindQmItem(1999);
testFindQmItem(2000);

// function findqmItem1(scrollTop {
//   return qmlist.filter((qm) => qm.containerTop > scrollTop && qm. )
// })

function testFindQmItem(scrollTop) {
  // if (._.isUndefined(findqmItem(scrollTop)))
  let i = findqmItem(scrollTop);
  if (i != null) console.log(scrollTop, i);
  else console.error(scrollTop, i);
}

function testShouldFix(scrollTop) {
  let actualValue = shouldFix(scrollTop, qmprops);
  let expectedValue = true;

  if (actualValue === expectedValue)
    console.log(
      "scroll Top:",
      scrollTop,
      "; Actual : ",
      actualValue,
      "; expected :",
      expectedValue
    );
  else
    console.error(
      "scroll Top:",
      scrollTop,
      "; Actual : ",
      actualValue,
      "; expected :",
      expectedValue
    );
}
