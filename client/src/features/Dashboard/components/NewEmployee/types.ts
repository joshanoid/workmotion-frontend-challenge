import { Employee } from 'utils/types'

export type FormErrors = {
    first_name?: string
    last_name?: string
    email?: string
}

export type EmployeeForm = Omit<Employee, 'id'>
