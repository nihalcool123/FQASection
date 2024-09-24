import QnA from './QnA';
import { useState } from 'react';

const FAQ = ({ data }) => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleQna = (index) => {
    setShowIndex((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      }
      return index;
    });
  };

  return (
    <>
      <div>
        {data.faqs.map((qna, index) => (
          <QnA
            qna={qna}
            showAns={index === showIndex}
            handleQna={() => handleQna(index)}
          />
        ))}
      </div>
    </>
  );
};

export default FAQ;
