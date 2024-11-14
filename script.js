// FUNCTIONS, SWITCH 
// STATEMENTS, WHILE… DO WHILE LOOPS
//Assignment # 38-44

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.


function calculatePower() {
    const base = parseFloat(document.getElementById("base").value);
    const exponent = parseInt(document.getElementById("exponent").value);
    const results =document.getElementsByClassName("result")[0];

    //USER DIDNT FILL INPUT SO...
    if (isNaN(base) || isNaN(exponent)) {
        results.textContent = `RESULT : Please enter the valid number for base and exponent`;  
    }

    // Calculate the result using the exponentiation operator
    const result = base ** exponent;
    results.textContent = `RESULT : ${result}`;
}

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 

function checkYear(){
    const year = document.getElementById('year').value;
    const comment = document.getElementsByClassName('result')[1];
    

    if((year % 4===0 && year % 100 !== 0) ||(year % 400 === 0)){
       comment.textContent=`RESULT : ${year} is a leap year !`
    }
    else{
        comment.textContent=`RESULT : ${year} is not a leap year !`
    }

    
}


// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2


function calculateArea(){
    const a =parseFloat(document.getElementById('Side-A').value) ;
    const b =parseFloat(document.getElementById('Side-B').value) ;
    const c =parseFloat(document.getElementById('Side-C').value) ;
    const cal = document.getElementsByClassName('result')[2];

    if(isNaN(a)||isNaN(b) || isNaN(c) || a <=0 || b <=0 || c <=0){
        cal.textContent= `RESULT : Please enter a valid number !;`;
        return;
    }

    let S = (a + b + c) / 2;
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    cal.textContent=`RESULT : The area of the triangle is: ${area.toFixed(2)} square units.`;


}


// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction

function mainFunction() {
    const mark1 = parseFloat(document.getElementById('mark1').value);
    const mark2 = parseFloat(document.getElementById('mark2').value);
    const mark3 = parseFloat(document.getElementById('mark3').value);
    const result =document.getElementsByClassName('result')[3];

    
    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3) || mark1 < 0 || mark2 < 0 || mark3 < 0) {
       result.textContent = 'RESULT : Please enter valid marks for all subjects.';
        return;  
    }

    //call function
    const avg = average(mark1, mark2, mark3);
    const perc = percentage(mark1, mark2, mark3);

    
    result.textContent = `RESULT : Average: ${avg.toFixed(2)}\nPercentage: ${perc.toFixed(2)}%`;
}

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

//percentage calculation
function percentage(m1, m2, m3) {
    const totalMarks = 300;
    const obtainedMarks = m1 + m2 + m3;
    return (obtainedMarks / totalMarks) * 100;
}


// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; // char found
        }
    }
    return -1; // char not found
}

function findCharacterIndex() {

    const str = document.getElementById('String').value;
    const char = document.getElementById('Char').value;
   const results =  document.getElementsByClassName('result')[4];

    if (char.length !== 1) {
       results.textContent = " RESULT : Please enter a single character to search.";
        return;
    }

    if (str === "") {
       results.textContent = "RESULT : Please enter a string to search in.";
        return;
    }

    // Call the custom indexOf function and display the result
    const index = customIndexOf(str, char);
    if (index === -1) {
       results.textContent = `"${char}" RESULT : not found in the string.`;
    } else {
        results.textContent = `"${char}"RESULT : found at index ${index} in the string.`;
    }
}

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.


function removeVowels() {
    const sentence = document.getElementById('sentence').value;
    const vowelResult = document.getElementsByClassName('result')[5]

    if (sentence === "") {
        document.getElementById('result').textContent = "RESULT : Please enter a sentence.";
        return;
    }
    const result = sentence.replace(/[aeiouAEIOU]/g, "");

    
   vowelResult.textContent = `RESULT : Sentence without vowels: ${result}`;
}


// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

