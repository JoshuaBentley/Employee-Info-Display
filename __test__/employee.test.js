const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('initailization', () => {
        it('should create a new isntance of employee with name, ID, and position classes', () => {
            const name = "Luffy"
            const id = 14
            const position = "Manager" 

            const newEmployee = new Employee(name, id, position)

            expect(newEmployee instanceof Employee).toBe(true)
            expect(newEmployee.name).toEqual('Luffy')
            expect(newEmployee.id).toEqual(14)
            expect(newEmployee.position).toEqual('Manager')
        })
    })

    describe('getPosition', () => {
        it('should return the position of the employee', () => {
        const name = "Luffy"
        const id = 14
        const position = "Manager" 

        const newEmployee = new Employee(name, id, position)

        const result = newEmployee.getPosition()

        expect(result).toEqual('Manager')
        })
    })

    describe('getName', () => {
        it('should return the name of the employee', () => {
        const name = "Luffy"
        const id = 14
        const position = "Manager" 

        const newEmployee = new Employee(name, id, position)

        const result = newEmployee.getName()

        expect(result).toEqual('Luffy')
        })
    })
})