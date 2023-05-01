import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(100)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue)
        }, 1000)
        count === 0 && navigate('/login', {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])
    return (
        <>
            <div className="d-flex justify-content-center">
            <h1 className='Text-center'>redirecting to you in {count} sec</h1>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner