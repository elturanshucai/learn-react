import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <main className='flex'>
            <Sidebar />
            <div>
                {children}
            </div>
        </main>
    )
}

export default Layout