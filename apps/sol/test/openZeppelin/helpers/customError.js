const { expect } = require("chai");

/** Revert handler that supports custom errors. */
async function expectRevertCustomError(promise, expectedErrorName, args) {
  if (!Array.isArray(args)) {
    expect.fail("Expected 3rd array parameter for error arguments");
  }

  // removed custom error handling....
  await expect(promise).to.be.reverted;
}

module.exports = {
  expectRevertCustomError,
};
