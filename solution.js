import {roundingCalculater} from './method.js';

export class MoistureContent {
  constructor(method, tareId, tareMass, mcms, mcds) {
    this.method = method;
    this.tareId = tareId;
    this.tareMass = tareMass;
    this.mcms = mcms;
    this.mcds = mcds;
  }
  
  getMms() {
    const mms = this.mcms - this.tareMass;
    return mms;
  }
  
  getMaterialDryMass() {
    const materialDryMass = this.mcds - this.tareMass;
    return materialDryMass;
  }
  
  getWaterContent() {
    const {method, tareId, tareMass,mcms, mcds } = this;
    // Define warning messages using lookupTable
    const lookupTable = {
      0: "Tare mass is expected, a missing or 0 tare mass may indicate an issue with the result",
      1: "Mass cannot be less than 0",
      2: "Tare and wet mass must be greater than tare mass",
      3: "Tare mass is greater than tare and dry material mass, cannot calculate a result",
      4: "Tare mass is equal to tare and dry material mass, cannot calculate a result",
      5: "Dry mass greater than wet mass, cannot calculate a result"
    }
    // Assign error code based on the inputs
    let errorCode;
    if (tareMass === 0 || (tareMass === null && mcms && mcds)) {
        errorCode = 0;
    } else if (tareMass < 0 || mcms < 0 || mcds < 0) {
        errorCode = 1;
    } else if (tareMass >= mcms) {
        errorCode = 2;
    } else if (tareMass > mcds) {
        errorCode = 3;
    } else if (tareMass === mcds) {
      errorCode = 4; 
    }else if (mcds > mcms) {
        errorCode = 5;
    }
    
    console.log(lookupTable[errorCode]);

    // For danger inputs, break the calculation
    if(errorCode > 0) {
      return
    }
    // Calculate the result and round it based on the method input  
    let result = (mcms - mcds)/(mcds - tareMass)* 100;
    result = roundingCalculater(method, result);
    return result;
  }
}



// example
const  scenario = new MoistureContent("A", "MT001", 300, 2859.6, 2525.7);
 console.log( scenario.getWaterContent())






