import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">ÊM DẠ MODE</h1>
          <h2 className="hero-subtitle">
            Bật mode "Êm Dạ", nhịp sống mượt mà!
          </h2>
          <p className="hero-description">
            Chiến dịch truyền thông gia tăng nhận thức về mức độ nghiêm trọng của bệnh lý dạ dày cho người trẻ từ 18 đến 24 tuổi tại TP. Hồ Chí Minh.
          </p>
          <div className="hero-actions">
            <a href="#qa" className="btn-hero btn-orange">
              🧠 Q&A Nhanh
            </a>
            <a href="#test" className="btn-hero btn-red">
              🧪 BÀI TEST DẠ DÀY
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Vấn đề dạ dày đang được <span className="text-primary">trẻ hoá</span> một cách rõ rệt
            </h2>
            <p className="section-subtitle">
              Các vấn đề dạ dày đang tăng và xuất hiện nhiều ở nhóm trẻ, ảnh hưởng trực tiếp đến chất lượng cuộc sống hàng ngày.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <span className="material-symbols-outlined stat-icon">groups</span>
              </div>
              <div className="stat-value">5-10 triệu</div>
              <p className="stat-description">người mắc GERD</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <span className="material-symbols-outlined stat-icon">percent</span>
              </div>
              <div className="stat-value">15-20%</div>
              <p className="stat-description">dân số mắc viêm loét dạ dày</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <span className="material-symbols-outlined stat-icon">coronavirus</span>
              </div>
              <div className="stat-value">Khoảng 70%</div>
              <p className="stat-description">dân số có thể nhiễm vi khuẩn HP</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <span className="material-symbols-outlined stat-icon">trending_up</span>
              </div>
              <div className="stat-value">Top 18/20</div>
              <p className="stat-description">quốc gia tỷ lệ ung thư dạ dày cao nhất</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Tại sao chọn <span className="text-primary">ÊM DẠ MODE</span>?
            </h2>
            <p className="section-subtitle">
              Chúng tôi mang đến giải pháp toàn diện cho sức khỏe dạ dày của bạn, giúp bạn tận hưởng cuộc sống mượt mà nhất.
            </p>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="about-project-section" id="about">
        <div className="section-container">
          <div className="about-project-grid">
            <div className="about-project-image">
              <img src="/src/assets/Images/EmDaCover.png" alt="Êm Dạ Mode Project" />
            </div>
            <div className="about-project-content">
              <h2 className="about-project-title">Về dự án</h2>
              <p className="about-project-tagline">Sống vui khỏe</p>
              <p className="about-project-description">
                Dự án "Êm Dạ Mode" là chiến dịch truyền thông xã hội nhằm nâng cao nhận thức về sức khỏe dạ dày cho giới trẻ. 
                Chúng tôi mong muốn mang đến những thông tin hữu ích, giúp bạn hiểu rõ hơn về tình trạng sức khỏe của mình 
                và có những thay đổi tích cực trong lối sống hàng ngày.
              </p>
              {/* <a href="/about" className="btn-about-details">
                Thông tin chi tiết
              </a> */}
            <Link className="btn-about-details" to="/about">Thông tin chi tiết</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
};

export default HomePage;
