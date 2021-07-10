console.log("hello word")
let a = 4
let b = 5
let c = 0
let denta = b * b - 4 * a * c
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            console.log("phuong trinh vo so nghiem")
        } else {
            console.log("phuong trinh vo nghiem ")
        }
    } else {
        console.log("phuong trinh co nghiem la :", -c / d)

    }
} else {
    if (denta > 0) {
        let x1 = (-b + Math.sqrt(denta) / (2 * a))
        let x2 = (-b - Math.sqrt(denta) / (2 * a))
        console.log("phuong trinh co 2 nghiem la x1", x1, "va x2 ", x2)

    } else if (denta == 0) {
        console.log("phuong trinh co nghiem kep la :", (-b) / (2 * a))
    } else if (denta < 0) {
        console.log("phuong trinh vo nhiem")
    }
}




