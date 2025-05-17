const global = Reflect.ownKeys(globalThis);
const obj = globalThis["Object"];
global.forEach((i) => console.log(i));
