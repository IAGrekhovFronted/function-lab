const lazyGetter = (() => {
  let cache: string | null = null;

  return () => {
    if (cache) {
      console.log("Возврат значения из кэша");
      return cache;
    }
    console.log("Вычисление значения");
    cache = "Тестовая строка";
    return cache;
  };
})();

console.log(lazyGetter());
console.log(lazyGetter());

console.log("=======================");

function createLazyGetter<T>(getter: () => T): () => T {
  let cached: T | undefined;
  return () => {
    if (cached === undefined) {
      cached = getter();
    }
    console.log("Кэшированное значение");
    return cached;
  };
}

const lazyGetterTest = createLazyGetter(() => "Test lazy getter");
console.log(lazyGetterTest());
console.log(lazyGetterTest());
