import { employeeStates } from './constants'

export type EmployeeState = typeof employeeStates[number]

export type Employee = {
    id: number
    first_name: string
    last_name: string
    email: string
    gender: 'Female' | 'Male'
    state: EmployeeState
}

export type Employees = ReadonlyArray<Employee>

export type ChangeEmployeeStatePayload = {
    id: number
    state: EmployeeState
}
