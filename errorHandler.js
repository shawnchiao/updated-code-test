 // Define warning messages using lookupTable
 export const errorTable = {
  0: "Tare mass is expected, a missing or 0 tare mass may indicate an issue with the result",
  1: "Mass cannot be less than 0",
  2: "Tare and wet mass must be greater than tare mass",
  3: "Tare mass is greater than tare and dry material mass, cannot calculate a result",
  4: "Tare mass is equal to tare and dry material mass, cannot calculate a result",
  5: "Dry mass greater than wet mass, cannot calculate a result"
}

const errorHandler = (tareMass, mcms, mcds) => {
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
  
  // main logic
  if(errorCode === 0) {
    return console.warn(errorTable[errorCode])
  } else if (errorCode > 0) {
    throw new Error(errorTable[errorCode])
  }
};

export default errorHandler;