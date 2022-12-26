import Header from "./components/Header";
import Product from "./components/Product";
import Second from "./components/Second";
import Slider from "./components/Slider";
import Product1 from "./components/Product1"
import Today from "./components/Today";
import Big from "./components/Big";
import Foryou from "./components/Foryou";
import LastSecond from "./components/LastSecond";
import Full from "./components/Full";
import './style.css'
import Bills from "./components/Bills";
function App() {
  return (
    <div className=" w-full flex justify-center overflow-x-hidden">

      <div className="2xl:w-[50%] w-full">
        <Header />
        <div className="px-4">
          <Bills />
          <Second />
          <Slider />
          <Product />
          <Product1 />
          <Today />
          <Full />
          <Big />
          <Foryou />
          <LastSecond />

        </div>
      </div>

    </div>
  );
}

export default App;
