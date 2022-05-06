import React from "react";
import renderer from "react-test-renderer";
import LoginScreen from "../screens/LoginScreen";

describe("Login", () => {
  describe("Rendering", () => {
    it("renders login screen without crash", async () => {
      const login = renderer.create(<LoginScreen />).toJSON();
      await expect(login).toMatchSnapshot();
    });
  });
});
