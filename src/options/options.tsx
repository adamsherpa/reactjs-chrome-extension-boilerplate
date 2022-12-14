import React from 'react';
import '../assets/tailwind.scss'
import { createRoot } from 'react-dom/client'

const App = (
    <h1 className="ext-3xl text-green-500 font-bold untderline">
        Hello Option!
    </h1>
)

const container = document.createElement('div')
document.body.appendChild(container)

const root = createRoot(container)
root.render(App)