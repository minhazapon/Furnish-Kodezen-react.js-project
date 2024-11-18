import BestProducts from "./home file/BestProducts";
import HomeBanner from "./home file/HomeBanner";
import LatesProject from "./home file/LatesProject";
import SellerProducts from "./home file/SellerProducts";



const Home = () => {

    return (
        <div>

            <HomeBanner></HomeBanner>
            <BestProducts></BestProducts>
            <SellerProducts></SellerProducts>
            <LatesProject></LatesProject>
            
        </div>
    );
};

export default Home;