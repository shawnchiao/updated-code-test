import { MoistureContent } from './solution.js';
import { errorTable } from './errorHandler.js';

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
    console.warn = jest.fn();
    scenario.getWaterContent();
    expect(console.warn).toHaveBeenCalledWith(errorTable[0]);
  });
  
  test("Throw error with error message for Mass less than 0", () => {
    scenario = new MoistureContent("B", "MT001", -10, 2859.6, 2525.7);
    expect(() => {
      scenario.getWaterContent();  
     }).toThrow(errorTable[1])
  });

  test("Throw error with error message  for tare and wet mass lesser than tare mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 300, 2525.7);
    expect(() => {
      scenario.getWaterContent();  
     }).toThrow(errorTable[2])
  });
 
  test("Throw error with error message  for tare mass is greater than tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 300);
    expect(() => {
      scenario.getWaterContent();  
     }).toThrow(errorTable[3])
  });
  
  test("Throw error with error message  for tare mass is equal to tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 400);
    expect(() => {
      scenario.getWaterContent();  
     }).toThrow(errorTable[4])
  });
  
  test("Throw error with error message for Dry mass greater than wet mass, cannot calculate a result", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 3000);
    expect(() => {
      scenario.getWaterContent();  
     }).toThrow(errorTable[5])
  });

});

 

  