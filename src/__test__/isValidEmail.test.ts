import { isValidEmail } from "../services/emailValidator";

describe("test isValidName", () => {
  it("should be return false", async () => {
    expect(isValidEmail("teste.com.br")).toBe(false);
    expect(isValidEmail("@teste.com.br")).toBe(false);
    expect(isValidEmail("teste@teste.com.br")).toBe(true);
  });
  it("should be return true", async () => {
    expect(isValidEmail("teste@teste.com.br")).toBe(true);
  });
});
