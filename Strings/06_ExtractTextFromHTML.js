////Problem 6. Extract text from HTML
////
////Write a function that extracts the content of a html page given as text.
////    The function should return anything that is in a tag, without the tags.
//
var text = '<html>\
    <head>\
    <title>Sample site</title>\
</head>\
<body>\
<div>text\
<div>more text</div>\
and more...\
</div>\
in body\
</body>\
</html>';
console.log(text);
function extractFromHTML(text){
    return text.replace(/<\/?\w+>/g, '').trim();
    }
console.log(extractFromHTML(text));