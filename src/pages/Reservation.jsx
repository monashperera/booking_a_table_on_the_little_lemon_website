import { useState } from "react";
import BookingConfirm from "../components/BookingConfirm";
import BookingForm from "../components/BookingForm";
import usePageTitle from "../hooks/usePageTitle";

function Reservation() {
    usePageTitle("Reservation");

    const [currentStep, setCurrentStep] = useState('form');
    const [reserveData, setReserveData] = useState(null);

    const handelReviewReserve = (data) => {
        setReserveData(data);
        setCurrentStep('confirmation');
    };

    const handelCancelConfirm = () => {
        setCurrentStep('form');
    };

    const handelSubmissionDone = (success) => {
        if (success) {
            setCurrentStep('form');
            setReserveData(null);
        } else {
            console.log("Submission failed.");
        }
    }

    return (
        <>
            <section>
                <div className="items-center">
                    <div className="container">
                        <h1 className="page-title">Make a Table Reservation</h1>
                        <>

                            {currentStep === 'form' && (
                                <BookingForm onFormSubmit={handelReviewReserve} />
                            )}
                            {currentStep === 'confirmation' && reserveData && (
                                <BookingConfirm
                                    reserveData={reserveData}
                                    onCancel={handelCancelConfirm}
                                    onSubmissionComplete={handelSubmissionDone}
                                />
                            )}
                        </>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reservation;