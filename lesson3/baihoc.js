
let sinhTong = e => {
    return function (f) { return e + f; }
}
let tongvoi5 = sinhTong(5);
let kqua = tongvoi5(6);
console.log(kqua);
let timkiem = function (tenMXH) {
    return function (tenNguoiDung) {
        return tenMXH + tenNguoiDung;
    };
};
const linkFB = "http://facebook.com";
const linkINS = "http://instagram.com";
let tkFB = timkiem(linkFB);
let nhat = tkFB("nhat");
console.log(nhat);

//
let str1 = " day la cai string1";
let str2 = 'day la string 2';
let str3 = `day la string 3`;

//
let x3 = 10
let strx = "day la x3:" + x3 // = let strx=`day la x3: ${x3}`
let strxx = `day la tong 5 voi 8: ${5 + 8}`
console.log(strx)
console.log(strxx)
//
let x1 = "100";
let x2 = "10";
console.log(x1 + x1)
console.log(x1 - x2)

//bài mới
//Async Await
let delay = async function () {
    for (let i = 0; i < 10000; i++) {
        for (let j = 0; j < 10000; j++) {
            var k;
        }
    }
};
let ASfunc = async () => {
    console.log("BEGIN FUNCTION");
    await delay();
    console.log("END FUNCTION");
    console.log("continue")
};
console.log("begin req");
ASfunc();
console.log("end req")