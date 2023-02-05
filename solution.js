import Mathod from './method.js';
import Measurements from './measurements.js';
import Result from './result.js';
import errorHandler from './errorHandler.js';


export class MoistureContent {
  constructor(method = "B", tareId, tc, mcms, mcds, isInsufficientSampleMass = false, isNotDryingTemperature = false) {
    this.method = new Mathod(method);
    this.measurements = new Measurements(tareId, tc, mcms);
    this.dryMass = new Measurements(tc, mcds);
    this.result = new Result(tc, mcms, mcds, isInsufficientSampleMass, isNotDryingTemperature);
    this.isInsufficientSampleMass = isInsufficientSampleMass;
    this.isNotDryingTemperature = isNotDryingTemperature;
    this.tareId = tareId;
    this.tc = tc;
    this.mcms = mcms;
    this.mcds = mcds;
  }
  
  getMms() {
    const mms = this.measurements.caculateMms()
    return mms;
  }
  
  getMaterialDryMass() {
    const materialDryMass = this.dryMass.CaculateMaterialDryMass();
    return materialDryMass;
  }
  
  getResultReport() {
    const { tc, mcms, mcds } = this;
   
    errorHandler(tc, mcms, mcds);
    // Calculate the result and round it based on the method input  
    let waterContent = this.result.calculateWaterContent();
    waterContent = this.method.roundingCalculater(waterContent);

    const statement1 = this.result.checkInsufficientSampleMass();
    const statement2 = this.result.checkIsNotDryingTemperature();
    const report = `Water Conent: ${waterContent}\nSpecial Comment: ${statement1}\nDrying temperature: ${statement2}`
    return report;
  }
}



// example
const  scenario = new MoistureContent("A", "MT001", 300, 2859.6, 2525.7,null, true);
console.log(scenario.getResultReport())






