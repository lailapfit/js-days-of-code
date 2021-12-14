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
    // object that keeps a tally of the number people alive along with their death year
    let tally = { total: 0, death: 0 };

    // create a sorted object from input data
    let person = createSortedData(inputData);

    // Evaluate each death date with the others
    // and break when the tally total > numberOfPeopleAlive per year.
    for (const p of Object.keys(person)) {
        let numberOfPeopleAlive = numberOfPeopleAliveByYear(p, person);
        if (numberOfPeopleAlive > tally.total) {
            tally.total = numberOfPeopleAlive;
            tally.death = person[p].death;
        } else if (numberOfPeopleAlive < tally.total && tally.total != 0) {
            break;
        }
    }
    return tally.death;
}

/**
 * 
 * @param {string} inputData is the input string
 * @returns {Object} people is sorted object from the input string
 */
function createSortedData(inputData) {
    let people = {};

    const peopleArr = inputData.split('\n');
    if (peopleArr.length > 0) {
        peopleArr.forEach(person => {
            let personArr = person.split(',');
            // validate each string has , and can be split into two
            if (personArr.length == 2) {
                // getting rid of unwanted whitespaces 
                let p = { born: personArr[0].trim(), death: personArr[1].trim() };
                people[personArr[1].trim()] = p;
            }
        });
    }
    console.log(`createSortedData: ${JSON.stringify(people)}`);
    return people;
}

/**
 * Calculate the number of people alive by input year
 * @param {string} year 
 * @param {object} person 
 * @returns {Number} total of people alive by the year
 */
function numberOfPeopleAliveByYear(year, person) {
    let peopleAlive = 0;
    for (const p of Object.keys(person)) {
        if (isAlive(year, person[p].born, person[p].death)) {
            peopleAlive++;
        }
    }
    console.log(`numberOfPeopleAlive by year ${year}: ${peopleAlive}`);
    return peopleAlive;
}

/**
 * Evaluate if a person is alive between 2 specific timeframe by their death year
 * @param {string} deathYear1 
 * @param {string} bornYear2 
 * @param {string} deathYear2 
 * @returns {boolean} true if deathYear1 is between bornYear2 and deathYear2, else false
 */
function isAlive(deathYear1, bornYear2, deathYear2) {
    return Number(deathYear1) >= Number(bornYear2) && Number(deathYear1) <= Number(deathYear2);
}

const years = `
1960, 2000
1940, 1967
1920, 1965
1910, 1988
1930, 1963
1950, 1978`;

let greatestNumberOfPeopleAliveInYear = writeOutput(years);
console.log(`Greatest number of people alive is in year: ${greatestNumberOfPeopleAliveInYear}`);
