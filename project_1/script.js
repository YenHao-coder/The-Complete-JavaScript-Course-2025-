/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstname = 'Marilda';

console.log(firstname);
console.log(firstname);
console.log(firstname);

// Variable name coventions
let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas";
let PI = 3.1415

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

let javascriotIsFun = true;
console.log(javascriotIsFun);

console.log(typeof true);
console.log(typeof javascriotIsFun);
console.log(typeof 23);
console.log(typeof 'joans');

javascriotIsFun = 'Yes!';
console.log(typeof javascriotIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30; //指定變數
age = 31;
const BirthYear = 1993; //指定常數
// 加減運算符號
const now = 2024;
const ageJoans = now - 1991;
const ageSarah = now - 2018;
console.log(ageJoans, ageSarah);

console.log(ageJoans * 2, ageJoans / 10, 2 ** 3);

const firstName = 'Joans';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// 賦值運算符號
let x = 10 + 5; // 15
x += 10; // x = x+10 
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// 比較運算符號: >, <, >=, <=
console.log(ageJoans > ageSarah); //布林值: 真
console.log(ageSarah >= 7); // 布林值: 假

const isFullAge = ageSarah >= 6;
console.log(now - 1991 > now - 2018);

const averageAge = (ageJoans + ageSarah) / 2
console.log(ageJoans, ageSarah, averageAge);

//建立Mark 和 John 的 BMI 指數計算機. Mark 體重 78 公斤, 身高 1.69 公尺. Jhon 體重 92 公斤, 身高 1.95 公尺. 第二組 Mark 體重 95 公斤, 身高 1.88 公尺. Jhon 體重 85 公斤, 身高 1.76 公尺.
let WeightsMark = 78; // 輸入 Mark 體重
const HeightMark = 1.69; // 輸入 Mark 身高
let WeightsJohn = 92; // 輸入 John 體重
const HeightJhon = 1.95; // 輸入 John 身高

let BMIMark1 = WeightsMark / HeightMark ** 2; // 計算 Mark 的BMI 指數
let BMIJhon1 = WeightsJohn / HeightJhon ** 2; // 計算 Jhon 的 BMI 指數
const markHigherBMI = BMIMark1 > BMIJhon1; // 判斷 "BMIMark1" 是否大於 "BMIJhon1"
console.log(BMIMark1, BMIJhon1, markHigherBMI); // 展示 "BMIMark1" , "BMIJhon1" 與 "markHigherBMI" 等結果

const job = 'teacher';
const birthYear = 1991;

const jonas = "I'm " + firstName + ", a " + (now - birthYear) + " year old " + job + '! ';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with\n\mutiple\n\lines');

age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("Sarah can start driving license");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3); //減法轉為數字型態運算
console.log('23' / '2'); //乘法為數字運算

let n = '1' + 1; //'11'
n = n - 1; // 11 - 1 = 10
console.log(n);

// 5個錯誤布林值: 0, '', undefined, null, NaN

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired)

if (shouldDrive && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}
// switch 函式
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break
    case 'tuesday':
        console.log('Prepare theory videos');
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy your weekend :D');
        break
    default:
        console.log('Not a valid day!');
};
// if/else函式: 相比之下switch寫出更多程式碼, 但是switch函式更方便閱讀
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');

} else if (day === 'tuesday') {
    console.log('Prepare theory videos');

} else if (day === 'wednsday' || day === 'thursday') {
    console.log('Write code examples');

} else if (day === 'friday') {
    console.log('Record videos');

} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy your weekend :D');

} else {
    console.log('Not a valid day!');
};

// Ternary operator
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') 
    : console.log('I like to drink water🚰');

// as expressions
const drink = age >= 18 ? 'wine🍷' :' water🚰';
console.log(drink);
