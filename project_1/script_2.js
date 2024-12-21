// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2044 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const YearsuntilRetirement = (birthYear, FirstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${FirstName} retires in ${retirement} years`;
}

console.log(YearsuntilRetirement(1993, 'Peter'));
console.log(YearsuntilRetirement(2003, 'Bob'));

// Arrays 陣列
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Arrays 建立
const many_years = new Array(1997, 1856, 2036);

// Arrays 長度與元素位置

console.log(friends.length);
console.log(friends[friends.length - 1]);

console.log(friends[0]);
console.log(friends[2]);

// Array 元素取代
friends[2] = 'Jay';
console.log(friends)
// 錯誤: friends = ['Bob', 'Alice'] 不能完整取代

let Firstname = 'Jhon';
const Jhon = [Firstname, 'Chen', 2037 - 1991, 'engineer', friends];
console.log(Jhon);
console.log(Jhon.length);

// 練習: 年齡計算
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// 輸出列表內資料
const years = [1991, 1967, 2004, 2015, 2026];
const Age1 = calcAge(years[0]);
const Age2 = calcAge(years[1]);
const Age3 = calcAge(years[years.length - 1]);
console.log(Age1, Age2, Age3);

//輸出資料整理為列表
const Ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(Ages)

//增加 array 元素
const newLength = friends.push("Jack");
console.log(friends);
console.log(newLength); // 4

friends.unshift("John"); //add last
console.log(friends);

//移除 array 元素
friends.pop(); //last
const popped = friends.pop();
console.log(popped); // "Jay"
console.log(friends);
friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

// Louis object 
const Louis = {
    firstName: "Louis",
    lastName: "pero",
    job: 'teacher',
    friends: ["Michael", 'Peter', 'Steven'],
    birthYear: 1993,
    driverLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${Louis.job}, and he has ${this.driverLicense ? 'a' : 'no'} driver license.`;
    }
};
console.log(Louis);

// retrieve from object 
// dot use real property expression 
console.log(Louis.lastName);

// bracket notation can put any computed expression  
console.log(Louis['lastName']);

// compute it from some operation
const nameKey = "Name";
console.log(Louis['first' + nameKey]);
console.log(Louis['last' + nameKey]);

// popup windows
const interestedIn = prompt('What do you want to know about Louis?Choose between firstName, lastName, age, job and friends');

// repeatly asked until any corrected prompt
if (Louis[interestedIn]) {
    console.log(Louis[interestedIn]);
} else {
    const interestedIn = prompt('What do you want to know about Louis?Choose between firstName, lastName, age, job and friends');
}
// two expressions added new values in object
Louis.location = "Dali";
Louis['X'] = '@Louispero';

//challenge
// "Louis has 3 friends, and his best friend is called Michael"
console.log(`${Louis.firstName} has ${Louis.friends.length}, and his best friend is called ${Louis.friends[0]}`);

//challenge
// "Louis is a 46-years old teacher, and he has a/no driver's license"
console.log(Louis.getSummary());

// for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};

// Looping Array
const haoArray = ['Louis', 'Chen', 2037 - 1993, 'teacher', ['Michael', 'Peter', 'Jonas'], true];
const types = [];

for (let i = 0; i < haoArray.length; i++) {

    console.log(haoArray[i], typeof haoArray[i]);
    types.push(typeof haoArray[i]);
};//讀取資料型態並形成列表

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
};
console.log(ages);

// continue and break
for (let i = 0; i < haoArray.length; i++) {
    if (typeof haoArray[i] !== 'string') continue;
    console.log(haoArray[i], typeof haoArray[i]);
} // 若資料型態不符合'string'的則直接下一組

for (let i = 0; i < haoArray.length; i++) {
    if (typeof haoArray[i] !== 'number') break;
    console.log(haoArray[i], typeof haoArray[i]);
} // 若資料型態符合'number'的則直接終止

// 執行順序由後往前
for (let i = haoArray.length - 1; i >= 0; i--) {
    console.log(i, haoArray[i]);
};

// 迴圈中的迴圈執行
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}
	`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight reptition ${rep}`);
    }
};

//While執行
let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights repetition ${rep}.`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
// 色子例
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');

}