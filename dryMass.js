const MockEquipmentList = [
  {
    "Equipment ID": "01BAL",
    "Manufacturer": "Honeywell",
    "Manufacture Date": "01-01-2020",
    "Purchase Date": "10-01-2020",
    "Last Maintenance": "10-12-2022",
  },
  {
    "Equipment ID": "03GAC",
    "Manufacturer": "Sony",
    "Manufacture Date": "01-04-2020",
    "Purchase Date": "10-05-2020",
    "Last Maintenance": "10-11-2022",
  },
]


export default class DryMass {
  constructor( tc, mcds, balance = MockEquipmentList[0]) {
    this.balance = balance;
    this.tc = tc;
    this.mcms = mcms;
  }
  // These two methods are used to connect to frontEnd for showing info
  getBalance() {
    return this.balance;
  }

  getMcds() {
    return this.mcds;
  }
  //
  
  CaculateMaterialDryMass() {
    const result = this.mcds - this.tc;
    return result;
  }
};