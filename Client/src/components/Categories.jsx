import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicRequest } from "../requestMethod";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get("/courses");
        // Filter out courses with price greater than 0
        const freeCourses = res.data.filter(course => course.price === 0);
        setCategories(freeCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
          <h1 className="mb-5">Free Courses</h1>
        </div>
        <div className="row g-3">
          {categories.map(item => (
            <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}} key={item._id}>
              <Link to={`/courses/${item._id}`} className="position-relative d-block h-100 overflow-hidden">
                <img className="img-fluid position-absolute w-100 h-100" src={item.image} style={{objectFit: 'cover'}} alt={item.nameCourse} />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                  <h5 className="m-0">{item.nameCourse}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Categories;