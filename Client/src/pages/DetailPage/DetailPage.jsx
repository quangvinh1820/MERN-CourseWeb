import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import './detailPage.css';

const DetailPage = () => {
  const [course, setCourse] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await publicRequest.get('/courses/find/' + id);
        setCourse(res.data);

        // Kiểm tra xem khóa học có playlist không và có video trong playlist không
        if (res.data.playlist && res.data.playlist.length > 0) {
          setSelectedVideo(res.data.playlist[0]); // Chọn video đầu tiên trong playlist
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    getCourse();
  }, [id]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <Header />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="position-relative">
                <iframe
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${selectedVideo ? selectedVideo.video : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="below">
                <div className="title mt-4">
                  <h1 id="title-video">{selectedVideo ? selectedVideo.name : ''}</h1>
                  <div className="top-row">
                    <div className="owner">
                      <Link to={'#'}>
                        <img id="avatar" src={course.authorAvatar} alt="" />
                        <span>{course.author}</span>
                      </Link>
                    </div>
                    <div className="actions"></div>
                  </div>
                  <div id="bottom-row">
                    <span id="description">{selectedVideo ? selectedVideo.des : ''}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 wow fadeInUp playlist-panel" data-wow-delay="0.3s">
              <h2 className="header-panel-playlist">Playlist</h2>
              <ul className="playlist">
                {course.playlist &&
                  course.playlist.map((item, index) => (
                    <li key={index} onClick={() => handleVideoClick(item)}>
                      <img style={{ width: '100px', height: '56px' }} src={`https://i.ytimg.com/vi/${item.video}/hqdefault.jpg`} alt="Course Thumbnail" />
                      <span>{item.name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default DetailPage;
