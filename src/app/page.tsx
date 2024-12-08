import Index from "./component/index";
import Navbar from "./component/navbar";
import Header from "./component/header";
import Brand from "./component/brand";
import Arrival from "./component/arrival";

export default function Land() {
  return (
   <div className="bg-gray-100">
    <Index />
    <Navbar />
    <Header />
    <Brand />
<Arrival />
   </div>
  );
}
