import Carousel from "./components/Carousel";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
