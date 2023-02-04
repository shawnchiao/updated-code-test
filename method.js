// The place storing data, mocking database
const methods = {
  A:(result) => Math.round(result),
  B:(result) => result.toFixed(1),
};

// The class structure used to manipulate the methods related data, as the basic logic structure of method.
class Method {
  listAllMethods() {
    return methods;
  };

  addOrEditMethod(name, formula) {
    methods[name] = formula;
  };
  deleteMethod(name) {
    delete methods.name;
  }
  useFormula(method) {
    return methods[method]
  }
};

// exporting caculator functiion that would come in handy

 export function roundingCalculater(method, number) {
  const instance = new Method();
  const roundingFunction = instance.useFormula(method);
  return roundingFunction(number);
};


