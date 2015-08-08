//Problem 3. Sub-string in text
//
//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).


var text = "The text is as follows: We are living in an yellow submarine. We don't have anything else. " +
    "inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";

function stringOccurance(text, searchTerm){
    text = text.toLowerCase();
    searchTerm = searchTerm.toLowerCase();
    var index = text.indexOf(searchTerm),
        count = 0;
    while (index >= 0){
        index = text.indexOf(searchTerm, index + searchTerm.length);
        count += 1;
    }
    return count;
}
console.log(stringOccurance(text, 'in'));