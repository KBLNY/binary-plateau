# binary-plateau
Algorithm returning the length of the longest binary plateau of any 32 bits number. Time Complexity θ(1) ; Space Complexity θ(1)


## Content
- [Context](#context)
- [Reasoning](#reasoning)
- [Solution](#solution)
- [Complexity Analysis](#complexity-analysis)
- [Testing](#testing)


## Context
A binary plateau within a positive integer N is any maximal sequence of consecutive ones in the binary representation of N.

For example, number 14 has binary representation 1110 and contains a binary plateau of length 3. The number 758 has binary representation 1011110110 and contains two binary plateaus: one of length 4 and one of length 2.

The goal is to write a function:
```
solution(n)
```
that, given a positive integer `n`, returns the length of its longest binary plateau. The function should return 0 if n doesn't contain a binary plateau.

For example, given `n = 125` the function should return 5, because n has binary representation 1111101 and so its longest binary gap is of length 5.

Assume that:
```
    n is an integer within the range [1 .. 2,147,483,647].
```
Complexity:
```
    expected worst-case time complexity is O(log(N));
    expected worst-case space complexity is O(1).
```
You may use any language of your choice for this exercice. You can provide examples and results.


## Reasoning
The writing of such function is driven by the following conditions:
- Unsigned integer, where the minimum is 1 and the maximum is 2^31
- expected worst-case time complexity is O(log(N));
- expected worst-case space complexity is O(1).

Since we want to identify the longest binary plateau, we have to iterate and "count" each digit of the number `n`. When we get a 1, add it to a counter, if we get a 0, keep in memory the longest plateau we ever seen. 

However, each number within the range [1 .. 2,147,483,647] aka [1..2^31] has 32 digits. Hence, there is no difference at applying our function `solution(n)` to 1 or to 2^31. Same number of digit, same time. 
The function `solution(n)` will finally have a `time complexity of Θ(1)`.

In addition, we only need a few variables to keep the result in memory.
The function `solution(n)` will finally have a `space complexity of Θ(1)`.


## Solution (one of many)

```
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
```

## Complexity Analysis
This solution iterates a 32-bits number until the number reaches 0, by shifting the target number. 
A 32 bits number always have 32 bits. 
Thus, the solution iterates the same number of time. 
The solution that checks the bit (`n & 1`) and shifts the number (`n >> 1`) has a time somplexity of `Θ(1)`, where the constant is 32.
Hence, the function `solution(n)` will finally have a `time complexity of Θ(1)`.

In this solution, two variables `number` are created (`longestPlateauCount` and `currentPlateauCount`).
These variables are not dependent of the number of time the solution iterates. 
These are allocated once, means each has a space complexity of `Θ(1)`.
Event if we have had a 64-bits number, the solution will always has these two variables.
Hence, the function `solution(n)` will finally have a `space complexity of Θ(1)`.


## Testing
1. Clone or download the project
2. Run `open index.html`
3. Click on the `Test 2^x numbers` button in order to test each 2 power numbers from power 1 to power 31. Click on the `Test 50 random numbers` to generate and test 50 numbers between 2^1 and 2^31 against the solution. 
