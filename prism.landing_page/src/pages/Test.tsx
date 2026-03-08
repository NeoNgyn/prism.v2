import Header from '../components/Header';
import Footer from '../components/Footer';
import './Test.css';

const Test = () => {
  const handleStartTest = () => {
    // TODO: Implement test logic
    console.log('Starting stomach health test...');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="test-hero-section">
          <div className="test-hero-container">
            <h1 className="test-hero-title">
              Dạ dày của bạn đang ở Level nào?
            </h1>
            <p className="test-hero-description">
              Làm bài test 3 phút trước khi cơn đau pop-up lần nữa!
            </p>
          </div>
        </section>

        {/* Test Introduction Section */}
        <section className="test-intro-section">
          <div className="test-intro-container">
            <div className="test-intro-card">
              {/* Decorative backgrounds */}
              <div className="test-intro-bg test-intro-bg-1"></div>
              <div className="test-intro-bg test-intro-bg-2"></div>
              
              {/* Content */}
              <div className="test-intro-content">
                <h2 className="test-intro-title">Bài test này sẽ giúp bạn:</h2>
                
                <ul className="test-intro-list">
                  <li className="test-intro-item">
                    <div className="test-intro-icon">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="test-intro-text">Đánh giá mức độ nghiêm trọng của các triệu chứng dạ dày</p>
                  </li>
                  <li className="test-intro-item">
                    <div className="test-intro-icon">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="test-intro-text">Nhận biết các yếu tố nguy cơ từ lối sống</p>
                  </li>
                  <li className="test-intro-item">
                    <div className="test-intro-icon">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="test-intro-text">Nhận lời khuyên cụ thể để cải thiện sức khỏe</p>
                  </li>
                </ul>

                <div className="test-intro-actions">
                  <button 
                    className="test-start-btn"
                    onClick={handleStartTest}
                  >
                    <span className="material-symbols-outlined">play_arrow</span>
                    Bắt đầu test ngay
                  </button>
                  
                  <p className="test-intro-disclaimer">
                    *Kết quả chỉ mang tính chất tham khảo. Vui lòng tham khảo ý kiến bác sĩ để được chẩn đoán và điều trị chính xác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Test;
