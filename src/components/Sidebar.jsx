import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    console.log('Sidebar is rendered')
    return (
        <aside className='w-[300px] bg-purple-700 text-white flex flex-col gap-10 p-5 h-screen'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <input type="text" placeholder='Input' className='text-purple-700' />
        </aside>
    )
}

export default React.memo(Sidebar);