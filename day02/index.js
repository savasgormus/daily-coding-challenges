let text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.";

function splitter(text) {

    let arrayString = text.split(" ");
    let arrayNumber = [];

    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] > 150) 
        {
            arrayNumber.push(arrayString[i]);
        }
        arrayNumber.sort((a, b) => a - b);
    };
    return arrayNumber;
};

console.log(splitter(text));