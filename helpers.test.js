const verifyNANumber = require("./helpers");

describe("verify if valid North America Number", () => {
  it("911 (or another N11 numbers should not be valid", () => {
    expect(verifyNANumber("911")).toBe(false);
  });
  it("6473333333 should be valid", () => {
    expect(verifyNANumber("6473333333")).toBe(true);
  });
  it("previous number in number format should be valid", () => {
    expect(verifyNANumber(6473333333)).toBe(true);
  });
  it("additional characters in valid number", () => {
    expect(verifyNANumber("+1-223-345-6789")).toBe(true);
  });
  it("additional characters in invalid number", () => {
    expect(verifyNANumber("+1-223-115-6789")).toBe(false);
  });
  it("first number begins with 1", () => {
    expect(verifyNANumber("+1-123-115-6789")).toBe(false);
  });
  it("first number begins with 0", () => {
    expect(verifyNANumber("+1-023-115-6789")).toBe(false);
  });
});
