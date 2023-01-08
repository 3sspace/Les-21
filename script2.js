function Pc(brand,system,cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint){
        console.log(hint);
        switch(hint){
            case 'string':
                return this.brand;
            case 'number':
                return this.cost;
            case 'default':
                return this.brand + ' ' + this.system + ' ' + this.cost + ' ';
            }
};
}
const dell = new Pc('Dell', 'windows', 800);
const apple = new Pc('Apple', 'MAC OS', 1700);

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);