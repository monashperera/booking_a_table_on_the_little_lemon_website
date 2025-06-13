import MenuList from "../components/MenuList";
import usePageTitle from "../hooks/usePageTitle";

function Menu() {
    usePageTitle("Menu");
    return (
        <section className="menu-page">
            <div className="items-center">
                <div className="container">
                    <h1 className="page-title">Our Menu</h1>
                    <MenuList />
                </div>
            </div>
        </section>
    );
};

export default Menu;