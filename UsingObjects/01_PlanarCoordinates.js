//Problem 1. Planar coordinates
//
//Write functions for working with shapes in standard Planar coordinate system.
//    Points are represented by coordinates P(X, Y)
//Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//    Check if three segment lines can form a triangle.
    var line1,
        pointA,
        pointB,
        line2,
        line3;

        pointA = {
        x: 1,
        y: 2
    };
        pointB = {
        x: 10.5,
        y: 7
    };
    line1 = {
    beginning: pointA,
    ending: pointB
    };
    line2 = {
        beginning: {
            x: 8,
            y: 2
        },
        ending: {
            x: -3,
            y: -5
        }
    };
    line3 = {
        beginning: {
            x: 4.2,
            y: 2.1
        },
        ending: {
            x: 3.3,
            y: 3.3
        }
    };
function pointsDistance(a, b){
    a = a || {x: 0, y: 0};
    b = b || {x: 0, y: 0};
    return Math.sqrt(((b.x - a.x) * (b.x - a.x)) + ((b.y - a.y) * (b.y - a.y)));
}
function canFormTriangle(a, b, c){
    for(var i = 0; i < arguments.length; i++){
        arguments[i].size = pointsDistance(arguments[i].beginning, arguments[i].ending)
    }
    return a.size + b.size > c.size || a.size + c.size > b.size || b.size + c.size > a.size;
}
console.log(canFormTriangle(line1, line2, line3));