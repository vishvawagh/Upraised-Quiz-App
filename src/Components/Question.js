import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Sample Questions
const questions = [
  {
    id: 1,
    question: "How do you judge what should be added in the next version of the app?",
    options: [
      "Data Analysis",
      "User’s feedback",
      "Copy from similar product",
      "Make a questionnaire",
      "Personal feeling"
    ],
    image: null,
    allowMultiple: false, // Single selection
  },
  {
    id: 2,
    question: "Select the appropriate diagram:",
    options: ["Yes", "No", "Maybe"],
    image: "/Image.png", // Use public folder path
    allowMultiple: true, // Multiple selection allowed
  },
  {
    id: 3,
    question: "What should be prioritized for version 2?",
    options: [
      "User feedback",
      "New features",
      "Bug fixes",
      "Performance improvements"
    ],
    image: null,
    allowMultiple: true, // Multiple selection allowed
  },
  {
    id: 4,
    question: "What is internet??",
    options: [
      "A network of interconnected local area networks",
      "A collection of unrelated computers",
      "Interconnection of wide area networks",
      "A single network"
    ],
    image: null,
    allowMultiple: true, // Multiple selection allowed
  },
  {
    id: 5,
    question: "Which of the following is an example of Bluetooth?",
    options: [
      "WAN",
      "LAN",
      "MAN",
      "PAN"
    ],
    image: null,
    allowMultiple: false, // Multiple selection allowed
  },
  // Additional questions...
];


// ProgressIndicator component
const ProgressIndicator = ({ currentQuestion, totalQuestions }) => {
  return (
    
    <div className="flex items-center justify-center mb-4 mt-6" > {/* Added margin-top */}
       <img 
          src="/back.png" // Replace with your image path
          alt="Decorative"
          className="absolute left-0 top-0 w-screen h-40 object-cover"
        />
     <div className="relative w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center mt-24 bg-white">


        <span className="text-xl font-bold">{currentQuestion}/{totalQuestions}</span>
      </div>
    </div>
  );
};

function Question() {
  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const currentQuestionIndex = parseInt(questionNumber) - 1;
  const currentQuestion = questions[currentQuestionIndex];

  // Check for invalid question index
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center mb-4 mt-6 ">

        <h1 className="text-2xl font-bold text-red-500">
          Question not found. Please try again.
        </h1>
      </div>
    );
  }

  const handleNext = () => {
    const nextQuestion = currentQuestionIndex + 2;
    if (nextQuestion <= questions.length) {
      navigate(`/question/${nextQuestion}`);
    } else {
      navigate('/result'); // Go to result page if no more questions
    }
  };

  const toggleOption = (option) => {
    if (currentQuestion.allowMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option) // Remove if already selected
          : [...prev, option] // Add if not selected
      );
    } else {
      setSelectedOptions([option]); // Single selection
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center rounded-xlg" >
      {/* Progress Indicator */}
      <ProgressIndicator
        currentQuestion={parseInt(questionNumber)}
        totalQuestions={questions.length}
      />

      {/* Question Number and Question Text */}
      <div className="w-full max-w-xl p-6" >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {currentQuestion.question}
        </h2>

        {/* Question Image (if available) */}
        {currentQuestion.image && (
          <img
            src={currentQuestion.image}
            alt="Question Visual"
            className="mb-6 w-full rounded-lg shadow-lg"
          />
        )}

        {/* Options List */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => toggleOption(option)}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${
                selectedOptions.includes(option)
                  ? 'bg-green-300 border-green-500'
                  : 'bg-white'
              }`}
            >
              {/* Custom Radio Button */}
              <div
                className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                  selectedOptions.includes(option) ? 'bg-green-500 border-green-500' : 'border-gray-400'
                }`}
              >
                {selectedOptions.includes(option) && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-lg">{option}</span>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selectedOptions.length === 0} // Disable until at least one option is selected
          className={`mt-8 w-full py-3 rounded-full text-white shadow-md transition ${
            selectedOptions.length > 0
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
