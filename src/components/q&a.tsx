import { useState } from "react";
import Image from "next/image";

const QuestionAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mb-4 ">
      <button
        onClick={toggleAnswer}
        className="flex items-center justify-between w-full py-4 px-5 bg-Landingpages-layer2 text-left border-[1.5px]  border-solid border-Landingpages-gray rounded-md"
      >
        <span className="small">{question}</span>
        <Image
          src={`/images/icons/arr${isOpen ? "2" : "1"}.svg`}
          alt="arrow"
          width={16}
          height={16}
          className={`transition-transform ease-in-out `}
        />
      </button>
      {isOpen && (
        <div className="p-4 mt-2">
          <p className="small">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
