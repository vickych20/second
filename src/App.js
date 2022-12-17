import Header from "./components/Header";
import Product from "./components/Product";
import Second from "./components/Second";
import Slider from "./components/Slider";
import Product1 from "./components/Product1"
import Today from "./components/Today";
import Big from "./components/Big";
import Foryou from "./components/Foryou";
import LastSecond from "./components/LastSecond";

function App() {
  return (
    <div className="m-4">

      <Header />
      <Second />
      <Slider />
      <Product />
      <Product1 />
      <Today />
      <Big />
      <Foryou />
      <LastSecond/>
      
    </div>
  );
}

export default App;
