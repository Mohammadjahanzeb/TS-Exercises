"use strict";
// Hello Admin: Make a array of five or more username, including the name 'admin'.
//imagin you are writing code that will print a greeting to each user after they log in to a website.
//Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const userName = ['admin', 'Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}
