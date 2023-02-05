

export default class Result {
  constructor(tc, mcms, mcds, isInsufficientSampleMass , isNotDryingTemperature ) {
    this.tc = tc;
    this.mcms = mcms;
    this.mcds = mcds
    this.isInsufficientSampleMass = isInsufficientSampleMass;
    this.isNotDryingTemperature = isNotDryingTemperature;
  }

  checkInsufficientSampleMass () {
    if (this.isInsufficientSampleMass) {
      return "Specimen mass < minimum required";
    };
  }

  checkIsNotDryingTemperature () {
    if (this.isNotDryingTemperature) {
      return "100°C" //dummy data//
    }
  }

  calculateWaterContent () {
    const waterContent = (this.mcms - this.mcds)/(this.mcds - this.tc)* 100;
    return waterContent;
  }

};