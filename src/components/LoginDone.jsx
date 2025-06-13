import { ReactComponent as LoginDoneSvg} from '../assets/images/illustrations/login_done.svg'

export default function LoginDone({setLoginStatus}) {
    return (
        <>
            <div className="container-2 pt-2">
                <div className="page-content-container">
                    <h2 className="page-sub-title">
                        You have successfully logged in.<br/>
                        Welcome back, Mike
                    </h2>
                    <div className="form-controls">
                        <button 
                            className="btn btn-secondary btn-sm"
                            onClick={() => (
                                setLoginStatus(false)
                            )}
                        >Logout</button>
                    </div>
                </div>
                <div className="page-image-container">
                    <LoginDoneSvg />
                </div>
            </div>
        </>
    )
};