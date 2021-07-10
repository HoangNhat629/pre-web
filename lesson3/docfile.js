const fs = require('fs') //day la cai de xu lí file //file System
let nhat = `bla bla bla`
fs.readFile('abc.txt', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
    }
    else { console.log(`du lie doc duoc :${data}`) }

});
fs.writeFile('abc.txt',nhat, (err, data) => {
    if (err) { 
        console.log(err) }
    else { 
        console.log(`du lieu viet la:${data}`) }
}
)
