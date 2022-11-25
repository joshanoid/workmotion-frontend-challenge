import axios from 'axios'

import { ChangeEmployeeStatePayload, Employees } from './types'

const API_URL = 'http://localhost:3001'

export const fetchEmployees = () => axios.get<Employees>(`${API_URL}/employees`).then((response) => response.data)

export const changeEmployeeState = ({ id, state }: ChangeEmployeeStatePayload) =>
    axios.patch(`${API_URL}/employees/${id}`, { state })
