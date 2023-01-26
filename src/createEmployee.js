const createEmployee = (employee) => {
    const addManager = (manager) => {
        return `
        <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item heading">${manager.getName()}</li>
              <li class="list-group-item heading">
                <i class="fa-solid fa-user"></i>${manager.getPosition()}
              </li>
              <li class="list-group-item">${manager.getId()}</li>
              <li class="list-group-item">${manager.getEmail()}</li>
              <li class="list-group-item">${manager.getGitHub()}</li>
            </ul>
          </div>
        </div>
        `
    }

    const addEngineer = (engineer) => {
        return `
        <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item heading">${engineer.getName()}</li>
              <li class="list-group-item heading">
                <i class="fa-solid fa-user"></i>${engineer.getPosition()}
              </li>
              <li class="list-group-item">${engineer.getId()}</li>
              <li class="list-group-item">${engineer.getEmail()}</li>
              <li class="list-group-item">${engineer.getGitHub()}</li>
            </ul>
          </div>
        </div>
        `
    }; 

    const addIntern = (intern) => {
      return `
      <div class="col d-flex justify-content-center">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item heading">${intern.getName()}</li>
            <li class="list-group-item heading">
              <i class="fa-solid fa-user"></i>${intern.getPosition()}
            </li>
            <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item">${intern.getEmail()}</li>
            <li class="list-group-item">${intern.getGitHub()}</li>
          </ul>
        </div>
      </div>
      `
  }; 
    const html = [];

    html.push(
         employee
            .filter((allEmployees) => allEmployees.getPosition() === 'Manager')
            .map((manager) => addManager(manager))
            .join('')
    );
    html.push(
      employee
         .filter((allEmployees) => allEmployees.getPosition() === 'Engineer')
         .map((engineer) => addEngineer(engineer))
         .join('')
    );
    html.push(
      employee
         .filter((allEmployees) => allEmployees.getPosition() === 'Intern')
         .map((intern) => addIntern(intern))
         .join('')
    );  
    return html.join('')
}    

module.exports = (employee) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./styles/reset.css" />
        <link rel="stylesheet" href="./styles/css/fontawesome.min.css" />
        <link rel="stylesheet" href="./styles/css/solid.min.css" />
        <link rel="stylesheet" href="./styles/css/brands.min.css" />
        <link rel="stylesheet" href="./styles/style.css" />
        <title>Employee thingy</title>
      </head>
      <body>
        <h1>Employee thingy</h1>
        <div class="container text-center">
          <div class="row">
            ${createEMployee(employee)}
          </div>
        </div>
      </body>
    </html>
    `
};
