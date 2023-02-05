import {roundingCalculater} from './method.js';
import errorHandler from './errorHandler.js';

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
    const {method, tareId, tareMass, mcms, mcds } = this;
  
    errorHandler(tareMass, mcms, mcds);
    // Calculate the result and round it based on the method input  
    let result = (mcms - mcds)/(mcds - tareMass)* 100;
    result = roundingCalculater(method, result);
    return result;
  }
}



// example
const  scenario = new MoistureContent("A", "MT001", 300, 2859.6, 2525.7);
 console.log( scenario.getWaterContent())






