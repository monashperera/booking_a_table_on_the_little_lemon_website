import usePageTitle from "../hooks/usePageTitle";
import { useRef, useState } from "react";
import LoginForm from "../components/LoginForm";
import LoginDone from "../components/LoginDone";

function Login() {
    usePageTitle("Login");
    const [loginStatus, setLoginStatus] = useState(false);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const nameInput = useRef(null);
    const passInput = useRef(null);

    const validate = () => {
        if (!nameInput.current.checkValidity() && !passInput.current.checkValidity()) {
            nameInput.current.classList.add('border-red');
            passInput.current.classList.add('border-red');
        } else if (!nameInput.current.checkValidity()) {
            nameInput.current.classList.add('border-red');
            passInput.current.classList.remove('border-red');
        } else if (!passInput.current.checkValidity()) {
            passInput.current.classList.add('border-red');
            nameInput.current.classList.remove('border-red');
        } else {
            nameInput.current.classList.remove('border-red');
            passInput.current.classList.remove('border-red');
        }
    };

    function handelSubmit(e) {
        e.preventDefault();
        console.log(userName, userPassword);
        setUserName("");
        setUserPassword("");
        setLoginStatus(true);
    }

    return (
        <section>
            <div className="items-center">
                <div className="container">
                    <h1 className="page-title">Login</h1>
                    {
                        loginStatus ? 
                            <LoginDone setLoginStatus={setLoginStatus} /> :
                            <LoginForm
                                userName={userName}
                                setUserName={setUserName}
                                userPassword={userPassword}
                                setUserPassword={setUserPassword}
                                nameInput={nameInput}
                                passInput={passInput}
                                validate={validate}
                                handelSubmit={handelSubmit}
                            />
                    }
                </div>
            </div>
        </section>
    );
};

export default Login;
