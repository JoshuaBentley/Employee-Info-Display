const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('initailization', () => {
        it('should create a new isntance of employee with name, ID, and position classes', () => {
            const name = "Luffy"
            const id = 14
            const position = "Engineer" 

            const newEmployee = new Employee(name, id, position)

            expect(newEmployee instanceof Employee).toBe(true)
            expect(newEmployee.name).toEqual('Luffy')
            expect(newEmployee.id).toEqual(14)
            expect(newEmployee.position).toEqual('Engineer')
        })
    })
})