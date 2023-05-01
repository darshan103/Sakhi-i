import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = ({path="login"}) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue)
        }, 1000)
        count === 0 && navigate(`/${path}`, {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    }, [count, navigate, location, path])
    return (
        <>
            <div className="d-flex justify-content-center">
            <h1 className='Text-center'>redirecting to you in {count} sec</h1>
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </>
    )
}

export default Spinner