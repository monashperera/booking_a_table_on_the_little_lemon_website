import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import usePageTitle from "../hooks/usePageTitle";
import SignUpDone from "../components/SignUpDone";

export default function SingUp() {
    usePageTitle("Sign Up")

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        validUser: false,
    };

    const passInitialState = {
        pass1: '',
        pass2: ''
    }

    const [user, setUser] = useState(initialState);
    const [passMatch, setPassMatch] = useState(passInitialState);
    const [submitData, setSubmitData] = useState({
        subDone: false,
        userName: ''
    });



    const singUpSubmit = (e) => {
        e.preventDefault();
        if (user.validUser) {
            console.log(user);
            setSubmitData((data) => ({
                ...data,
                subDone: true,
                userName: `${user.firstName} ${user.lastName}`
            }));

            setUser(initialState);
            setPassMatch(passInitialState);
        } else {
            console.log("Not Submit");
        }
    }

    return (
        <section>
            <div className="items-center">
                <div className="container">
                    <h1 className="page-title">Sign Up</h1>
                    {submitData.subDone ?
                        <SignUpDone userName={submitData.userName} /> :
                        <SignUpForm
                            user={user}
                            setUser={setUser}
                            passMatch={passMatch}
                            setPassMatch={setPassMatch}
                            onSubmit={singUpSubmit}
                        />
                    }

                </div>
            </div>
        </section>
    )
};