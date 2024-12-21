//建立Mark 和 John 的 BMI 指數計算機.第一組: Mark 體重 78 公斤, 身高 1.69 公尺. Jhon 體重 92 公斤, 身高 1.95 公尺. 第二組: Mark 體重 95 公斤, 身高 1.88 公尺. Jhon 體重 85 公斤, 身高 1.76 公尺.
let WeightsMark = 78; // 輸入 Mark 體重
const HeightMark = 1.69; // 輸入 Mark 身高
let WeightsJohn = 92; // 輸入 John 體重
const HeightJhon = 1.95; // 輸入 John 身高

let BMIMark1 = WeightsMark / HeightMark ** 2; // 計算 Mark 的BMI 指數
let BMIJhon1 = WeightsJohn / HeightJhon ** 2; // 計算 Jhon 的 BMI 指數
const markHigherBMI = BMIMark1 > BMIJhon1; // 判斷 "BMIMark1" 是否大於 "BMIJhon1"
console.log(BMIMark1, BMIJhon1, markHigherBMI); // 展示 "BMIMark1" , "BMIJhon1" 與 "markHigherBMI" 等結果
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJhon2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJhon2);
console.log(BMIMark2 > BMIJhon2);