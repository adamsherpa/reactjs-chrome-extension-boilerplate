import React from 'react';
import '../assets/tailwind.scss'
import { createRoot } from 'react-dom/client'

const App = (
    <div>
        <h1 className="header">Jham</h1>
        <form action="">
            <button className="rounded-full">Submit</button>
        </form>
    </div>
);

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(App)
