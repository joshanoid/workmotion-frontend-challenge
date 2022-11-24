import axios from 'axios'

import { Employees } from './types'

const API_URL = 'http://localhost:3001'

export const fetchEmployees = () => axios.get<Employees>(`${API_URL}/employees`).then((response) => response.data)
