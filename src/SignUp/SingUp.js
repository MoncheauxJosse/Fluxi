import "./SingUp.css"
import { Link } from "react-router-dom"

const SignUp = () => {
    return <div className="SignUpDiv">
        <h2>Sign Up</h2>
        <form>
            <div className="DivForm">
                <input className="InputForm" type="text" name="username" placeholder="First Name" />
            </div>
            <div className="DivForm">
                <input className="InputForm" type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="DivForm">
                <input className="InputForm" type="password" name="password" placeholder="Password" />
            </div>
            <div className="DivForm">
                <button className="Button" type="submit">
                    Sign In
                </button>
            </div>
        </form>
        <p>Already a user ?</p>
        <Link to="accueil">Sign in now.</Link>
    </div>
}

export default SignUp