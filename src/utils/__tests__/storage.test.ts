import { getFromStorage, saveToStorage } from "utils/storage";

const MOCK_OBJ = {
  name: "Hossein",
  age: 24,
};
const STRINGIFIED_MOCK_OBJ = JSON.stringify(MOCK_OBJ);

describe("storage tests", () => {
  jest.spyOn(window.localStorage.__proto__, "setItem");
  jest.spyOn(window.localStorage.__proto__, "getItem");

  describe("saveToStorage", () => {
    test("should call localStorage.setItem without stringify for toJSON=false", () => {
      saveToStorage("sample", "value");
      expect(localStorage.setItem).toHaveBeenCalledWith("sample", "value");
    });

    test("should call localStorage.setItem with stringify for toJSON=true", () => {
      saveToStorage("sample", MOCK_OBJ, true);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "sample",
        STRINGIFIED_MOCK_OBJ
      );
    });
  });

  describe("getFromStorage", () => {
    test("should call localStorage.getItem", () => {
      getFromStorage("test");
      getFromStorage("test", true);
      expect(localStorage.getItem).toHaveBeenCalledWith("test");
      expect(localStorage.getItem).toHaveBeenCalledTimes(2);
    });
  });
});
