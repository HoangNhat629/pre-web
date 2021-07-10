var password = "nhathht1234@"
var demThuong = 0
var demHoa = 0
var demSo = 0
var demKitu = 0;
const dacBiet = "!@#$%^&*()_+=-[]}{';,./?><"
for (var i = 0; i <= password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") { demThuong = demThuong++ }
    if (password[i] >= "A" && password[i] <= "Z") { demHoa = demHoa++ }
    if (password[i] >= "1" && password[i] < "9") { demSo = demSo++ }
    if (dacBiet.includes(password[i])) {
        demKitu = demKitu++;
    }
}
var soTien = "123456789";
var reverse = "";
for (let i = soTien.length - 1; i >= 0; i--) { reverse = reverse + soTien[i]; }
console.log(reverse);
var reverseAgain = ""
for (let i = 0; i < reverse.length; i++) {
    if (i % 3 == 0) { reverseAgain = "," + reverseAgain; }
    reverseAgain = reverse[i] + reverseAgain;
} console.log(reverseAgain);