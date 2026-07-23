import React from 'react'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'

const EmptyList = ({ msg, btnText }) => {
    return (
        <div className='rounded-md border border-dashed border-yellow-300 py-16 text-center'>
            <p className='text-lg'>{msg}</p>
            <Button variant='link' className="mt-4"  render={<NavLink to="/shop" />}>{btnText}</Button>
        </div>
    )
}

export default EmptyList