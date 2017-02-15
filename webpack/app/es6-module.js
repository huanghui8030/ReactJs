class People{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        alert(`hi ${this.name} !`);
    }
}
module.exports = People;
