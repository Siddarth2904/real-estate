import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
  const [formData, setformData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handelChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('http://localhost:9000/server/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data);
      if (data.success === false) {
        setLoading(false)
        setError(data.message)
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/signin')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handelChange} />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handelChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handelChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-95'>{loading ? 'loading...' : 'Sign Up'}</button>
        {/* <button className='bg-slate-700 text-white p-3 rounded-lg uppercase'>Sign Up</button> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account? </p>
        <Link to='/signin'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}