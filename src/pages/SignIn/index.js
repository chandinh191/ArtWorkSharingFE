import React from 'react';
import img1 from '../../assets/images/signin-image.jpg';
import '../../assets/css/login-style.css';
import '../../../src/assets/fonts/material-icon/css/material-design-iconic-font.css';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;

function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    async function SignIn() {
        const errors = {};
        if (!email.trim()) {
            errors.email = 'Please enter your email';
        }
        if (!password.trim()) {
            errors.password = 'Please enter your password';
        }
        setErrors(errors);

        // If there are no errors, proceed with sign in
        if (Object.keys(errors).length === 0) {
            const res = await fetch(`${SERVER_API}/Auth/SignIn`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (res.ok) {
                console.log(res);
                const result = await res.json();
                localStorage.setItem('token', result.token);
                localStorage.setItem('userid', result.accinfo.id.toString());
                localStorage.setItem('username', result.accinfo.userName.toString());
                window.location.href = '/';
            } else {
                alert('Wrong email or password!');
                errors.message = 'Wrong email or password';
                setErrors(errors);
            }
        }
    }

    return (
        <>
            <div className="main">
                {/* Sing in  Form */}
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure>
                                    <img src={img1} alt="sign up image" />
                                </figure>
                                <a href="/SignUp" className="signup-image-link">
                                    Create an account
                                </a>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">SignIn</h2>
                                <form
                                    method="POST"
                                    className="register-form"
                                    id="login-form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        SignIn();
                                    }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-account material-icons-name" />
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Your Name"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <p className="error" style={{ color: 'red' }}>
                                        {errors.email}
                                    </p>
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
                                    <p className="error" style={{ color: 'red' }}>
                                        {errors.password}
                                    </p>
                                    <div className="form-group form-button">
                                        <input
                                            type="submit"
                                            name="signin"
                                            id="signin"
                                            className="form-submit"
                                            value={'Login'}
                                        />
                                    </div>
                                    <p className="error" style={{ color: 'red' }}>
                                        {errors.message}
                                    </p>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <div className="footer__social">
                                        <a href="#">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-youtube-play"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-google"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignIn;
