//const { jest } = require('@jest/globals');  VS CODE AUTOCORRECT - PLEASE REMOVE
const axios = require('axios');
const { expect } = require('expect');
//const { beforeAll, beforeEach, afterEach, it } = require('jest-circus'); VS CODE AUTOCORRECT - PLEASE REMOVE
//const { test } = require('picomatch'); VS CODE AUTOCORRECT - PLEASE REMOVE
//const { describe } = require('yargs'); VS CODE AUTOCORRECT - PLEASE REMOVE
const getConstellationById = require('../src/main');
const url = `http://localhost:5000/constellations`;

describe('getConstellationById()',()=>{
    const expectedData = {
        id: 'ISlkF4G',
        name: 'Leo',
        meaning: 'Lion',
        starsWithPlanets: 19,
        quadrant: 'NQ2'
      };

      beforeEach(()=>{
          jest.spyOn(axios,"get");  //gives us access to know what is happening during a get request
      })

      afterEach(()=>{
          jest.clearAllMocks();  //clears out any mock requests after each test
      })

      test('should make a get request to the correct url', async()=>{
            const response = await getConstellationById('ISlkF4G'); //making the request
            let expectedUrl = `${url}/ISlkF4G`;  //the url the function should be using
            expect(axios.get).toHaveBeenCalledWith(expectedUrl);
      })
      test('should return the Leo constellation', async () => {
            axios.get.mockImplementation(()=>Promise.resolve(expectedData));//setting up 
            //for a mock request that will resolve with the data we would expect from the actual request
            const response = await getConstellationById('ISlkF4G'); // Making the request
            expect(response).toEqual(expectedData);//seeing if the expected data matches the data from the request
      })
})