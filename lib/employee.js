class Employee {
    constructor(name, id, position) {
        this.name = name;
        this.id = id;
        this.position = position;
    };

    getPosition() {
        return this.position
    };

    getName(){
        return this.name
    };
}

module.exports = Employee