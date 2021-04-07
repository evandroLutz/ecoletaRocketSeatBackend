import { isValidName } from "../services/nameValidator";

describe("test isValidName", () => {
  it("should be return false", async () => {
    expect(isValidName("a")).toBe(false);
  });
  it("should be return true", async () => {
    expect(isValidName("Paulo")).toBe(true);
  });
});
