import React from 'react';
import img1 from '../../assets/images/signup-image.jpg';
import '../../assets/css/login-style.css';
import '../../../src/assets/fonts/material-icon/css/material-design-iconic-font.css';

function SignUp() {
    const [username, setUsername] = React.useState('');
    const [status, setStatus] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const handleStatusChange = (event) => {
        setStatus(parseInt(event.target.value));
    };
    async function SignUp() {
        // Validate form fields
        const errors = {};
        if (!username.trim()) {
            errors.username = 'Please enter your name';
        }
        if (!email.trim()) {
            errors.email = 'Please enter your email';
        }
        if (!password.trim()) {
            errors.password = 'Please enter your password';
        }
        if (password.trim() !== confirmPassword.trim()) {
            errors.confirmPassword = 'Passwords do not match';
        }
        setErrors(errors);

        // If there are no errors, proceed with signup
        if (Object.keys(errors).length === 0) {
            // Your signup logic here
            console.log('Sign up successful');
        }

        if (Object.keys(errors).length === 0) {
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
                    status: status,
                }),
            });
            if (res.ok) {
                alert('Sign up successful!');
                window.location.href = '/signin';
                const json = await res.json();
                console.log(json);
            } else {
                alert('Sign up fail!');
                window.location.reload();
            }
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
                                    <p className="error" style={{ color: 'red' }}>
                                        {errors.username}
                                    </p>
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
                                    {errors.email && (
                                        <p className="error" style={{ color: 'red' }}>
                                            {errors.email}
                                        </p>
                                    )}
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
                                    {errors.password && (
                                        <p className="error" style={{ color: 'red' }}>
                                            {errors.password}
                                        </p>
                                    )}
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
                                    {errors.confirmPassword && (
                                        <p className="error" style={{ color: 'red' }}>
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                    <div className="form-group">
                                        <div className="row" style={{ alignItems: 'center' }}>
                                            <div className="col-md-4 col-sm-6">
                                                <input
                                                    type="radio"
                                                    value="0"
                                                    name="status"
                                                    checked={status === 0}
                                                    onChange={handleStatusChange}
                                                />
                                            </div>
                                            <div className="col-md-4 col-sm-6">Audience</div>
                                        </div>
                                        <div className="row" style={{ alignItems: 'center' }}>
                                            <div className="col-md-4 col-sm-6">
                                                <input
                                                    type="radio"
                                                    value="1"
                                                    name="status"
                                                    checked={status === 1}
                                                    onChange={handleStatusChange}
                                                />
                                            </div>
                                            <div className="col-md-4 col-sm-6">Artist</div>
                                        </div>
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
                                <a href="/" className="signup-image-link">
                                    Home page
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
