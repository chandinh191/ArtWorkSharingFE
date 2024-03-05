import React from 'react';
import img1 from '../../assets/img/background.jpg';
import '../../assets/css/login-style.css';

function SignIn() {
    return (
        <div>
            <main>
                <div className="background" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="text">
                        <h1>Login</h1>
                        <p>
                            No Account? <a href="signup.html">Register</a>
                        </p>
                    </div>
                    <div className="box">
                        <form className="form">
                            <input type="text" className="username" placeholder="Username" required />
                            <input type="password" className="password" placeholder="Password" required />
                            <input type="submit" className="button" defaultValue="Login" />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SignIn;
