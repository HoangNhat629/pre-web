const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err,data) => {
//     if (err) {console.log(err)} else {
//         let objData = JSON.parse(data)
//         for (let index = 0; index < objData.length; index++) {
//             console.log(objData[index])
//             let count = 0 ;
//             for (let i = 0; i < objData[index].questionAnswer.length; i++) {
//                 console.log(objData[index].questionAnswer[i])
//                 if (objData[index].questionAnswer[i] == "no")
//                 count ++
//             }
//             if (count >3) {
//                 // console.log("id cua cau hoi co so luon 'no' > 3 :", objData[index].id)
//             }
//             //neu cau hoi nao co so luong "no" > 3 thi in ra id cua no
//         }
//     }
// })


var obj = {
    ten: "Nhat",
    tuoi: 16,
    diem: [1,2,3,4]
}

// `
// "obj" = {
//     "ten":"Nhat",
//     "tuoi":16,
//     "diem":[1,2,3,4,"muoi"]
// }
// `
// JavaScript Object Notation

var strJSON = JSON.stringify(obj)
var obj2 = JSON.parse(strJSON)

console.log(strJSON)
console.log(obj2)

fs.writeFile("output",strJSON,"utf8",(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("ghi file thanh cong")
    }
})