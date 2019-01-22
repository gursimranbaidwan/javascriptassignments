//"use strict";
let rooms = ["Single Room","Double Room","Suite"];// this is an array named rooms which stores string values in it
let rates = [89,109,169]; // this is an array named rates which stores numbers in it
let taxamount2 = .14 * rates[1];// this is an variable in which calculation is done with the string from a rates array
let taxamount1 = .14 * rates[0];// this is an variable in which calculation is done with the string from a rates array
let taxamount3 = .14 * rates[2];// this is an variable in which calculation is done with the string from a rates array
totalday1 = rates[0]+taxamount1;// this is an variable in which calculation is done using rates array and taxamoun1 variable.
totalday2 = rates[1]+taxamount2;// this is an variable in which calculation is done using rates array and taxamoun2 variable.
totalday3 = rates[2]+taxamount3;// this is an variable in which calculation is done using rates array and taxamoun3 variable.
document.getElementById("rates").innerHTML = // it gets an html id to work with and then it writes in an html page.
"Room Type: " + rooms[0] + " • " + "Rate: $ " + rates[0]+ " • " + "Tax: $" + taxamount1.toFixed(2) + " • "+ "Total per day: $" + totalday1.toFixed(2) + "<br>" + // this is concatenation which means adding variables and string and doing calculations with it.
"Room Type: " + rooms[1]+ " • " + "Rate: $" + rates[1]+ " • " + "Tax: $" + taxamount2.toFixed(2)+ " • " + "Total per day: $" + totalday2.toFixed(2) + "<br>" +
"Room Type: " + rooms[2]+ " • " + "Rate: $" + rates[2]+ " • " + "Tax: $" + taxamount3.toFixed(2)+ " • " + "Total per day: $" + totalday3.toFixed(2) + "<br>"
;
