import { Link } from "react-router-dom"

const Login = () => {
    return <div className="SignUpDiv">
        <h2>Sign In</h2>
        <form>
            <div className="DivForm">
                <input className="InputForm" type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="DivForm">
                <input className="InputForm" type="password" name="password" placeholder="Password" />
            </div>
            <div className="DivForm">
                {/* <button className="Button" type="submit">
                    Sign In
                </button> */}
                <Link to="/accueil" className="Button">Sign In</Link>
            </div>
        </form>
        <p>New to Netflix ? ?</p>
        <Link to="/signup">Sign un now.</Link>
    </div>
}

export default Login