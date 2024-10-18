// Home.js
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/question/1');
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-purple-300 to-indigo-400">
      {/* Logo and Title at the top-left corner */}
      <div className="absolute top-4 left-4 flex items-center">
        <img
          src="/logo1.png"
          alt="Logo"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-2xl font-bold items-cneter text-white">Upraised</h1>
      </div>

      {/* Centered White Circle with "QUIZ" Text */}
      <div className="flex items-center justify-center bg-white rounded-full w-64 h-64 shadow-lg">
        <h1 className="text-5xl font-bold text-orange-500">QUIZ</h1>
      </div>

      {/* Start Button at the Bottom */}
      <div className="absolute bottom-10">
        <button
          onClick={startQuiz}
          className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg text-lg"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
