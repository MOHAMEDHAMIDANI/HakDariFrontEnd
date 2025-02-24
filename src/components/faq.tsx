import QuestionAnswer from "./q&a";

const FAQPage = () => {
  return (
    <div className="sm:w-[90%] md:w-[80%] max-w-[1200px] w-full my-4">
      <QuestionAnswer
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces. It lets you create reusable UI components."
      />
      <QuestionAnswer
        question="What is Tailwind CSS?"
        answer="Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
      />
      <QuestionAnswer
        question="What is Tailwind CSS?"
        answer="Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
      />
      <QuestionAnswer
        question="What is Tailwind CSS?"
        answer="Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
      />
      <QuestionAnswer
        question="What is Tailwind CSS?"
        answer="Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
      />
    </div>
  );
};

export default FAQPage;
