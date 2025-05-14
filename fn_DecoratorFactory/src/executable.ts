function decoratorFactory(this: any) {
  if (this instanceof decoratorFactory) {
    console.log("Аргумент - экземпляр decoratorFactory");
    return;
  }

  console.log("Создание экземпляра decoratorFactory");
  const instance = new (decoratorFactory as any)();
  return instance;
}

const instance1 = decoratorFactory();
console.log("instance1", instance1);

/**
 * Вывод:
Создание экземпляра decoratorFactory
Аргумент - экземпляр decoratorFactory
instance1 decoratorFactory {}
 */
