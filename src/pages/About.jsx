import usePageTitle from "../hooks/usePageTitle";

function About() {
    usePageTitle('About');
    return (
        <section>
            <div className="items-center">
                <div className="container about-page-container">
                    <div className="about-p-content">
                        <h1 className="page-title">About</h1>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been theLorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been the
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been theLorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been the
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been theLorem Ipsum is simply dummy
                            text of the printing and  typesetting
                            industry. Lorem Ipsum has been the
                        </p>
                    </div>
                    <div className="about-p-img-1">
                        <img src={require('../assets/images/about-page-1.webp')} alt="about" />
                    </div>
                    <div className="about-p-img-2">
                        <img src={require('../assets/images/about-page-2.webp')} alt="about-page-2" />
                    </div>
                    <div className="about-p-heading-2">
                        <h2>Our Location</h2>
                    </div>
                    <div className="about-p-map">
                        <iframe title="Our Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.50232120283!2d-87.89668557765853!3d41.83384858170716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2slk!4v1748600718617!5m2!1sen!2slk" width="99%" height="500" style={{border: "0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;