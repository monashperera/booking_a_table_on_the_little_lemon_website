import { Link } from 'react-router';
import navigation from '../data/navigation.json';

export default function FooterNav() {
    return(
        <>
            <nav className="footer-nav">
                <ul>
                    {
                        navigation && navigation.map((data) => (
                            <li key={data.id}>
                                <Link to={data.path}>{data.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};