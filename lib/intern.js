const employee = require('./employee')
class Intern extends employee {
  constructor(name, id, position, email, gitHub) {
    super(name, id, position, email, gitHub);
    this.name = name;
    this.id = id;
    this.position = position;
    this.email = email;
    this.gitHub = gitHub
  }
  getIntern() {
    return this.nam, this.id, this.position, this.email, this.GitHub;
  }
}

module.exports = Intern;