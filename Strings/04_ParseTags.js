//Problem 4. Parse tags
//
//You are given a text. Write a function that changes the text in all regions:
//
//<upcase>text</upcase> to uppercase.
//<lowcase>text</lowcase> to lowercase
//<mixcase>text</mixcase> to mix casing(random)

var text = '\We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>ANYTHING</lowcase> else.';

console.log(text);

function parseTags(text){
    var i,
        openTag = '<',
        endTag = '>',
        changeFunction,
        tags = ['\<upcase>', '\<lowcase>', '\<mixcase>', '\</upcase>', '\</lowcase>', '\</mixcase>'],
        index = text.indexOf(openTag),
        textToChange,
        endTagIndex = text.indexOf(endTag),
        randomResult,
        rnd,
        rndLetter;

    while (index >= 0){
        if (index !== -1){
            changeFunction = text.substring(index + 1, endTagIndex);
            textToChange = text.substring(endTagIndex + 1, text.indexOf(openTag, endTagIndex + 2));
            switch (changeFunction){
                case 'upcase': text = text.replace(textToChange, textToChange.toUpperCase()); break;
                case 'lowcase': text = text.replace(textToChange, textToChange.toLowerCase()); break;
                case 'mixcase':
                    randomResult = '';
                    for (var j = 0; j < textToChange.length; j += 1){
                        rnd = Math.random();
                        rndLetter = rnd > 0.5 ? textToChange[j].toUpperCase() : textToChange[j].toLowerCase();
                        randomResult += rndLetter;
                }
                    text = text.replace(textToChange, randomResult); break;
            }
        }
        index = text.indexOf(openTag, index + 1);
        endTagIndex = text.indexOf(endTag, endTagIndex + 1);
    }
    for (i = 0; i < tags.length; i += 1) {
        text = text.replace(new RegExp(tags[i], 'g'), '');
    }
    return text;
}
console.log(parseTags(text));