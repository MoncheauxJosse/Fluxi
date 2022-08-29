import { Link } from "react-router-dom"
import React from 'react'

import { useForm } from "react-hook-form";



const Login = () => {


    const { register,handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            type: 'login',
        }
      });
  const onSubmit = compteData => console.log(compteData);




    return <div className="SignUpDiv">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="DivForm">
                <input className="InputForm" type="text" name="email" placeholder="Email Address" {...register("email")}/>
            </div>
            <div className="DivForm">
                <input className="InputForm" type="password" name="password" placeholder="Password" {...register("password")} />
            </div>
            <div className="DivForm">
             <button className="Button" type="submit"> Sign In</button> 
                {/* <Link to="/accueil" className="Button">Sign In</Link> */}
            </div>
        </form>
        <p>New to Fluxi ?</p>
        <Link to="/signup">créer un compte</Link>
    </div>
}

export default Login