import {ReactComponent as SignUpDoneSvg} from '../assets/images/illustrations/sign-up-done.svg';
export default function SignUpDone(props) {
    return(
        <div className="info-container">
            <SignUpDoneSvg />
            <p>
                Great job, <span>{props.userName}</span>!
                Your registration is complete.
            </p>
        </div>
    )
};