/**
 * 
 * Given the input, write an algorithm that prints a year with the greatest number of people living simultaneously.

Input: Each new line of the input contains a person’s birth and death year. The birth year is in the first position, followed by the death year. The values in these pairs are separated by a comma and then a space. See the sample input for illustration.

Output: Print a year that has the greatest number of people alive simultaneously. (inclusive) If the greatest number of people living in a year is shared by multiple years, print the latest year found.

Sample Input (ASCII format):

1930, 1963
1940, 1967
1950, 1978
1960, 2000

Sample Output:
1963
 */

function writeOutput(inputData) {
  // Start writing code here to consume input, and return result.
  const sortedInput = sortData(inputData);
  const masterYears = createMasterYears(sortedInput);
  let highestCountYear = getHighestOccurenceByYear(masterYears);

  return highestCountYear;
}

/**
 *
 * @param {string} inputData
 * @returns {array}
 */
function sortData(inputData) {
  const data = [];
  const allYears = [];
  const newInputData = inputData.replace(/\s/g, "");
  const finalInputData = newInputData.replace(/,/g, "");
  const length = finalInputData.length;
  for (let i = 0; i < length; i += 4) {
    allYears.push(Number(finalInputData.slice(i, i + 4)));
  }

  for (let j = 0; j < allYears.length; j += 2) {
    let x = j;
    let y = x + 1;
    data.push({ birthyear: allYears[x], deathYear: allYears[y] });
  }
  return data;
}

/**
 *
 * @param {array} data
 * @returns {array}
 */
function createMasterYears(data) {
  let masterArray = [];

  for (let k = 0; k < data.length; k++) {
    let tempArray = createYears(data[k].birthyear, data[k].deathYear);
    masterArray.push(...tempArray);
  }

  return masterArray;
}

/**
 *
 * @param {Number} startYear
 * @param {Number} endYear
 * @returns {Array}
 */
function createYears(startYear, endYear) {
  return Array(endYear - startYear + 1)
    .fill()
    .map((item, index) => startYear + index);
}

/**
 *
 * @param {Array} years
 * @returns {Object}
 */
function yearFrequency(years) {
  let list = {};
  years.map((item) => (list[item] ? list[item]++ : (list[item] = 1)));
  return list;
}

/**
 *
 * @param {Array} masterArray
 * @returns {Number}
 */
function getHighestOccurenceByYear(masterArray) {
  let sortedDataObject = yearFrequency(masterArray);
  console.log("sortedDataObject:" + JSON.stringify(sortedDataObject));

  let sortedYears = Object.keys(sortedDataObject);
  let sortedOccurances = Object.values(sortedDataObject);

  let highestOccurances = Math.max(...sortedOccurances);
  console.log(`highestOccurance: ${highestOccurances}`);

  let yearIndex = sortedOccurances.lastIndexOf(highestOccurances);
  console.log(`yearIndex: ${yearIndex}`);
  console.log("year:" + Number(sortedYears[yearIndex]));

  return Number(sortedYears[yearIndex]);
}

const input = "1930, 1963 1940, 1967 1950, 1978 1960, 2000";

//expected output 1963
let output = writeOutput(input);
console.log(output);
