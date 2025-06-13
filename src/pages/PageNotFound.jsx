import usePageTitle from "../hooks/usePageTitle";
import {ReactComponent as TestSvg} from "../assets/images/illustrations/page-not-found.svg"
import { Link } from "react-router";

function PageNotFound() {
    usePageTitle("Page Not Found");

    return (
        <section>
            <div className="items-center">
                <div className="container not-found-container">
                    <h1 className="page-title text-center">Page Not Found</h1>
                    <div className="message-div">
                        <TestSvg width="400px" height="auto"  />
                        <p>This page has gone missing. Let us help you find your way back.</p>
                        <Link className="btn btn-secondary" to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;