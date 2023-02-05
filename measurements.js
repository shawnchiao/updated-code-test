
export default class Measurements {
  constructor(tareId, tc, mcms) {
    this.tareId = tareId;
    this.tc = tc;
    this.mcms = mcms;
  }
  // These three methods are used to connect to frontEnd for showing info
  getTareId() {
    return this.tareID;
  }

  getTc() {
    return this.tc;
  }

  getMcms() {
    return this.mcms;
  }
  //

  caculateMms() {
    const result = this.mcms - this.tc;
    return result;
  }
}