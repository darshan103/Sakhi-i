import React,{useState,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count,setCount]=useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((preValue)=> --preValue)
        },1000)
        count===0 && navigate('/login',{
            state: location.pathname,
        })
        return () => clearInterval(interval)
    },[count,navigate,location])
    return (
        <>
            <div classname="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
                <h1 className='Text-center'>redirecting to you in {count} sec</h1>
                <div classname="spinner-border" role="status">
                    <span classname="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner