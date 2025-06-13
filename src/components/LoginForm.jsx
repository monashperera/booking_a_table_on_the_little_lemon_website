import { Link } from "react-router";
import {ReactComponent as LogInSvg} from '../assets/images/illustrations/login_weas.svg';

export default function LoginForm(props) {
    return (
        <>
            <div className="container-2">
                <div className="page-content-container">
                    <h2 className="page-sub-title">If you don't have an account Please , <Link className="link" to="/sign-up">Sign Up Now</Link></h2>
                    <form onSubmit={props.handelSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email<sup>*</sup>
                            </label>
                            <input
                                id="email"
                                className="form-input"
                                type="email"
                                ref={props.nameInput}
                                value={props.userName}
                                onChange={(e) => (
                                    props.setUserName(e.target.value)
                                )}
                                required
                                autoFocus
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Password<sup>*</sup>
                            </label>
                            <input
                                id="password"
                                className="form-input"
                                type="password"
                                ref={props.passInput}
                                value={props.userPassword}
                                onChange={(e) => (
                                    props.setUserPassword(e.target.value)
                                )}
                                minLength="5"
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        <Link className="link"><b>Forgot password ?</b></Link>
                        <div className="form-controls">
                            <button className="btn btn-primary btn-sm float-end" onClick={props.validate}>Login</button>
                        </div>
                    </form>
                </div>
                <div className="page-image-container">
                    <LogInSvg />
                </div>
            </div>
        </>
    )
};