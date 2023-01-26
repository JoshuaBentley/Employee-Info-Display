const employee = require('./employee')
class Manager extends employee {
  constructor(name, id, position, email, gitHub) {
    super(name, id, position, email, gitHub);
    this.name = name;
    this.id = id;
    this.position = position;
    this.email = email;
    this.gitHub = gitHub
  }
  getManager() {
    return this.nam, this.id, this.position, this.email, this.GitHub;
  }
}

module.exports = Manager;