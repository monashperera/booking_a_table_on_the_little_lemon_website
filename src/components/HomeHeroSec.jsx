import { Link } from 'react-router';

export default function HomeHeroSec() {
    return (
        <section className='hero-section'>
            <div className="container-hero">
                <div className="container">
                    <div className='hero-content'>
                        <div>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div>
                            <Link to="/reservation" className='btn btn-primary'>
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <img src={require('../assets/images/hero_image.webp')} alt="hero_image" />
                    </div>
                </div>
            </div>
        </section>
    );
};