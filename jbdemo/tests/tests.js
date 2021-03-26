QUnit.test("My First Test", function (assert) {
  let a = 1;
  assert.equal(a, 1, "Value should be 1");

  assert.equal(true, true, "Values both are true");
});

QUnit.test("Second test", (assert) => {
  assert.equal(false, false, "Values both are false");
});
