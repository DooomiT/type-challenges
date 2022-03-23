import { expect, it } from "vitest";
import { HelloWorld } from "../types/index";

it("Type of HelloWorld should be string", () => {
  const helloWorld: HelloWorld = "Hello World";
  expect(typeof helloWorld === "string");
});
