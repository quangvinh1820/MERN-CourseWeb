import { useState } from "react";
import { create } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    // Team Start
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Create Course</h6>
                <h1 className="mb-5">Make a Course</h1>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">TÊN KHÓA HỌC</label>
                <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="tên khóa học..." 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">MÔ TẢ</label>
                <input type="text" class="form-control" id="description" placeholder="mô tả..." 
                onChange={(e) => setDescription(e.target.value)}/>
            </div>
            {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">NHÓM</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">HÌNH ẢNH</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">TÊN BÀI GIẢNG</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">MÔ TẢ BÀI GIẢNG</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">VIDEO</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">BÀI TẬP</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">MÃ SỐ</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">GIÁ TIỀN</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">TÁC GIẢ</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">THỜI LƯỢNG</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">GIỚI THIỆU</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <div class="col-auto">
                <button 
                type="submit" 
                class="btn btn-primary mb-3"
                onClick={handleClick}
                disabled={loading}
                >ĐĂNG KHÓA HỌC</button>
                {error}
            </div>
        </div>
    </div>
    // Team End
    );
    };
    
    export default Create;