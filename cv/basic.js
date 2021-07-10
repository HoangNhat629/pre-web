// var a = 10
// console.log(typeof (a))
// a = "nhat"
// console.log(typeof (a))
// a = true
// console.log(typeof (a))
// a = {}
// console.log(typeof (a))
// a = a => 1
// console.log(typeof (a))
// a = undefined
// console.log(typeof (a))
// a = null
// console.log(typeof (a))
var afunction = function (x, y) { return x + y }
function anotherfunction(x, y) { return x + y }
//var xinchao = function () { console.log("xin chao") }
//setTimeout( function () { console.log("xin chao") }, 200)
for (let i = 0; i < 5; i++) {
    console.log(i);
    setTimeout(function () { console.log("xin chao", i) }, i * 1000)//let tồn tại trong  vòng for
}
for (var i = 0; i < 5; i++) {
    console.log(i);
    setTimeout(function () { console.log("xin chao", i) }, i * 1000)
}//var tồn tại ngoài vòng for
var phanso = // object = phanso
    { tuso: 5, mauso: 7 }//tuso=Key,5= value
phanso.tuso //5
phanso.mauso//7
var s = "nhat"
s.length//nên dùng
"nhat".length//k nên dùng
// var t1 = true//boolean
// var t2 = 1 //number
// console.log(t1===t2)
var F = function () { var i; for (i = 0; i < 6; i++) { console.log(i) } console.log("day la i sau cung") }
F()
var obj = {
    a: "b",
    b: "c",
    c: "d"
}
console.log(obj);
var reverseObject = function (input) {
    var keys = Object.keys(input);
    var values = Object.values(input);
    // console.log(keys);
    // console.log(values);
    var returnValue = {};
    for (let i = 0; i < keys.length; i++) {
        let v = values[i];
        let k = keys[i];
        returnValue[v] = k;
        //returnValue[input[keys[i]]] = keys[i] }
    }
}
var obj2 = {
    b: "a",
    c: "a",
    d: "c"
}
console.log(reverseObject(obj2))
