import React from 'react';
import img2 from '../../assets/img/background.jpg';
import '../../assets/css/signup-style.css';

function SignUp() {
    return (
        <div>
            <main>
                <div className="background" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="text">
                        <h1>Register</h1>
                        <p>
                            Have Account? <a href="login.html">Login</a>
                        </p>
                    </div>
                    <div className="box">
                        <form className="form">
                            <input type="text" className="fullname" placeholder="Full Name" required />
                            <input type="email" className="email" placeholder="Email" required />
                            <input type="text" className="username" placeholder="Username" required />
                            <input type="password" className="password" placeholder="Password" required />
                            <input type="submit" className="button" defaultValue="Register" />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SignUp;
