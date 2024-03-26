import React from 'react';
import img1 from '../../assets/images/signup-image.jpg';
import '../../assets/css/login-style.css';
import '../../../src/assets/fonts/material-icon/css/material-design-iconic-font.css';

function SignUp() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    async function SignUp() {
        const res = await fetch(`https://localhost:7178/api/Auth/SignUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            }),
        });
        if (res.ok) {
            window.location.href = '/signin';
            const json = await res.json();
            console.log(json);
        } else {
            window.location.reload();
        }
    }

    return (
        <>
            <div className="main">
                {/* Sing in  Form */}
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form
                                    method="POST"
                                    className="register-form"
                                    id="register-form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        SignUp();
                                    }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="username">
                                            <i className="zmdi zmdi-account material-icons-name" />
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Your Name"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email" />
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-lock" />
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">
                                            <i className="zmdi zmdi-lock-outline" />
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group form-button">
                                        <input
                                            type="submit"
                                            name="signup"
                                            id="signup"
                                            className="form-submit"
                                            value={'Register'}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure>
                                    <img src={img1} alt="sing up image" />
                                </figure>
                                <a href="/SignIn" className="signup-image-link">
                                    I am already member
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignUp;
