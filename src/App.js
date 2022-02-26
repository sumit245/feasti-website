import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import BannerCarousel from "./ControlledCarousel";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row" >
        <BannerCarousel />
      </div>
      <div className="row">
        <HowItWorks />
      </div>
    </div>
  );
}

export default App;