function countVowels() {
    const text = document.getElementById('Text').value;
    const result=document.getElementsByClassName('result')[6];
    const vowels = "aeiouAEIOU";
    let count = 0;

    
    if (text === "") {
       result.textContent = "RESULT: Please enter some text.";
        return;
    }
    for (let i = 0; i < text.length - 1; i++) {
        let currentChar = text[i];
        let nextChar = text[i + 1];
        switch (true) {
            case (vowels.includes(currentChar) && vowels.includes(nextChar)):
                count++; 
                break;
            default:
                break;
        }
    }
    result.textContent = `RESULT: Number of consecutive vowel pairs: ${count}`;
}


// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

function convertDistance() {
    const km = parseFloat(document.getElementById('kilometers').value);

    if (isNaN(km) || km <= 0) {
        alert("Please enter a valid positive number for kilometers.");
        return;
    }

    //RESULT BY CALL BELOW FUNCTIONS
    const meters = kmToMeters(km);
    const feet = kmToFeet(km);
    const inches = kmToInches(km);
    const centimeters = kmToCentimeters(km);

    document.getElementById('meters').textContent = `1) ${km} km = ${meters} meters`;
    document.getElementById('feet').textContent = `2) ${km} km = ${feet} feet`;
    document.getElementById('inches').textContent = `3) ${km} km = ${inches} inches`;
    document.getElementById('centimeters').textContent = `4) ${km} km = ${centimeters} centimeters`;
}

 // Function to convert kilometers to meters
 function kmToMeters(km) {
    return km * 1000;
}

// Function to convert kilometers to feet
function kmToFeet(km) {
    return km * 3280.84;
}

// Function to convert kilometers to inches
function kmToInches(km) {
    return km * 39370.1;
}

// Function to convert kilometers to centimeters
function kmToCentimeters(km) {
    return km * 100000;
}


// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour

function calculateOvertime() {
    
    const hoursWorked = parseInt(document.getElementById('hoursWorked').value);
    const pay = document.getElementsByClassName('result')[7];

    if (isNaN(hoursWorked) || hoursWorked < 0) {
       pay.textContent = "RESULT : Please enter a valid number of hours.";
        return;
    }

    //RATE
    const overtimeRate = 12.00;
    const regularHours = 40;

    let overtimeHours = 0;
    let overtimePay = 0;

    // Check if the employee worked more than 40 hours
    if (hoursWorked > regularHours) {
        overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }
    if (overtimeHours > 0) {
        pay.textContent = `RESULT : Regular Hours: 40 hours\nOvertime Hours: ${overtimeHours} hours\nOvertime Pay: Rs. ${overtimePay.toFixed(2)}`;
    } else {
       pay.textContent = `RESULT : Regular Hours: ${hoursWorked} hours\nNo Overtime Pay`;
    }
}

// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

function calculateNotes() {
    let amount = parseInt(document.getElementById('amount').value);
    const notes = document.getElementsByClassName('result')[8];

    if (isNaN(amount) || amount <= 0 || amount % 100 !== 0) {
        notes.textContent = "Please enter a valid amount (multiple of 100).";
        return;
    }

    // Initialize variables to hold the count of each denomination
    let notes100 = 0, notes50 = 0, notes10 = 0;

    // Calculate the number of 100 denomination notes
    if (amount >= 100) {
        notes100 = Math.floor(amount / 100);
        amount -= notes100 * 100;  // Subtract the value of 100 denomination notes
    }

    // Calculate the number of 50 denomination notes
    if (amount >= 50) {
        notes50 = Math.floor(amount / 50);
        amount -= notes50 * 50;  // Subtract the value of 50 denomination notes
    }

    // Calculate the number of 10 denomination notes
    if (amount >= 10) {
        notes10 = Math.floor(amount / 10);
        amount -= notes10 * 10;  // Subtract the value of 10 denomination notes
    }

    // Display the result
   notes.textContent = 
        ` RESULT : Notes of 100: ${notes100}\n` +
        `Notes of 50: ${notes50}\n` +
        `Notes of 10: ${notes10}`;
}