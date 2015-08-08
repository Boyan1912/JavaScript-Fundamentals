//Problem 2. HTML binding
//
//Write a function that puts the value of an object into the content/attributes of HTML tags.
//    Add the function to the String.prototype

String.prototype.myBind = function(obj){
    var htmlAttributes = this.match(/data-bind-\w+="\w+"/);
    for (var i = 0; i < htmlAttributes.length; i++) {
        var attr = htmlAttributes[i].substring(htmlAttributes[i].indexOf('"'), htmlAttributes[i].length - 1);


    }



};
var str = '<div data-bind-content="name"></div>';
console.log(str.search(/<.+">/));
console.log(str.myBind());

