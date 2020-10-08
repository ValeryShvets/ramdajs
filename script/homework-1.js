"use strict";

const name = prompt ("Enter your name");
const age = prompt ("Enter your age");

const msgWarn = "Name has not been entered";

if (name === null || name === "") {
    alert (msgWarn);
} else {
    age;
}

if (age > 22) {
    alert(`Welcome ${name}`);
}

if (age < 18) {
    alert ("You are not allowed to visit this website");
} else if (age >= 18 && age <= 22) {
    const confirmation = confirm ("Are you sure you want to continue?");
    
    switch (confirmation) {
        case true: alert(`Welcome ${name}`);
            break;
            
            case false: alert("You are not allowed to visit this website");
    }
} 