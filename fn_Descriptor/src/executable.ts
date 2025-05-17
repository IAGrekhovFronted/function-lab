interface TestDescriptor {
  name: string;
}

const descriptor: TestDescriptor = {
  name: "TestName",
};

Object.defineProperty(descriptor, "testDescriptor", {
  // value: "valueFieldDescriptor",
  get: () => {
    const testString = "Test string";
    console.log("Получение свойства descrip");
    return testString;
  },
});

// console.log(descriptor);
// console.log(descriptor?.["testDescriptor"]);
// console.log(Object.getOwnPropertyDescriptor(descriptor, "testDescriptor"));
// console.log(descriptor.hasOwnProperty("testDescriptor"));

// const descriptionWithGetter = {};

// Object.defineProperty(descriptionWithGetter, "descrip", {
//   get: () => {
//     const testString = "Test string";
//     console.log("Получение свойства descrip");
//     return testString;
//   },
//   enumerable: true,
// });

// console.log(descriptionWithGetter?.["descrip"]);
