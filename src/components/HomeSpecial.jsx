import { Link } from "react-router";
import Button from './ui/Button';

export default function HomeSpecial() {
    const list = [
        {
            id: 1,
            src: require('../assets/images/salad.webp'),
            alt: 'Salad',
            title: "Greek Salad",
            price: "$1.00",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        },
        {
            id: 2,
            src: require('../assets/images/cake.webp'),
            alt: 'Lemon Dessert',
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        },
        {
            id: 3,
            src: require('../assets/images/bru.webp'),
            alt: 'Bruchetta',
            title: "Bruchetta",
            price: "$3.00",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        }
    ]
    return (
        <section>
            <div className="items-center">
                <div className="container special-container">
                    <div>
                        <h1>Specials</h1>
                    </div>
                    <div>
                        <Link to="/menu" className="btn btn-primary">
                            Online Menu
                        </Link>
                    </div>
                    <div className="special-card-container">
                        {list && list.map(data => (
                            <article key={data.id}>
                                <div className="special-card">
                                    <div className="card-img">
                                        <img src={data.src} alt={data.alt} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="title">{data.title}</h2>
                                        <h3 className="price">{data.price}</h3>
                                        <p className="description">{data.description}</p>
                                    </div>
                                    <div className="card-controls">
                                        <Button className="btn-secondary w-100">
                                            Order a delivery
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1 288 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.8 0zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}