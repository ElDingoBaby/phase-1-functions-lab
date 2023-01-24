// Code your solution in this file!
const scuberHq = 42
const blocksDistanceInFeet = 264


function distanceFromHqInBlocks(someValue) {
    let numberOfBlocks = Math.abs(scuberHq - someValue)
    return numberOfBlocks

}


function distanceFromHqInFeet(someValue) {
    let distanceInFeet = Math.abs(scuberHq - someValue) * blocksDistanceInFeet
    return distanceInFeet

}

function distanceTravelledInFeet(start, destination) {
    let totesDistanceInFeet = Math.abs(start - destination) * blocksDistanceInFeet
    return totesDistanceInFeet
}

function calculatesFarePrice(start, destination) {
    let fareCost = Math.abs(start - destination) * blocksDistanceInFeet;
    if (fareCost < 400) {
        return fareCost = 0
    } else if (fareCost < 2000) {
        fareCost = Math.abs(fareCost - 400) * 0.02
        return fareCost
    } else if (fareCost < 2500) {
        fareCost = Math.abs(fareCost - 400)
        return fareCost = 25
    } else if (fareCost > 2500) {
        fareCost = Math.abs(fareCost - 400)
        return `cannot travel that far`
    }

}