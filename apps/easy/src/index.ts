/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/13-warm-hello-world/README.md
 */
type HelloWorld = string;

const helloWorld: HelloWorld = "Hello World";

/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
 */
type MyPick<T, K extends keyof T> = {
  [key in K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
