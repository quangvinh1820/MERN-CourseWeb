import images from "../img/image";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicRequest } from "../requestMethod";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            try {
              const res = await publicRequest.get("/courses");
              const proCourses = res.data.filter(course => course.price > 0);
              setCourses(proCourses);
            } catch (error) {
              console.error("Error fetching courses:", error);
            }
          };
          getCourses();
        }, []);
      

    return (
    // Courses Start
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Pro Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
            {courses.length > 0 && courses.slice(0, 3).map((item) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100 h-100" src={item.image} style={{objectFit: 'cover'}} alt="" />
                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                            <Link to={`/courses/${item._id}`} className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Learn Now</Link>
                            <Link to={`/cart/${item._id}`} className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Buy Now</Link>
                        </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                        <Link to={`/courses/${item._id}`}><h3 className="mb-4">{item.nameCourse}</h3></Link>
                        <h5 className="mb-0">Price: {item.price} VND</h5>                        
                    </div>
                    <div className="mt-4 d-flex border-top">
                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{item.author}</small>
                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{item.Thoiluong}</small>
                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{item.Nhom}</small>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
    // Courses End
    );
    };
    
    export default Courses;