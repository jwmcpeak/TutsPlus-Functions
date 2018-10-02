function sum(a, b) {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}


let sum2 = (a, b) => {
    console.log(arguments); // error: arguments is undefined
};