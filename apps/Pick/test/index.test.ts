import { expect, it } from "vitest";
import { Pick } from "../types/index";

it("Type of HelloWorld should be string", () => {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  expect(typeof todo.title === "string" && typeof todo.completed === "boolean");
});
