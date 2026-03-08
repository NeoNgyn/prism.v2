# Hướng dẫn thêm hình ảnh Mascot cho Q&A Slider

## Bước 1: Chuẩn bị hình ảnh

Bạn cần 4 hình ảnh mascot dạ dày (đã được gửi trong attachments):
1. Stomach với dấu hỏi chấm (🤔)
2. Stomach với nhiều dấu hỏi (😊)  
3. Stomach với bong bóng suy nghĩ (💭)
4. Stomach với dấu hỏi đỏ (😣)

## Bước 2: Lưu hình ảnh

Lưu 4 hình ảnh vào thư mục `src/assets/Images/` với tên:
- `stomach1.png`
- `stomach2.png`
- `stomach3.png`
- `stomach4.png`

**Đường dẫn đầy đủ:**
```
prism.landing_page/src/assets/Images/
├── stomach1.png
├── stomach2.png
├── stomach3.png
└── stomach4.png
```

## Bước 3: Cập nhật code

Mở file `src/pages/QandA.tsx` và thay thế đoạn code sau:

### Thay thế phần import:
```tsx
// Bỏ comment các dòng này:
import stomach1 from '../assets/Images/stomach1.png';
import stomach2 from '../assets/Images/stomach2.png';
import stomach3 from '../assets/Images/stomach3.png';
import stomach4 from '../assets/Images/stomach4.png';
```

### Thay thế interface:
```tsx
interface QuestionCardProps {
  question: string;
  index: number;
  mascotImage: string;  // Đổi từ mascotVariant thành mascotImage
}
```

### Thay thế QuestionCard component:
```tsx
const QuestionCard = ({ question, index, mascotImage }: QuestionCardProps) => {
  return (
    <div className="qa-question-card">
      <div className="qa-card-header">
        <div className="qa-card-number">{String(index + 1).padStart(2, '0')}</div>
      </div>
      <h3 className="qa-card-question">{question}</h3>
      <div className="qa-card-mascot">
        <img src={mascotImage} alt="Stomach mascot" className="qa-mascot-image" />
      </div>
    </div>
  );
};
```

### Thêm vào QandA component:
```tsx
const QandA = () => {
  // ... existing code ...
  
  const mascotImages = [stomach1, stomach2, stomach3, stomach4];

  // Get mascot image for each question (rotate through 4 images)
  const getMascotImage = (questionIndex: number) => {
    return mascotImages[questionIndex % mascotImages.length];
  };
  
  // ... rest of code ...
}
```

### Cập nhật render:
```tsx
{[...questions, ...questions].map((question, index) => (
  <div key={index} className="qa-slider-item">
    <QuestionCard 
      question={question} 
      index={index % questions.length}
      mascotImage={getMascotImage(index % questions.length)}  // Đổi từ mascotVariant
    />
  </div>
))}
```

## Hiện tại

Code đang sử dụng **emoji placeholder** (🤔 😊 💭 😣) để hiển thị tạm cho đến khi bạn thêm hình ảnh mascot thật.

## Sau khi thêm hình ảnh

Slider sẽ tự động sử dụng hình ảnh mascot thay vì emoji, và các hình ảnh sẽ luân phiên cho 10 câu hỏi theo pattern:
- Câu 1, 5, 9: stomach1.png
- Câu 2, 6, 10: stomach2.png
- Câu 3, 7: stomach3.png
- Câu 4, 8: stomach4.png
