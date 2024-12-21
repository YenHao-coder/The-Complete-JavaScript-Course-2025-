/*
待辦事項1:創造 mark 跟 john兩個物件, 包含 fullName, mass, height三個屬性
待辦事項2:創造 calcBMI計算器, 指派bmi屬性在計算器內, 回傳值內包含bmi
待辦事項3: 印出誰的bmi高. 包含fullName與BMI
*/
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);