import Index from "./component/index";
import Navbar from "./component/navbar";
import Arrival from "./component/arrival";
import Cart from "./component/cart";
import Shop from "./component/shop";
import Main from "./component/main";
import Home from "./component/home";

export default function Land() {
  return (
   <div className="bg-gray-100">
    <Index />
    <Navbar />
    <Arrival />
    <Cart />
    <Shop />
    <Main />
    <Home />
   </div>
  );
}
