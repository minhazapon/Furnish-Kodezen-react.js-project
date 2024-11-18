import BestProducts from "./home file/BestProducts";
import HomeBanner from "./home file/HomeBanner";
import SellerProducts from "./home file/SellerProducts";



const Home = () => {

    return (
        <div>

            <HomeBanner></HomeBanner>
            <BestProducts></BestProducts>
            <SellerProducts></SellerProducts>
            
        </div>
    );
};

export default Home;