import {ReactComponent as Logo} from '../assets/images/Logo .svg'
import { useState } from 'react';
import MenuButton from './ui/MenuButton';
import CloseButton from './ui/CloseButton';
import Nav from './ui/Nav';
import { Link } from 'react-router';
import usePageTitle from '../hooks/usePageTitle';
function Header() {

    const [setPageTitle] = usePageTitle();
    const [menuShow, setMenuShow] = useState(false)

    return (
        <>
            <header>
                <div className="container">
                    <div className='navbar'>
                        <div className='container-logo'>
                            <Link 
                                to="/"
                                onClick={() => {
                                    setPageTitle("Home");
                                }}
                            >
                                <Logo className="logo" />
                            </Link>
                        </div>
                        <div className="container-menu-controls">
                            <MenuButton onClick={() => { setMenuShow(true) }} />
                        </div>
                        <div className={`container-nav ${menuShow ? 'show-navbar' : 'hide-navbar'}`} >
                            <CloseButton onClick={() => { setMenuShow(false) }} />
                            <Nav onClick={() => { setMenuShow(false) }} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;