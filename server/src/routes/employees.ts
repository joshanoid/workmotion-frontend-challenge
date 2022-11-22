import * as express from 'express'

import { employees } from '../data/employees.json'

import { Employee, Employees } from 'types'

let data = [...employees] as Employees

const router: express.Router = express.Router()

router
    .get('/employees', (_req: express.Request, res: express.Response) => {
        res.status(200).json(data)
    })
    .post('/employees', (req: express.Request, res: express.Response) => {
        const body = req.body as Employee
        const savedEmployee = { ...body, id: data.length + 1 }

        data = [...data, savedEmployee]

        res.status(201).json(savedEmployee)
    })
    .patch('/employees/:id', (req: express.Request, res: express.Response) => {
        const { id } = req.params
        const body = req.body as Employee
        let updatedEmployee

        data = data.map((employee) => {
            if (id && employee.id === Number.parseInt(id)) {
                updatedEmployee = { ...employee, ...body }

                return updatedEmployee
            }

            return employee
        })

        res.status(200).json(updatedEmployee)
    })

export default router
