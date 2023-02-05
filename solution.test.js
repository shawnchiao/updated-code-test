import { MoistureContent } from './solution.js';
import { errorTable } from './errorHandler.js';

describe("MoistureContet", () => {
  let scenario;
  beforeEach(() => {
    scenario = new MoistureContent("A", "MT001", 300, 2859.6, 2525.7);
  });
  
  test("return result rounding to 0 when method A seleted", () => {
    const result = scenario.getResultReport();
    expect(result).toBe("Water Conent: 15\nSpecial Comment: Null\nDrying temperature: Null");
  });
  
  test("return result rounding to 0.0 when method B seleted", () => {
    scenario = new MoistureContent("B", "MT001", 300, 2859.6, 2525.7);
    const result = scenario.getResultReport();
    expect(result).toBe("Water Conent: 15.0\nSpecial Comment: Null\nDrying temperature: Null");
  });
  
  test("Show special commonet, when InsufficientSampleMass is ticked", () => {
    scenario = new MoistureContent("B", "MT001", 300, 2859.6, 2525.7, true);
    const result = scenario.getResultReport();
    expect(result).toBe("Water Conent: 15.0\nSpecial Comment: Specimen mass < minimum required\nDrying temperature: Null");
  });

  test("Show drying temperature, when NotDryingTemperature is ticked", () => {
    scenario = new MoistureContent("B", "MT001", 300, 2859.6, 2525.7, null , true);
    const result = scenario.getResultReport();
    expect(result).toBe("Water Conent: 15.0\nSpecial Comment: Null\nDrying temperature: 100°C");
  });

  test("Show both drying temperature and special comments, when NotDryingTemperature and InsufficientSampleMass are both ticked", () => {
    scenario = new MoistureContent("B", "MT001", 300, 2859.6, 2525.7, true , true);
    const result = scenario.getResultReport();
    expect(result).toBe("Water Conent: 15.0\nSpecial Comment: Specimen mass < minimum required\nDrying temperature: 100°C");
  });

  // error messages and funcion
   test("return warning message for missing or 0 tare mass", () => {
    scenario = new MoistureContent("B", "MT001", 0, 2859.6, 2525.7);
    // Mocking the console.warn function
    console.warn = jest.fn();
    scenario.getResultReport();
    expect(console.warn).toHaveBeenCalledWith(errorTable[0]);
  });
  
  test("Throw error with error message for Mass less than 0", () => {
    scenario = new MoistureContent("B", "MT001", -10, 2859.6, 2525.7);
    expect(() => {
      scenario.getResultReport();  
     }).toThrow(errorTable[1])
  });

  test("Throw error with error message  for tare and wet mass lesser than tare mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 300, 2525.7);
    expect(() => {
      scenario.getResultReport();  
     }).toThrow(errorTable[2])
  });
 
  test("Throw error with error message  for tare mass is greater than tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 300);
    expect(() => {
      scenario.getResultReport();  
     }).toThrow(errorTable[3])
  });
  
  test("Throw error with error message  for tare mass is equal to tare and dry material mass", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 400);
    expect(() => {
      scenario.getResultReport();  
     }).toThrow(errorTable[4])
  });
  
  test("Throw error with error message for Dry mass greater than wet mass, cannot calculate a result", () => {
    scenario = new MoistureContent("B", "MT001", 400, 2859.6, 3000);
    expect(() => {
      scenario.getResultReport();  
     }).toThrow(errorTable[5])
  });
  
  
});

 

  