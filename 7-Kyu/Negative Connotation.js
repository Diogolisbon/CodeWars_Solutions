/*
Description:
You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same),
// you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
*/


function connotation(str) {
    let posiCount = 0;
    let negaCount = 0;

    const strSplited = str.split(" ");

    for (let i = 0; i < strSplited.length; i++) {
        const word = strSplited[i];

        let alphaPos = 0;

        for (let j = 0; j < word.length; j++) {
            if ((word[j] >= "a" && word[j] >= "A" ) || (word[j] <=  "m" && word[j] <= "M")) {
                alphaPos += 1;
            }
        }
        if (alphaPos >= word.length / 2) {
            posiCount += 1;
        } else {
            negaCount += 1;
        }
    }

    return posiCount >= negaCount;
}

console.log(connotation("Xylophones can obtain Xenon."));
