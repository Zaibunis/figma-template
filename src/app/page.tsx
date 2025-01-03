import Home from "./component/home"
import Hero from "./component/hero"
import Brands from "./component/brand"
import NewArrivals from "./component/newArrivals"
import TopSelling from "./component/TopSelling"
import DressStyle from "./component/dressStyle";
import DressStyleCard from "./component/dressStyleCard";
import Review from "./component/review"
import Footer from "./component/footer"




export default function Land() {
  return (
  <div>
    <Home />
<Hero />
<Brands />
<NewArrivals />
<TopSelling />
<DressStyle />
<DressStyleCard title={""} url={""} />
<Review />
<Footer />

  </div>  
  );
}
