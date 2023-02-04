# Moisture Content

A JavaScript class for calculating moisture content of a material using the weight method.

## Description

The MoistureContent class is a tool for determining the moisture content of a material using the weight method. It takes in several inputs such as the method of calculation, tare ID, tare mass, and the wet and dry masses of the material. The class also has methods for calculating the moisture content, material dry mass, and the mass of the material.

## Getting Started

1. Clone the repository or install it in your project by running `npm install moisture-content`
2. Make sure you have Node.js installed to run Javascript file in local machine. You can download and install the LTS version of Node.js from the official website: https://nodejs.org/en/download/
3. Create a new instance of the class on the solution.js, passing in the required parameters for the constructor: `method`, `tareId`, `tareMass`, `mcms`, and `mcds`.
5. Run the JavaScript file using Node.js by running the command `node solution.js`
6. Use the class methods to calculate the moisture content, material dry mass, and the mass of the material.
3. You can also import the class into your project by adding `const MoistureContent = require('moisture-content')`, and create a new instance to do the functions above.
4. To test the code, run `npm run test`

## Methods

  # `getMms()`

Calculates and returns the mass of the material.

  # `getMaterialDryMass()`

Calculates and returns the dry mass of the material.

  # `getWaterContent()`

Calculates and returns the moisture content of the material.

## Assumption

Please note that this is a prototype of the Moisture Content project and it is just a demonstration of the logic to showcase coding skill within a time frame. The actual functionality of the project will include many more inputs and variables, as well as additional features and user interface. 
