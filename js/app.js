{
    // 1 - code (Sum Arrays)
    // Sharti: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

    function sum (numbers) {
        return numbers.reduce((sum, num) => sum + num, 0)
    }
}

{
    // 2 - code (Invert values)
    // Sharti: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. 

    function invert(array) {
        return array.map(i => -i);
    }
}

{
    // 3 - code (Sentence Smash)
    // Sharti: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    function smash (words) {
        return words.join(" ")
    }
}

{
    // 4 - code (Beginner - Reduce but Grow)
    // Sharti: Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

    function grow(x){
        return x.reduce((sum, num) => sum * num)
    }
}

{
    // 5 - code (How good are you really?)
    // Sharti: There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return true if you're better, else false!

    function betterThanAverage(classPoints, yourPoints) {
        const total = classPoints.reduce((sum, point) => sum + point, 0);
        const average = total / classPoints.length;
        return yourPoints > average;
    }
}

{
    // 6 - code (Is he gonna survive?)
    // Sharti: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

    function hero(bullets, dragons){
        return bullets >= dragons * 2;
    }
}

{
    // 7 - code (Will you make it?)
    // Sharti: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Function should return true if it is possible and false if not.
    
    const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        return distanceToPump <= mpg * fuelLeft
    }
}

{
    // 8 - code (Find Maximum and Minimum Values of a List)
    // Sharti: Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

    var min = function(list){
        list.sort((a, b) => a - b)
        return list[0];
    }
    var max = function(list){
        list.sort((a, b) => b - a)
        return list[0];
    }
}

{
    // 9 - code (You only need one - Beginner)
    // Sharti: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. a can contain numbers or strings. x can be either. Return true if the array contains the value, false if not.

    function check(a, x) {
        return a.includes(x)
    }
}

{
    // 10 - code (Fake Binary)
    // Sharti: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    function fakeBin(x){
        return x.split("").map(i => i >= 5 ? 1 : 0).join("")
    }
}

{
    // 11 - code (Convert a string to an array)
    // Sharti: Write a function to split a string and convert it into an array of words.

    function stringToArray(string){
        return string.split(" ")
    }
}

{
    // 12 - code (Count by X)
    // Sharti: Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0.

    function countBy(x, n) {
        let z = [];
        for (let i = 1; i <= n; i++) {
            z.push(x * i);
        }
        return z;
    }
}

{
    // 13 - code (Reversed sequence)
    // Sharti: Build a function that returns an array of integers from n to 1 where n>0.

    const reverseSeq = n => {
        let arr = [];
        for (let i = n; i >= 1; i--) {
            arr.push(i);
        }
        return arr;
    }
}

{
    // 14 - code (Rock Paper Scissors!)
    // Sharti: Let's play! You have to return which player won! In case of a draw return Draw!.

    const rps = (p1, p2) => {
        if(p1 == p2) return "Draw!"
        const wins = {
            rock: "scissors",
            scissors: "paper",
            paper: "rock"
        }
        return wins[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
    }
}

{
    // 15 - code (If you can't sleep, just count sheep!!)
    // Sharti: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

    var countSheep = function (num) {
        let str = "";
        for (let i = 1; i <= num; i++) {
            str += `${i} sheep...`;
        }
        return str;
    }
}

{
    // 16 - code (Is n divisible by x and y?)
    // Sharti: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

    function isDivisible(n, x, y) {
        return n % x == 0 && n % y == 0
    }
}

{
    // 17 - code (Quarter of the year)
    // Sharti: Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

    const quarterOf = (month) => {
        return Math.ceil(month / 3);
    }
}

{
    // 18 - code (Remove exclamation marks)
    // Sharti: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

    function removeExclamationMarks(s) {
        return s.replace(/!/g, '');
    }
}

{
    // 19 - code (Jenny's secret message)
    // Sharti: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

    function greet(name){
        return name == "Johnny" ? `Hello, my love!` : `Hello, ${name}!`
    }
}

{
    // 20 - code (Thinkful - Logic Drills: Traffic light)
    // Sharti: You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

    function updateLight(current) {
        if(current == "green") return "yellow"
        else if(current == "yellow") return "red"
        else return "green"
    }
}

{
    // 21 - code (Create Phone Number)
    // Sharti: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

    function createPhoneNumber(numbers){
        let code = numbers.slice(0, 3).join("")
        let mid = numbers.slice(3, 6).join("")
        let end = numbers.slice(6).join("")
        return `(${code}) ${mid}-${end}`
    }
}

{
    // 22 - code (Find the odd int)
    // Sharti: Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

    function findOdd(A) {
        return A.reduce((sum, num) => sum ^ num, 0);
    }
}

{
    // 23 - code (Array.diff)
    // Sharti: Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

    function arrayDiff(a, b) {
        return a.filter(item => !b.includes(item));
    }
}

{
    // 24 - code (Split Strings)
    // Sharti: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_'). 
    // ex: 'abc' =>  ['ab', 'c_']

    function solution(str) {
        if (str.length % 2 !== 0) {
            str += '_'
        }
        let result = []
        for (let i = 0; i < str.length; i += 2) {
            result.push(str[i] + str[i + 1])
        }
        return result
    }
}