let str = "kìa con bướm vàng";
let loihat = ["kìa", "con", "bướm", "vàng"]
str = str.trim();//space tab newline
while (str.includes("  ")) {
    str = str.replace("  ", " ");
}
console.log(":" + str + ":");
let loihatStr = str.split(" ");
console.log(loihatStr)
for (let i = 0; i < loihatStr.length; i++) {
    setTimeout(function () { console.log(loihatStr[i]) }, i * 1000) }
//c1
var tong2 = function (a, b) {
    return a + b;
}
//c2
function tong1(c, d) {
    return c + d;
}
//c3 ECMA Script 6
let tong3 = (a, b) => { return a + b };//arrow function
//c4
let tong4 = (a, b) => ({
    tenham: "ham",
    ketqua: a + b
});
console.log(tong4(1, 2))
//c5
let tong5 = (a, b) => a + b;

let n = 10;
let answer = [];
while (answer.length < n) {
    let newValue = Number.parseInt(Math.random() * 100);
    if (answer.indexOf(newValue) == -1) {
        answer.push(newValue);
    }
}
answer.sort(function (a, b) {
    return a < b;
})
//answer.sort ( ( a , b ) => a > b );
console.log(answer);

