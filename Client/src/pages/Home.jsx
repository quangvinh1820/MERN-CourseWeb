import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import About from "../components/About";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header/>
            <Carousel />
            <Service />
            <About />
            <Categories />
            <Courses />
            <Team />
            <Testimonial />
            <Footer />
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;