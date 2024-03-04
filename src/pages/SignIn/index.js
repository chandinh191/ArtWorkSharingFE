import React from 'react';

function SignIn() {
    return (
        <div>
            <main>
                <div className="background">
                    <div className="text">
                        <h1>Login</h1>
                        <p>
                            No Account? <a href="signup.html">Sign up</a>
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
