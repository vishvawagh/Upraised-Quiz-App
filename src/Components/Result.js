import { useNavigate } from 'react-router-dom';

function Result({ score, totalQuestions }) {
  const navigate = useNavigate();

  score = 4
  totalQuestions = 5
  
  // Calculate the number of correct and incorrect answers
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - correctAnswers;

  // Calculate score percentage
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const handleRestart = () => {
    navigate('/'); // Navigate back to the home page or quiz start
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      {/* Result Card */}
      <img 
          src="/back.png" // Replace with your image path
          alt="Decorative"
          className="absolute left-0 top-0 w-screen h-40 object-cover"
        />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-16 bg-purple-300"></div>

        {/* Title */}
        <h1 className="text-2xl font-bold mt-8 mb-6">Your result</h1>

        {/* Semi-circular Gauge for Score */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="relative w-40 h-40">
            <div
              className="absolute inset-0"
              style={{
                background: `conic-gradient(red, orange ${scorePercentage}%, green)`,
                borderRadius: '50%',
                mask: 'radial-gradient(farthest-side, white 75%, transparent 100%)',
                WebkitMask: 'radial-gradient(farthest-side, white 75%, transparent 100%)',
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
              {scorePercentage}%
            </div>
            {/* Needle Indicator */}
            <div
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
              style={{ width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '12px solid black' }}
            ></div>
          </div>
        </div>

        {/* Correct and Incorrect breakdown */}
        <div className="mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center">
              <span className="block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <p className="text-lg font-bold">Correct</p>
            </div>
            <p className="text-xl font-bold text-green-700 ml-4">{correctAnswers}</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <span className="block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p className="text-lg font-bold">Incorrect</p>
            </div>
            <p className="text-xl font-bold text-red-700 ml-4">{incorrectAnswers}</p>
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="w-full py-3 bg-red-500 text-white rounded-full shadow-md transition hover:bg-red-600"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}

export default Result;
