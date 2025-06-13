import { useRef, useState } from 'react';
import { ReactComponent as SignUpSvg } from '../assets/images/illustrations/sign-up_qamz.svg';
import { Link } from 'react-router';

export default function SignUpForm(props) {

    const fname = useRef(null);
    const lname = useRef(null);
    const uEmail = useRef(null);
    const uPass = useRef(null);
    const uPassC = useRef(null);

    const {user, setUser, passMatch, setPassMatch, onSubmit} = props;
    const [error, setError] = useState('');

    const validation = () => {
        let fN = fname.current, lN = lname.current, uE = uEmail.current, uP = uPass.current, uPC = uPassC.current;
        const addBorder = (x) => {
            x.classList.add('border-red');
        };
        const removeBorder = (x) => {
            x.classList.remove('border-red');
        };

        !fN.checkValidity() ? addBorder(fN) : removeBorder(fN);
        !lN.checkValidity() ? addBorder(lN) : removeBorder(lN);
        !uE.checkValidity() ? addBorder(uE) : removeBorder(uE);
        !uP.checkValidity() ? addBorder(uP) : removeBorder(uP);
        !uPC.checkValidity() ? addBorder(uPC) : removeBorder(uPC);
    };

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const passHandle = (e) => {
        const {name,value} = e.target;
        setPassMatch({
            ...passMatch,
            [name]: value,
        })
    };

    const passMatchConfirm  = () => {
        if(passMatch.pass1 !== passMatch.pass2) {
            setError("Passwords do not match.");
        } else {
            setUser((data) => ({
                ...data,
                password: passMatch.pass1,
                validUser: true,
            }));
            setError("");
        }
    };

    return (
        <>
            <div className="container-2">
                <div className="page-content-container">
                    <h2 className="page-sub-title">Create your free account today. <Link className="link" to="/login">Back to Login</Link></h2>
                    <div>
                        <form onSubmit={onSubmit}>
                            <div className="form-group form-input-inline">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName">
                                        First Name<sup>*</sup>
                                    </label>
                                    <input
                                        id="firstName"
                                        name='firstName'
                                        className="form-input"
                                        type="text"
                                        ref={fname}
                                        value={user.firstName}
                                        onChange={handleChange}
                                        required
                                        autoFocus
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName">
                                        Last Name<sup>*</sup>
                                    </label>
                                    <input
                                        id="lastName"
                                        name='lastName'
                                        className="form-input"
                                        type="text"
                                        ref={lname}
                                        value={user.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email<sup>*</sup>
                                </label>
                                <input
                                    id='email'
                                    name='email'
                                    className="form-input"
                                    type="email"
                                    ref={uEmail}
                                    value={user.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    Password<sup>*</sup>
                                </label>
                                <input
                                    id="password"
                                    name='pass1'
                                    className="form-input"
                                    type="password"
                                    minLength="5"
                                    ref={uPass}
                                    value={passMatch.pass1}
                                    onChange={passHandle}
                                    required
                                    placeholder="Create a password"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="passwordCon">
                                    Confirm Password<sup>*</sup>
                                </label>
                                <input
                                    id="passwordCon"
                                    name='pass2'
                                    className="form-input"
                                    type="password"
                                    minLength="5"
                                    ref={uPassC}
                                    value={passMatch.pass2}
                                    onChange={passHandle}
                                    onBlur={passMatchConfirm}
                                    required
                                    placeholder="Match your password"
                                />
                            </div>
                            {error && <p className='error-message'>{error}</p>}
                            <div className="form-controls">
                                <button 
                                    className="btn btn-primary btn-sm float-end"
                                    onClick={validation}
                                >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="page-image-container">
                    <SignUpSvg />
                </div>
            </div>
        </>
    )
};