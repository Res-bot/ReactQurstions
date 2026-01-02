import React from 'react'
import { useState } from 'react'

function FormValidation(){
    const[formData, setFormData] = useState({name: "", email:"", password: ""});

    const[error, setError] = useState({})

    const validate = (name,value)=>{
        let errorMsg = ''

        switch(name){
            case "name":
                if(value.length > 0 && value.length<3){
                    errorMsg = "Name should be of at least three characters"
                }
                break;
            case "email":
                const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(value.length > 0 && !EmailRegex.test(value)){
                    errorMsg = "Enter a valid email address"
                }
                break;
            case "password":
                if(value.length>0 && value.length<8){
                    errorMsg = "Password must be at least 8 characters long"
                }
                break;
        }
        setError((prevError)=>({
            ...prevError,
            [name] : errorMsg
        }));
    }

    const handleChange = (e)=>{
        const{name,value} = e.target
        setFormData({...formData, [name]:value})
        validate(name,value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.values(error).every((x) => x==="") && formData.name){
            alert("Form submitted successfully")
        }else{
            alert("correct all the errors before submitting form.")
        }
    }

    return(
        <div>
            <h2>Signin</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' />
                    {error.name && <p>{error.name}</p>}
                    <input type="email" name='email' value={formData.email} onChange={handleChange}
                    placeholder='Enter your email' />
                    {error.email && <p>{error.email}</p>}
                    <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='Enter  your password'/>
                    {error.password && <p>{error.password}</p>}

                    <button type='submit'>signin</button>
                </form>
            </div>
        </div>
    )
}

export default FormValidation