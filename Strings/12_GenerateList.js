//12. Generate list
//
//Write a function that creates a HTML <ul> using a template for every HTML <li>.
//The source of the list should be an array of elements.
//    Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

var html = '<strong>-{name}-</strong> <span>-{age}-</span>',
    people = [{name: 'Pesho', age:14}, {name: 'Gosho', age: 18}, {name: 'Maria', age: 16}];

function generateList(html, people){
    var placeHolders = html.match(/{\w+}/g),
        propHTML,
        i,
        j,
        htmlresult = '',
        result = '';
    for (i = 0; i < placeHolders.length; i++) {
        propHTML = placeHolders.pop();
        propHTML = propHTML.replace('{', '');
        propHTML = propHTML.replace('}', '');
        placeHolders.unshift(propHTML);
    }
    for (i = 0; i < people.length; i++) {
        htmlresult = html;
        for (j = 0; j < placeHolders.length; j++) {

            if (people[i][placeHolders[j]]){

                htmlresult = htmlresult.replace('-{' + placeHolders[j] + '}-', people[i][placeHolders[j]])
            }

        }
        result += '<li>' + htmlresult + '</li>\n';
    }
    return result;
}
console.log(generateList(html, people));
