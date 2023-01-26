class Employee {
    constructor(name, id, position, email, gitHub) {
        this.name = name;
        this.id = id;
        this.position = position;
        this.email = email;
        this.gitHub = gitHub
    };

    getPosition() {
        return this.position
    };

    getName(){
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.getEmail
    };

    getGitHub() {
        return this.gitHub
    }
}

module.exports = Employee