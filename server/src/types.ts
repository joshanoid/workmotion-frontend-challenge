export type Employee = {
    id: number
    first_name: string
    last_name: string
    email: string
    state: 'ADDED' | 'IN-CHECK' | 'APPROVED' | 'ACTIVE' | 'INACTIVE'
}

export type Employees = ReadonlyArray<Employee>
