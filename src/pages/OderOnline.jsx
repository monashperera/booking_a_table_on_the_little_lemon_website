import ComingSoon from "../components/ComingSoon";
import usePageTitle from "../hooks/usePageTitle";

function OderOnline() {
    usePageTitle("Oder Online");
    return (
        <section>
            <div className="items-center">
                <div className="container">
                    <h1 className="page-title text-center">Oder Online</h1>
                    <ComingSoon />
                </div>
            </div>
        </section>
    );
};

export default OderOnline;