import "./SingUp.css"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
//import { Hashcode } from "../service/hasheCode.js"
import { postConexions } from "../service/Connect";

const SignUp = () => {

    const { register,handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
      });
    //const onSubmit = data => Hashcode(data);
    const onSubmit = data => postConexions(data);

    
    return <div className="SignUpDiv">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="DivForm">
                <input className="InputForm" type="text" name="username" placeholder="First Name" {...register("username")}/>
            </div>
            <div className="DivForm">
                <input className="InputForm" type="text" name="email" placeholder="Email Address"  {...register("email")} />
            </div>
            <div className="DivForm">
                <input className="InputForm" type="password" name="password" placeholder="Password" {...register("password")}/>
            </div>
            <div className="DivForm">
            <Link to="/login" className="Button" type="submit">
                    Inscription
                    </Link>
            </div>
        </form>
        <p>Already a user ?</p>
        <Link to="/login">Sign in now.</Link>
    </div>
}

export default SignUp