import { useState } from 'react';
import './QandA.css';

interface FlipCardProps {
  question: string;
  answer: string;
  source: string;
  sourceLink: string;
  relatedQuestions: string[];
}

const FlipCard = ({ question, answer, source, sourceLink, relatedQuestions }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`qa-flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="qa-flip-card-inner">
        {/* Front Side */}
        <div className="qa-flip-card-front">
          <h3 className="qa-question-title">
            {question}
          </h3>
          <span className="material-symbols-outlined qa-icon">autorenew</span>
          <p className="qa-hint-text">Nhấn để xem câu trả lời</p>
        </div>
        
        {/* Back Side */}
        <div className="qa-flip-card-back">
          <h4 className="qa-answer-label">Câu trả lời:</h4>
          <p className="qa-answer-text">
            {answer}
          </p>
          <div className="qa-card-footer">
            <p className="qa-footer-label">Nguồn tham khảo:</p>
            <a className="qa-source-link" href={sourceLink} target="_blank" rel="noopener noreferrer">
              {source}
            </a>
            <p className="qa-footer-label">Câu hỏi liên quan:</p>
            <ul className="qa-related-questions">
              {relatedQuestions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const QandA = () => {
  const qaData = [
    {
      question: "ĐAU DẠ DÀY HAY TRÀO NGƯỢC KHÁC NHAU THẾ NÀO?",
      answer: "Đau dạ dày thường tập trung ở vùng thượng vị, cảm giác âm ỉ hoặc quặn thắt. Trào ngược (GERD) thường đi kèm cảm giác nóng rát lan từ dạ dày lên thực quản, ợ chua và khó nuốt.",
      source: "Thư viện Y khoa Quốc gia",
      sourceLink: "#",
      relatedQuestions: [
        "Triệu chứng ợ hơi kéo dài?",
        "Khi nào cần đi nội soi?"
      ]
    },
    {
      question: "GERD PHỔ BIẾN TỚI MỨC NÀO Ở VIỆT NAM?",
      answer: "Ước tính khoảng 10-15% dân số Việt Nam gặp các vấn đề về trào ngược dạ dày thực quản do thói quen ăn uống nhanh, nhiều dầu mỡ và stress công việc cao.",
      source: "Báo Sức Khỏe & Đời Sống",
      sourceLink: "#",
      relatedQuestions: [
        "Chế độ ăn cho người GERD?",
        "Stress ảnh hưởng dạ dày sao?"
      ]
    },
    {
      question: "ĐAU THƯỢNG VỊ, ĐẦY BỤNG CÓ PHẢI \"BỆNH DẠ DÀY\"?",
      answer: "Đúng, đây là những dấu hiệu điển hình của viêm loét dạ dày hoặc khó tiêu chức năng. Tuy nhiên, cũng có thể do túi mật hoặc tụy, cần thăm khám bác sĩ chuyên khoa.",
      source: "Cổng thông tin Vinmec",
      sourceLink: "#",
      relatedQuestions: [
        "Phân biệt đau dạ dày & gan?",
        "Cách giảm đau nhanh tại nhà?"
      ]
    },
    {
      question: "KHI NÀO CẦN ĐI KHÁM NGAY, KHÔNG NÊN TỰ CHỊU?",
      answer: "Đi khám ngay nếu: Nôn ra máu hoặc đi ngoài phân đen, sụt cân không rõ nguyên nhân, nuốt nghẹn, hoặc đau bụng dữ dội không thuyên giảm sau khi nghỉ ngơi.",
      source: "Nhà thuốc Long Châu",
      sourceLink: "#",
      relatedQuestions: [
        "Xuất huyết dạ dày có nguy hiểm?",
        "Tầm soát ung thư dạ dày?"
      ]
    },
    {
      question: "TRÀO NGƯỢC DẠ DÀY NÊN KIÊNG GÌ ĐỂ CẢI THIỆN?",
      answer: "Hạn chế thực phẩm cay nóng, chua, cà phê, rượu bia, chocolate và các loại đồ uống có gas. Không nên nằm ngay sau khi ăn ít nhất 2-3 tiếng.",
      source: "BV Đại học Y Dược TP.HCM",
      sourceLink: "#",
      relatedQuestions: [
        "Tư thế nằm ngủ cho người trào ngược?",
        "Mẹo dân gian chữa dạ dày?"
      ]
    },
    {
      question: "STRESS CÓ THỂ LÀM NẶNG VẤN ĐỀ DẠ DÀY KHÔNG?",
      answer: "Chắc chắn có. Stress kích thích hệ thần kinh giao cảm làm tăng tiết acid dạ dày và làm chậm quá trình tiêu hóa, dễ dẫn đến viêm loét và hội chứng ruột kích thích.",
      source: "Healthline",
      sourceLink: "#",
      relatedQuestions: [
        "Kỹ thuật thở giảm đau dạ dày?",
        "Mối liên hệ não - ruột?"
      ]
    }
  ];

  return (
    <section className="qa-section" id="qa">
      {/* Header */}
      <header className="qa-header">
        <h1 className="qa-main-title">
          CÂU HỎI THƯỜNG GẶP
        </h1>
        <p className="qa-main-subtitle">
          Tìm hiểu thêm về sức khỏe dạ dày qua các câu hỏi phổ biến từ chiến dịch Êm Dạ Mode.
        </p>
      </header>

      {/* Q&A Cards Grid */}
      <div className="qa-container">
        <div className="qa-grid">
          {qaData.map((qa, index) => (
            <FlipCard key={index} {...qa} />
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
