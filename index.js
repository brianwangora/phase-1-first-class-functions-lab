const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (arrayOfDrivers) {
    let firstTwoDrivers  = [`${arrayOfDrivers[0]}`, `${arrayOfDrivers[1]}`]
    return firstTwoDrivers
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    let lastTwoDrivers = [`${arrayOfDrivers[2]}`, `${arrayOfDrivers[3]}`]
        return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num1 = Number) {
    const fareMultiplier = (fare = Number) => {
        return num1 * fare;
    }
    return fareMultiplier
}

const fareDoubler = (fare = Number) => fare * 2

const fareTripler = (fare = Number) => fare * 3;

function selectDifferentDrivers (arrayOfDrivers, selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ) {
    arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    let firstTwoDrivers  = [`${arrayOfDrivers[0]}`, `${arrayOfDrivers[1]}`]
    let lastTwoDrivers = [`${arrayOfDrivers[2]}`, `${arrayOfDrivers[3]}`]
    if (selectingDrivers === returnFirstTwoDrivers) {
        return firstTwoDrivers
    } else { 
        if (selectingDrivers === returnLastTwoDrivers)
        return lastTwoDrivers
    }

    
}