const removeChar = (str) => {

    let arrayChar = str.split("");

    arrayChar.pop();
    arrayChar.shift();
    arrayChar = arrayChar.join("");

    return arrayChar;
}
