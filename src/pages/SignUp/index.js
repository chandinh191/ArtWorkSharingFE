import React from 'react';

function SignUp() {
    return (
        <div>
            <main>
                <div className="background">
                    <div className="text">
                        <h1>Signup</h1>
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
