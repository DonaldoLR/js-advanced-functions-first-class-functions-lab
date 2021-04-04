// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    const newArray = [array[0], array[1]];
    
    return newArray;
}

const returnLastTwoDrivers = function(array){
    const newArray = array.slice(array.length-2);

    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int){
    return (fare) => fare * int;
}

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;

const selectDifferentDrivers = function(arrayOfDrivers, action){
    if (action === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (action === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}