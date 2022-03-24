/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/13-warm-hello-world/README.md
 */
type HelloWorld = string;

const helloWorld = () => {
  const helloWorld: HelloWorld = "Hello World";
};

/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
 */
type MyPick<T, K extends keyof T> = {
  [key in K]: T[K];
};

const myPick = () => {
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
};

/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md
 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonly = () => {
  interface Todo {
    title: string;
    description: string;
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  /** Throws error in tsc -> readonly
   * todo.title = 'Hello';
   * todo.description = 'barFoo';
   */
};

/**
 * https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md
 */
type First<T extends any[]> = T extends [] ? never : T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
