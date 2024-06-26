import '../App.css';

import LeftNavBar from '../components/LeftNavBar';
import RightNavBar from '../components/RigtNavBar';
import SearchBar from '../components/SearchBar';
import ShoppingTools from '../components/ShoppingTools';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import CategoryItem from '../components/CategoryItem';
import Blog from '../components/Blog';

const HomePage = () => {
  return (
    <>
      <div className='App'>
        <div className='container'>
          <nav className='container-navBar'>
            <div className='left-navBar'>
              <LeftNavBar />
            </div>
            <div className='right-navBar'>
              <RightNavBar />
            </div>
          </nav>
          <div className='header-main-section'>
            <div className='search-area'>
              <div className='search-input'>
                <SearchBar />
              </div>
            </div>
            <div className='logo-area'></div>
            <div className='header-tools'>
              <ShoppingTools />
            </div>
          </div>
          <div className='container-main-navigation'>
            <nav className='navigation-menu'>
              <Navigation />
            </nav>
          </div>
          <div className='container-slider'>
            <Carousel />
          </div>
          <section className='product-category'>
            <CategoryItem />
          </section>
          <div className='container-selling-item'>
            <h1 className='title-selling-items'>Best Selling Products</h1>
            <div className='card-selling-items'>
              <Card />
            </div>
          </div>
          <section className='container-blog-wrapper'>
            <h1 className='title-blog'>Latest news</h1>
            <Blog />
          </section>
          <footer className='container-fotter'>stopka</footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
