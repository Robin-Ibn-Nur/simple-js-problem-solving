/*----------------------
Problem:1 radianToDegree
----------------------*/
function radianToDegree(radian) {
    const convertDegree = radian * 57.2958;
    const returnValue = parseFloat(convertDegree.toFixed(2));
    if (radian !== 60) {
        return "Please inter a valid number";
    }
    return returnValue;
}
/*
const firstRadian = 10;
const firstDegree = radianToDegree(firstRadian);
*/
/*--------------------------
Problem: 2 isJavaScriptFile
---------------------------*/
function isJavaScriptFile(jsFile) {
    if (jsFile !== 'string') {
        return 'Please enter a string';
    } else if (jsFile.endsWith('.js') !== jsFile.endsWith('.png')) {
        return true;
    }
    else {
        return false;
    }
}
/*
const values = 'index.js, app.js, js.png, image.js.png, image.jpg.js';
const callFunction = isJavaScriptFile(values);
*/
/*-----------------
Problem 3: oilPrice
------------------*/
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const perLiterDiesel = 114;
    const perLiterPetrol = 130;
    const perLitreOctane = 135;
    if (typeof dieselQuantity && petrolQuantity && octaneQuantity !== 'number') {
        return 'Please inter a valid number'
    }
    const diesel = dieselQuantity * perLiterDiesel;
    const petrol = petrolQuantity * perLiterPetrol;
    const octane = octaneQuantity * perLitreOctane;
    const totalCost = diesel + petrol + octane;
    return totalCost;
}
/*
const totalCost = oilPrice(30, 20, 10);
*/
/*----------------------
Problem 4: publicBusFare
-----------------------*/
function publicBusFare(people) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusTicketPrice = 250;
    if (people !== 500) {
        return 'Please input a valid number'
    }
    const bigBusNeeded = people % busCapacity;
    const microBusNeeded = bigBusNeeded % microBusCapacity;
    const totalPublicBusCost = microBusNeeded * publicBusTicketPrice;
    return totalPublicBusCost;
}
/*
const peopleCount = publicBusFare(50);
*/
/*---------------------
Problem 5: isBestFriend
----------------------*/
function isBestFriend(a, b) {
    if (typeof a, b !== 'object') {
        return 'please provide a object'
    } else if ((a.name, b.name) == (b.friend, a.friend)) {
        return true;
    } else {
        return false;
    }
}
/*
let friend = { name: 'doe', friend: 'alex' };
let dushmon = { name: 'john', friend: 'doe' };
const friends = isBestFriend(friend, dushmon);
*/