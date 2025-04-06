# Learn TypeScript for ReactJS and Next.js

---

## Table of Contents

- [Introduction](#introduction)
- [TypeScript Basics](#typescript-basics)
  - [Variables and Primitive Types](#variables-and-primitive-types)
  - [Union Types](#union-types)
  - [Arrays](#arrays)
  - [Objects](#objects)
- [Functions in TypeScript](#functions-in-typescript)
- [Type Aliases and Interfaces](#type-aliases-and-interfaces)
- [Generics](#generics)
- [TypeScript with React and Next.js](#typescript-with-react-and-nextjs)
  - [Typing Props and Components](#typing-props-and-components)
  - [Handling Events](#handling-events)
  - [Using React Hooks with TypeScript](#using-react-hooks-with-typescript)
  - [Advanced Patterns: Context and Reducers](#advanced-patterns-context-and-reducers)
  - [Working with Refs](#working-with-refs)
- [Combining Types and Excluding Values](#combining-types-and-excluding-values)
- [Conclusion](#conclusion)

---

## Introduction

TypeScript adds static typing to JavaScript, helping you catch errors early and write safer code. If you’re planning on using React or Next.js, knowing TypeScript well can save you a lot of headaches. But don’t get fooled—there’s no magic; you must be disciplined about types. Let’s get into the details.

---

## TypeScript Basics

### Variables and Primitive Types

```ts
let greeting = "Hello, world!";
greeting = "Hi there!";
// greeting = 123; // Error: Type 'number' is not assignable to type 'string'
```

### Union Types

```ts
let id: string | number;
id = "abc123";
id = 42;
// id = true; // Error
```

### Arrays

```ts
let names: string[] = ["John", "Jane"];
names.push("Doe");
// names.push(123); // Error

let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ["Hello", 42];
```

### Objects

```ts
let user = {
  username: "johnDoe",
  age: 30,
  isAdmin: false,
};

type User = {
  username: string;
  age: number;
  phone?: string;
};
```

---

## Functions in TypeScript

### Basic Functions

```ts
function sayHi(): void {
  console.log("Hi and welcome!");
}

function returnGreeting(): string {
  return "Hello, world!";
}
```

### Parameters and Return Types

```ts
function multiply(num: number, factor?: number): number {
  return num * (factor ?? 2);
}
```

### Function Signature Types

```ts
type MyFunction = (num: number, str: string) => void;

const doSomething: MyFunction = (num, str) => {
  console.log(num, str);
};
```

---

## Type Aliases and Interfaces

### Type Aliases

```ts
type UserType = {
  username: string;
  age: number;
  isAdmin: boolean;
};
```

### Interfaces and Extension

```ts
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}
```

---

## Generics

```ts
interface IPost<T> {
  id: number;
  title: string;
  description: string;
  extra: T[];
}

const stringPost: IPost<string> = {
  id: 1,
  title: "Post Title",
  description: "Post Description",
  extra: ["tag1", "tag2"],
};

interface Author {
  authorId: number;
  name: string;
}

const postWithAuthors: IPost<Author> = {
  id: 2,
  title: "Another Post",
  description: "Another Description",
  extra: [{ authorId: 1, name: "John" }],
};
```

---

## TypeScript with React and Next.js

### Typing Props

```tsx
type PostProps = {
  id: number;
  title: string;
  description: string;
};

const PostCard = ({ id, title, description }: PostProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
```

### Handling Events

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log("Clicked!");
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

### useState Hook with Types

```tsx
const [username, setUsername] = useState<string>("");
const [user, setUser] = useState<UserType | null>(null);
```

### useReducer and Context

```tsx
type StateType = { theme: "dark" | "light"; fontSize: number };

type ActionType =
  | { type: "CHANGE_THEME" }
  | { type: "CHANGE_FONT_SIZE"; payload: number };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};
```

---

## Working with Refs

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

---

## Combining Types and Exclude

```ts
type Shape = "Cube" | "Square" | "Rectangle" | "Triangle";
type TwoDimensional = Exclude<Shape, "Cube">;

type TeamType = "dark" | "light";
type ColorType = "blue" | "red" | "yellow";
type ColorTheme = Exclude<`${TeamType} ${ColorType}`, "dark yellow">;
```

