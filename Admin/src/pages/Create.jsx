import BackToTop from '../components/BackToTop';
import AnnounceLogOut from '../components/AnnounceLogOut';
import Nav from '../components/Nav';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState } from "react";
import { create } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.courses);

    const handleClick = (e) => {
        e.preventDefault();
        create(dispatch, { name, description });
    };
    return (
        <div id="page-top">
            <div id="wrapper">
                <Nav />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavBar />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Create Course</h1>
                                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                            </div>
                            
                            <div className="mb-3">
                                <label for="name" className="form-label">TÊN KHÓA HỌC</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="tên khóa học..." 
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">MÔ TẢ</label>
                                <input type="text" className="form-control" id="description" placeholder="mô tả..." 
                                onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div className="col-auto">
                                <button 
                                type="submit" 
                                className="btn btn-primary mb-3"
                                onClick={handleClick}
                                disabled={loading}
                                >ĐĂNG KHÓA HỌC</button>
                                {error}
                            </div>
                            
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <BackToTop />
            <AnnounceLogOut />
        </div>
    );
};

export default Create;