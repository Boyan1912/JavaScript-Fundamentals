//Problem 7. Parse URL
//
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//Return the elements in a JSON object.

    var url = 'http://telerikacademy.com/Courses/Courses/Details/239',
    result = {};

result.protocol = url.substring(0, url.indexOf('://'));
result.server = url.substring(url.indexOf('://') + '://'.length, url.indexOf('/', url.indexOf('://') + '://'.length + 1));
result.resource = url.substring(url.indexOf(result.server) + result.server.length, url.length);

console.log(result);

