// The place storing data, mocking database
const methods = {
  A:(result) => Math.round(result),
  B:(result) => result.toFixed(1),
};

// The class structure used to manipulate the methods related data, as the basic logic structure of method.
export default class Method {
  constructor (methodName, formula = methods[methodName]) {
    this.methodName = methodName;
    this.formula = formula;
  }
  // preserve these three methods bellow for potentially future use or other front end interface
  listAllMethods() {
    return methods;
  }

  addOrEditMethod(name, formula) {
    methods[name] = formula;
  }
  deleteMethod(name) {
    delete methods.name;
  }
  ///

  roundingCalculater(number) {
    const result = this.formula(number);
    return result
  }
};




