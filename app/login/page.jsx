"use client"
import Link from 'next/link'
import React, { useState }from 'react'
import Navbar from '../components/Navbar'
function registerPage() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto py-5'>
            <h3>Login</h3>
            <hr className='my-3' />
            <form action="">
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your Email' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your Password' />
                <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign Up</button>
            </form>
            <hr className='my-3' />
            <p>Already have an accout ? go to <Link href="/register" className='text-blue-500 hover:underline'>register page</Link> </p>
        </div>

    </div>
  )
}

export default registerPage