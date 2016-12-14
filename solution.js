function solution(n) {
    // Initialize a return value for the longest plateau
    var longestPlateauCount = 0; 
    // Initialize a working counter
    var currentPlateauCount = 0;
  
    // We will check each digit one by one, starting at the right side 
    while (n > 0) { 
        if (n & 1 == 1) {
            // The rightmost digit is a 1, increment our counter 
            currentPlateauCount++; 
        } else { 
            // The rightmost digit is a 0
            // Keep in memory the longest plateau we have saw between the previous longest plateau `longestPlateauCount` and the current plateau `currentPlateauCount`
            longestPlateauCount = Math.max(currentPlateauCount, longestPlateauCount);

            // Reset our counter to be started counting another new plateau   
            currentPlateauCount = 0;
        }
      
        // Shift the rightmost digit
        n = n >> 1;
    }

    // Select the final longest plateau
    longestPlateauCount = Math.max(currentPlateauCount, longestPlateauCount);

    // Return the final longest plateau
    return longestPlateauCount;
}

function testSolution(n) {
    const startTime = performance.now();
    const count = solution(n);
    const endTime = performance.now();
    const result = "Call Solution(" + n + ") took " + (endTime - startTime) + " milliseconds. The longest plateau counts " + count + " ones.";
    console.log(result);
    const rootElement = document.getElementById("root");
    rootElement.innerHTML += "<br />" + result;
}

function testSolution2Powers() {
    for (var i = 0; i < 31; i++) {
        testSolution(2**i);
    }
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function testSolutionRandom50() {
    for (var i = 0; i < 50; i++) {
        const randomNumber = getRandomIntInclusive(2**1, 2**31);
        testSolution(randomNumber);
    }
}