import { useEffect, useState } from "react";
import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";
import FooterSocialLinks from "./FooterSocialLinks";
import LogoImage from "./ui/LogoImage";

function Footer() {

    const [year, setYear] = useState(2022);
    useEffect(() => {
        setYear(new Date().getFullYear())
    },[]);

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-details">
                        <div>
                            <LogoImage src={require('../assets/images/logo2.webp')} className="footer-logo" alt="Little Lemon" />
                        </div>
                        <div>
                            <FooterNav />
                        </div>
                        <div>
                            <FooterContact />
                        </div>
                        <div>
                            <FooterSocialLinks />
                        </div>
                    </div>
                    <div>
                        <p className="copy-text">Copyright &copy; {year} Little Lemon. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;