const name = "Jenny",
  age = 29,
  gender = "female";

const sayHi1 = (name, age, gender) => {
  console.log(
    `Hello ${name}, you are ${age}, you are a ${gender}`
  );
};

const sayHi2 = (name, age, gender?) => {
  console.log(
    `Hello ${name}, you are ${age}, you are a ${gender}`
  );
};

sayHi1(name, age);
sayHi2(name, age);

export {};
