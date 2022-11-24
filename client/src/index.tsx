import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { Dashboard } from 'features/Dashboard'
import './index.css'

const rootElement = document.createElement('div')
const root = createRoot(rootElement)

document.body.append(rootElement)

const App = () => (
    <React.StrictMode>
        <Dashboard />
    </React.StrictMode>
)

root.render(<App />)
