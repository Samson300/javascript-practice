console.log("Do you copy?");
console.log("Roger");

function translate(originalString) {
    const leetDictionary = {
        A:  "4",
        E:  "3",
        G:  "6",
        I:  "1",
        O:  "0",
        S:  "5",
        T:  "7",
    };
    let result = "";
    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter]) {
            result += leetDictionary[theLetter];
        } else {
            result += theLetter;
        }
    }
    return result;
}
console.log(translate("hello dog"));