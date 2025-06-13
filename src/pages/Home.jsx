import HomeAbout from "../components/HomeAbout";
import HomeHeroSec from "../components/HomeHeroSec";
import HomeSpecial from "../components/HomeSpecial";
import HomeTesti from "../components/HomeTesti";
import usePageTitle from "../hooks/usePageTitle";

function Home() {
    usePageTitle("Home");
    return (
        <>
            <HomeHeroSec />
            <HomeSpecial />
            <HomeTesti />
            <HomeAbout />
        </>
    );
};

export default Home;