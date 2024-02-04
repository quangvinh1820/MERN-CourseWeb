import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BackToTop from "../../components/BackToTop";
import { publicRequest } from '../../requestMethod';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import './cart.css';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState({});
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await publicRequest.get('/courses/find/' + id);
        setCart(res.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    getCart();
  }, [id]);
  return (
    <div>
      <Header />
      <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">PAYMENT</h6>
          <h1 className="mb-5">Mở toàn bộ khóa học</h1>
        </div>
        <div className="row g-3">
            <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
              <div className="payment-des">
                <h5 className="mb-3">{cart.paymentDes}</h5>
              </div>
              <div className="payment-price">
                <div className="payment-total">
                  <span className="price-title">Tổng tiền:</span>                 
                  <span className="text-primary">{cart.price} đ</span>
                </div>
              </div>
                <button className="get-payment text-primary">Lấy thông tin thanh toán</button>
            </div>
            <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}} >
              <div className="benefit-wrapper">
                <h3 className="text-white">Bạn sẽ nhận được gì?</h3>
                <div className="benefit-des">
                  <h5>Truy cập toàn bộ khóa {cart.nameCourse}</h5>
                  <h5>Hơn 627 bài học</h5>
                  <h5>Hơn 627 bài học</h5>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Cart;