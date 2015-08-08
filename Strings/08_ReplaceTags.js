//Problem 8. Replace tags
//
//Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

var input = '\<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. ' +
    '\Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

function replaceTags(input){
    var output = input.replace(new RegExp('\<a href="', 'g'), '[URL=');
    output = output.replace(new RegExp('\</a>','g'), '[/URL]');
    output = output.replace(/">/g, ']');
    return output;
}
console.log(replaceTags(input));
