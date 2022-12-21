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
function App() {
  return (
    <div className="p-4 overflow-x-hidden">

      <Header />
      <Second />
      <Slider />
      <Product />
      <Product1 />
      <Today />
      <Full/>
      <Big />
      <Foryou />
      <LastSecond />
      
    </div>
  );
}

export default App;
