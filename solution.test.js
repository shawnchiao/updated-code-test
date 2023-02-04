const { MoistureContent } = require('./solution.js');

describe("MoistureContet", () => {
  let scenario;
  beforeEach(() => {
    scenario = new MoistureContent("A", "MT001", 300, 2859.6, 2525.7);
  });
  
  test("return result rounding to 0 when method A seleted", () => {
    const result = scenario.getWaterContent();
    expect(result).toBe(15);
  });
  
  test("return result rounding to 0.0 when method B seleted", () => {
    scenario = new MoistureContent("B", "MT001", 300, 2859.6, 2525.7);
    const result = scenario.getWaterContent();
    expect(result).toBe("15.0");
  });

  // error messages and funcion
   test("return warning message for missing or 0 tare mass", () => {
    scenario = new MoistureContent("B", "MT001", 0, 2859.6, 2525.7);
    // Mocking the console.log function
    // console.log = jest.fn();
    // scenario.getWaterContent();
    // expect(console.log).toHaveBeenCalledWith("Tare mass is expected, a missing or 0 tare mass may indicate an issue with the result");
    const result = scenario.getWaterContent();
    expect(result).toBe("Tare mass is expected, a missing or 0 tare mass may indicate an issue with the result");
  });
  
  test("return warning message and break calculation for Mass less than 0", () => {
    scenario = new MoistureContent("B", "MT001", -10, 2859.6, 2525.7);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Mass cannot be less than 0");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });
  
  test("return warning message and break calculation for mass less than 0", () => {
    scenario = new MoistureContent("B", "MT001", -10, 2859.6, 2525.7);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Mass cannot be less than 0");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });
  
  test("return warning message and break calculation for tare and wet mass lesser than tare mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 300, 2525.7);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Tare and wet mass must be greater than tare mass");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });
 
  test("return warning message and break calculation for tare mass is greater than tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 300);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Tare mass is greater than tare and dry material mass, cannot calculate a result");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });
  
  test("return warning message and break calculation for tare mass is equal to tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 400);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Tare mass is equal to tare and dry material mass, cannot calculate a result");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });
  
  test("return warning message and break calculation for Dry mass greater than wet mass, cannot calculate a result", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 3000);
    // Mocking the console.log function
    console.log = jest.fn();
    scenario.getWaterContent();
    expect(console.log).toHaveBeenCalledWith("Dry mass greater than wet mass, cannot calculate a result");
    const result = scenario.getWaterContent();
    expect(result).toBe(undefined);
  });

});

 

  