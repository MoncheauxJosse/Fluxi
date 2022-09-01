import { Link, useNavigate} from "react-router-dom"
import React, {useState,useEffect} from 'react'
import { postLogin } from "../service/Connect";
import { useForm } from "react-hook-form";




const Login = () => {
    const navigate = useNavigate();

    const { register,handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            type: 'login',
        }, 
      });

      const [data, setData] = useState({token:null}); 




  const onSubmit = compteData => {

    async function fetchData() {
    const result = await postLogin(compteData);

    //console.log(result.data)
    setData({token:result.data});
    
  }
  fetchData();


  console.log(data.token)

  
  if(data.token!=null){


    navigate('/accueil')


 }
};



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
                
            </div>
        </form>
        <p>New to Fluxi ?</p>
        <Link to="/signup">créer un compte</Link>
    </div>
}

export default Login