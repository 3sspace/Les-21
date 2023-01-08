const salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
      alert('We must pay salary on Tuesday!');
    },
    total() {
        let result = 0
        for (const key in salaries) if (typeof salaries[key] === 'number')
        {(result += salaries[key]);}
        return result;},
}
salaries.total();
salaries.manager = 5000;
delete salaries["designer"]
console.log(salaries.total());

function Pc(brand,system,cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
}
const dell = new Pc('Dell', 'windows', 800);
const apple = new Pc('Apple', 'MAC OS', 1700);