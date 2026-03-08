import { useState, useEffect, useRef } from 'react';
import './QandA.css';

interface QuestionCardProps {
  question: string;
  index: number;
  mascotVariant: number;
}

const QuestionCard = ({ question, index, mascotVariant }: QuestionCardProps) => {
  // Mascot emojis and styles for each variant (until images are added)
  const mascotStyles = [
    { emoji: '🤔', rotation: 5 },
    { emoji: '😊', rotation: -5 },
    { emoji: '💭', rotation: 3 },
    { emoji: '😣', rotation: -3 }
  ];
  
  const mascot = mascotStyles[mascotVariant];
  
  return (
    <div className="qa-question-card">
      <h3 className="qa-card-question">{question}</h3>
      <div className="qa-card-mascot">
        <div 
          className="qa-mascot-placeholder" 
          style={{ transform: `rotate(${mascot.rotation}deg)` }}
        >
          <span className="qa-mascot-emoji">{mascot.emoji}</span>
        </div>
      </div>
    </div>
  );
};

const QandA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<number | null>(null);

  const questions = [
    "Đau dạ dày hay trào ngược khác nhau thế nào?",
    "GERD phổ biến tới mức nào ở Việt Nam?",
    "Đau thượng vị, đầy bụng, ợ hơi có phải \"đau dạ dày\" không?",
    "Khi nào cần đi khám ngay, không nên tự chịu?",
    "Trào ngược dạ dày nên kiêng gì để cải thiện triệu chứng?",
    "Stress có thể làm nặng vấn đề dạ dày không?",
    "Vi khuẩn HP lây qua đường nào?",
    "Khi nào nên nội soi dạ dày?",
    "Tự uống thuốc giảm đau có thể làm hại dạ dày không?",
    "Buồn nôn, nôn ra máu, đi ngoài phân đen có nguy hiểm không?"
  ];

  // Get mascot variant for each question (rotate through 4 variants)
  const getMascotVariant = (questionIndex: number) => {
    return questionIndex % 4;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
    }, 2000);
  };

  // Auto-play effect
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
    }, 2000); // Change slide every 2 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [questions.length]);

  return (
    <section className="qa-section" id="qa">
      {/* Header */}
      <header className="qa-header">
        <h1 className="qa-main-title">
          CÂU HỎI THƯỜNG GẶP
        </h1>
        <p className="qa-main-subtitle">
          Khám phá các câu hỏi phổ biến về sức khỏe dạ dày từ chiến dịch Êm Dạ Mode.
        </p>
      </header>

      {/* Slider Container */}
      <div className="qa-slider-container">
        <div className="qa-slider-wrapper">
          {/* Previous Button */}
          <button 
            className="qa-slider-button qa-slider-button-prev" 
            onClick={handlePrevious}
            aria-label="Previous question"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {/* Cards Slider - Show 4 cards */}
          <div className="qa-slider-track">
            <div 
              className="qa-slider-content"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 4}%)`
              }}
            >
              {/* Duplicate questions for infinite scroll effect */}
              {[...questions, ...questions].map((question, index) => (
                <div key={index} className="qa-slider-item">
                  <QuestionCard 
                    question={question} 
                    index={index % questions.length}
                    mascotVariant={getMascotVariant(index % questions.length)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="qa-slider-button qa-slider-button-next" 
            onClick={handleNext}
            aria-label="Next question"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="qa-slider-dots">
          {questions.map((_, index) => (
            <button
              key={index}
              className={`qa-slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                resetAutoPlay();
              }}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Submit Question Section */}
      <div className="qa-submit-section">
        <div className="qa-submit-container">
          <h2 className="qa-submit-title">Bạn không thấy câu hỏi của mình?</h2>
          <p className="qa-submit-subtitle">
            Nhập câu hỏi tại đây, tụi mình sẽ phản hồi qua email hoặc cập nhật lên danh sách nhé!
          </p>
          <form className="qa-submit-form">
            <input
              className="qa-submit-input"
              placeholder="Ví dụ: Đau thượng vị về đêm có nguy hiểm không?"
              type="text"
            />
            <button className="qa-submit-button" type="button">
              Gửi ngay <span className="material-symbols-outlined">send</span>
            </button>
          </form>
          <p className="qa-submit-note">
            Câu hỏi của bạn sẽ được đội ngũ chuyên gia phản hồi trong 24h.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QandA;
