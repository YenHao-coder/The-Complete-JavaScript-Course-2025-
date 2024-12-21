/* Write your code below. Good luck! 🙂 */

/*
calcTip函數 >> 輸入帳單金額後回傳小費 例如: $100
創造出 bill 陣列 >> 蒐集帳單資料
創造出 tip 陣列 >> 計算小費金額
$50-300, 15%
else, 20%
創造出 total 陣列 >> 計算帳單與小費總額
*/


const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total_0 = bills[0] + tips[0];
const total_1 = bills[1] + tips[1];
const total_2 = bills[2] + tips[2];
const totals = [total_0, total_1, total_2];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip;
    }
}

console.log(totals);
