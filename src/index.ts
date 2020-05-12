const sayHi = (
  name: string,
  age: number,
  gender: string
): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

sayHi("Jenny", 29, "female");
// sayHi("Jenny", 29, true)
// sayHi("Jenny", 29)

export {};
