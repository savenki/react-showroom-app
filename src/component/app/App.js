
import CarComponent from '../other/car';
import CarouselComponent from '../other/carousel';
import FooterComponent from '../other/footer';
import HeaderComponent from '../other/header';
import SearchComponent from '../other/search';
import CarListingPage from '../other/carListing';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <CarouselComponent/>
      <CarListingPage/>
      <FooterComponent/>
    </div>
  );
}

export default App;
