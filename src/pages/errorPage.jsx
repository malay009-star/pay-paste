import React from 'react'
import { Link } from 'react-router-dom'

const pagenotfound = () => {
  return (
    <div className='container py-16'>
      <div className='flex'>
        <Link className='font-semibold text-dark' to='/home'>Home &nbsp; / &nbsp;</Link>
        <Link to='' className='font-semibold text-red-500'>404 Error</Link>
      </div>
      <div className='flex flex-col items-center gap-y-5 py-16'>
        <h1 className='text-5xl text-dark primary-color font-semibold'>404 Not Found</h1>
        <p className='text-red-600 font-semibold'>Your visited page not found. You may go home page.</p>
        <Link to="/" className='bg-blue py-2 px-5 font-semibold rounded text-[#fff] mt-2'>Back to home page</Link>
      </div>
    </div>
  )
}

export default pagenotfound
