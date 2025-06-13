import { useState } from "react"
import { ReactComponent as ConfirmSvg } from "../assets/images/illustrations/authentication_tbfc.svg"
import { submitAPI } from "../services/api"

export default function BookingConfirm({ reserveData, onCancel, onSubmissionComplete }) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleConfirmAndSubmit = async () => {
        setIsSubmitting(true);
        setSubmissionStatus(null);
        try {
            const success = await submitAPI(reserveData);
            if (success) {
                setSubmissionStatus('success');
                console.log("Confirmed Successfully");
                onSubmissionComplete(true);
            } else {
                setSubmissionStatus('failure');
                console.log('Reservation Failed');
                onSubmissionComplete(false);
            }
        } catch (error) {
            console.error("Error during submission", error);
            setSubmissionStatus('failure');
            console.log("An error occurred during submission");
            onSubmissionComplete(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container-2">
            <div className="page-content-container">
                <h2 className="page-sub-title">Please review the details below</h2>
                {/* Start */}
                <div className="status-container">
                    <span className="active">1</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                    <span className="active">2</span>
                </div>
                {/* End */}

                <div className="from-confirm-container" aria-label="Review Booking Details">
                    <div className="form-group confirm-container">
                        <span>Date</span>
                        <span>: {reserveData.bookDate}</span>
                    </div>
                    <div className="form-group confirm-container">
                        <span>Time</span>
                        <span>: {reserveData.bookTime}</span>
                    </div>
                    <div className="form-group confirm-container">
                        <span>Number of guest</span>
                        <span>: {reserveData.bookGuest}</span>
                    </div>
                    <div className="form-group confirm-container">
                        <span>Occasion</span>
                        <span>: {reserveData.bookOcc}</span>
                    </div>
                    {submissionStatus === 'success' && (
                        <div className="form-group">
                            <h4 className="color-done">Submission Successful!</h4>
                        </div>
                    )}
                    {submissionStatus === 'failure' && (
                        <div className="form-group">
                            <h4 className="error-message">Submission Failed. Please try again.</h4>
                        </div>
                    )}
                    <div className="confirm-container-control">
                        <div>
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={onCancel}
                            >
                                Back
                            </button>
                        </div>
                        <div>

                            <button
                                className="btn btn-primary btn-sm"
                                onClick={handleConfirmAndSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting....' : 'Make Your reservation'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-image-container">
                <ConfirmSvg />
            </div>
        </div>
    )
}