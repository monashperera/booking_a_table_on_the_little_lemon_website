import { NavLink } from 'react-router';
import navigation from '../../data/navigation.json'
import usePageTitle from '../../hooks/usePageTitle';

function Nav({onClick}) {

    const [setPageTitle] = usePageTitle();

    return (
        <>
            <nav>
                <ul>
                    {navigation && navigation.map((item) =>
                        <li 
                            className="nav-item" 
                            key={item.id}
                            onClick={() => {
                                setPageTitle(item.name);
                            }}
                        >
                            <NavLink to={item.path} onClick={onClick}>{item.name}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default Nav;