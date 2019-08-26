

function wakeDog(dogName, dogBreed) {
    let myStr = `Wake ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

function leashDog(dogName, dogBreed) {
    let myStr = `Leash ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

function walkToPark(dogName, dogBreed) {
    let myStr = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

function throwFrisbee(dogName, dogBreed) {
    let myStr = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

function walkHome(dogName, dogBreed) {
    let myStr = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

function unleashDog(dogName, dogBreed) {
    let myStr = `Unleash ${dogName} the ${dogBreed}`;
    console.log(myStr)
    return myStr
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed) {
    let myArray = []
    for (let i=0; i < routine.length; i++) {
        myArray[i] = routine[i](dogName, dogBreed)
    }
    return myArray
}