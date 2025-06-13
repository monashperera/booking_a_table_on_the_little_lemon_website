import { useEffect, useReducer, useRef } from "react";
import { ReactComponent as Reserve1Svg } from "../assets/images/illustrations/booking_1ztt.svg"
import { fetchAPI } from "../services/api";

const initialState = {
    availableTimes: [],
    formData: {
        bookDate: '',
        bookTime: '',
        bookGuest: '',
        bookOcc: '',
    }
}

function reserveReducer(state, action) {
    switch (action.type) {
        case 'Update_times':
            return {
                ...state,
                availableTimes: action.payload
            };
        case 'Update_form_data':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value
                }
            };
        case 'Reset_form':
            return {
                ...initialState,
                availableTimes: []
            };
        default:
            return state;
    }
}

export default function BookingForm({ onFormSubmit }) {

    const [state, dispatch] = useReducer(reserveReducer, initialState);

    useEffect(() => {
        if (state.formData.bookDate) {
            const dateObj = new Date(state.formData.bookDate);
            const times = fetchAPI(dateObj);
            dispatch({ type: 'Update_times', payload: times });
        }
    }, [state.formData.bookDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'Update_form_data',
            field: name,
            value: value
        });
    };

    const dataRef = useRef(null);
    const timeRef = useRef(null);
    const guestRef = useRef(null);
    const occaRef = useRef(null);

    const valiDation = () => {
        let dR = dataRef.current, tR = timeRef.current, gR = guestRef.current, oR = occaRef.current;
        const addBorder = (x) => {
            x.classList.add('border-red');
        };
        const removeBorder = (x) => {
            x.classList.remove('border-red');
        };

        !dR.checkValidity() ? addBorder(dR) : removeBorder(dR);
        !tR.checkValidity() ? addBorder(tR) : removeBorder(tR);
        !gR.checkValidity() ? addBorder(gR) : removeBorder(gR);
        !oR.checkValidity() ? addBorder(oR) : removeBorder(oR);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(state.formData);
    }



    return (
        <div className="container-2">

            <div className="page-content-container">
                <h2 className="page-sub-title">Secure Your Booking</h2>
                {/* Start */}
                <div className="status-container">
                    <span className="active">1</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                    <span>2</span>
                </div>
                {/* End */}
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bookDate">
                                Choose date<sup>*</sup>
                            </label>
                            <input
                                ref={dataRef}
                                id='bookDate'
                                name='bookDate'
                                className="form-input"
                                type="date"
                                value={state.formData.bookDate}
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bookTime">
                                Choose time<sup>*</sup>
                            </label>
                            <select
                                ref={timeRef}
                                id="bookTime"
                                name="bookTime"
                                className="form-input"
                                value={state.formData.bookTime}
                                onChange={handleChange}
                                required
                            >
                                {state.availableTimes.length > 0 ? (
                                    state.availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))
                                ) : (
                                    state.formData.bookDate ?
                                        <option value='' disabled hidden>No times available for this date </option> :
                                        <option value='' disabled hidden>Please select a date</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bookGuest">
                                Number of guests<sup>*</sup>
                            </label>
                            <input
                                ref={guestRef}
                                id='bookGuest'
                                name='bookGuest'
                                className="form-input"
                                min="1"
                                max="10"
                                type="number"
                                placeholder="1"
                                value={state.formData.bookGuest}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bookOcc">
                                Occasion<sup>*</sup>
                            </label>
                            <select
                                ref={occaRef}
                                id="bookOcc"
                                name="bookOcc"
                                className="form-input"
                                value={state.formData.bookOcc}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>Select Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-controls">
                            <button
                                onClick={valiDation}
                                className="btn btn-primary btn-sm float-end"
                                aria-label="Review Your Reservation"
                            >Review Your Reservation</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="page-image-container">
                <Reserve1Svg />
            </div>
        </div>
    )
};