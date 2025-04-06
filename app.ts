let var1: string = "manik";
let num1: number;

let test: string | number;
test = var1;
test + 1;

const strArr: string[] = [];

const numAndStr1: (string | number)[] = [];
numAndStr1.push("manik");

interface User {
  username: string;
  age: number;
  isAdmin?: boolean;
}

const user1: User = {
  username: "manik",
  age: 12,
};

let userType;

type userFunction = {
  greet: (name: string) => void;
};

const funcUser: userFunction = {
  greet: (name: string) => {
    console.log("Hi there, " + name);
  },
};

funcUser.greet("manik");

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

const multiplyType: typeof multiply = multiply;

type myFunc = (a: number, str: string) => void;

let write: myFunc = (a, str) => {
  console.log(a, str);
};

const awaitedPromiceGreet = async (user: string) => {
  const myPromice: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello " + user);
    });
  });

  const greetText = await myPromice;
  return greetText;
};

type AwaitedPromiseGreetType = Awaited<ReturnType<typeof awaitedPromiceGreet>>;

interface IUser {
  username: string;
  age: number;
  isAdmin?: boolean;
}

interface IEmployee extends IUser {
  salary: number;
  employeeId: number;
}

const employee1 = {
  name: "manik",
  age: 21,
  isAdmin: true,
  salary: 10000,
  employeeId: 1,
};

// Generics

interface IPost<T> {
  id: string;
  title: string;
  content: string;
  extra?: T[];
}

const post1: IPost<string> = {
  id: "1",
  title: "This is a title",
  content: "This is the content",
  extra: ["manik"],
};

interface AllUser1<T> {
  id: string;
  user: T[];
}

const allUser: AllUser1<IUser> = {
  id: "1",
  user: [
    {
      username: "manik",
      age: 12,
    },
  ],
};


type UserBioData<T> = {
  name: string,
  age: number,
  extra : T[]
}

const manik : UserBioData<object> = {
  name : "Manik",
  age : 21,
  extra : [{
    employeeId : 1,
    organisation : "Whiterose Lab",
  }, {
    educationId : 123,
    institute : "BESC"
  }]
}