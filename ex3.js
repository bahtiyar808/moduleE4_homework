function createObjectWithoutPrototype() {
    return Object.create(null);
  }
  
  const obj = createObjectWithoutPrototype();
  console.log(Object.getPrototypeOf(obj));