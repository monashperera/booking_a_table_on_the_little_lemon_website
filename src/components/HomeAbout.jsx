import { Link } from 'react-router';

export default function HomeAbout() {
    return (
        <section className="home-about-section">
            <div className="items-center">
                <div className="container home-about-container">
                    <div className="home-about-content">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the industry's standard dummy text ever   
                        </p>
                        <Link className='link' to="/about">Read more</Link>
                    </div>
                    <div className="home-about-imgs">
                        <img className='about-img-1' src={require('../assets/images/about1.webp')} alt="about1" />
                        <img className='about-img-2' src={require('../assets/images/about2.webp')} alt="about1" />
                    </div>
                </div>
            </div>
        </section>
    );
};