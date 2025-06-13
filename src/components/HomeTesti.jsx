import RatingStar from './ui/RatingStar';

export default function HomeTesti() {
    const list = [
        {
            id: 1,
            src: require('../assets/images/testimonial/u1.webp'),
            name: "Mike",
            text: "Lorem Ipsum is simply dummy text of the printing and ",
            rate: 3

        },
        {
            id: 2,
            src: require('../assets/images/testimonial/u2.webp'),
            name: "Jane",
            text: "Lorem Ipsum is simply dummy text of the printing and ",
            rate: 4

        },
        {
            id: 3,
            src: require('../assets/images/testimonial/u3.webp'),
            name: "Christina",
            text: "Lorem Ipsum is simply dummy text of the printing and ",
            rate: 1

        },
        {
            id: 4,
            src: require('../assets/images/testimonial/u4.webp'),
            name: "Chan",
            text: "Lorem Ipsum is simply dummy text of the printing and ",
            rate: 5

        },
    ]
    return (
        <section className="testi-section">
            <div className="items-center">
                <div className="container testi-container">
                    <div className="testi-container-title">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="testi-container-content">
                        {list && list.map(data => (
                            <div key={data.id}>
                                <div className="testi-card">
                                    <div className="testi-card-img">
                                        <img src={data.src} alt={data.name} />
                                    </div>
                                    <div className="testi-card-name">
                                        <h3>{data.name}</h3>
                                    </div>
                                    <div className="testi-card-text">
                                        <p>{data.text}</p>
                                    </div>
                                    <div className="testi-card-rating">
                                        <RatingStar Rating={data.rate} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};