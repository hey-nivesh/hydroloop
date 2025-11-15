'use client';
import React, { useState, useEffect } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';

// Shuffle array function
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// All 40 quiz questions
const allQuizData = [
  { id: 1, question: 'What is the main purpose of rainwater harvesting?', options: ['To increase water bills','To collect and store rainwater for later use','To waste excess rainwater','To contaminate groundwater'], answerIndex: 1, explanation: 'Rainwater harvesting means storing rainwater for later non-potable or treated uses.' },
  { id: 2, question: 'Which surface is most commonly used to collect rainwater at homes?', options: ['Road','Roof','Garden soil','Balcony railing'], answerIndex: 1, explanation: 'Roofs provide a clean, large surface ideal for collection.' },
  { id: 3, question: 'Which of the following reduces daily water usage?', options: ['Taking long showers','Turning off tap while brushing','Using wide open taps always','Washing clothes in small batches'], answerIndex: 1, explanation: 'Turning off taps saves multiple liters each use.' },
  { id: 4, question: 'What is a recharge pit?', options: ['A pit to dump waste','A structure to help rainwater soak underground','A pit for construction','A hole for planting trees'], answerIndex: 1, explanation: 'Recharge pits help increase groundwater levels.' },
  { id: 5, question: 'Greywater refers to water from?', options: ['Toilets','Showers, sinks, laundry','Factories','Open drains'], answerIndex: 1, explanation: 'Greywater comes from domestic cleaning activities.' },
  { id: 6, question: 'Best time to water plants to avoid evaporation?', options: ['Afternoon','Midnight','Early morning or late evening','Noon'], answerIndex: 2, explanation: 'Watering when sunlight is low reduces evaporation.' },
  { id: 7, question: 'Which method helps reduce dependence on municipal supply?', options: ['Using more appliances','Rooftop rainwater harvesting','Leaving taps open','Using old leaking pipes'], answerIndex: 1, explanation: 'Harvesting reduces load on city water.' },
  { id: 8, question: 'A dual-flush toilet helps in?', options: ['Increasing water usage','Saving water by choosing flush volume','Drying bathrooms','Filtering water'], answerIndex: 1, explanation: 'Dual flush gives options for different flush amounts.' },
  { id: 9, question: 'Which household appliance uses the MOST water?', options: ['Washing machine','Mixer grinder','Refrigerator','Television'], answerIndex: 0, explanation: 'Washing machines consume large quantities per cycle.' },
  { id: 10, question: 'Which rainwater harvesting component removes debris?', options: ['Filter','Pump','Solar panel','Wi-Fi router'], answerIndex: 0, explanation: 'Filters remove leaves and solid impurities.' },
  { id: 11, question: 'A common material used for storage tanks?', options: ['Plastic/HDPE','Paper','Glass shards','Wood dust'], answerIndex: 0, explanation: 'HDPE tanks are durable and safe.' },
  { id: 12, question: 'Rainwater is best stored in?', options: ['Open buckets','Closed, covered containers','Old open wells','Unused pits'], answerIndex: 1, explanation: 'Covered tanks prevent contamination.' },
  { id: 13, question: 'What helps identify leaks at home easily?', options: ['Ignoring water bills','Checking meter when taps are off','Waiting for pipe bursts','Running taps constantly'], answerIndex: 1, explanation: 'If meter runs when taps are closed, there is a leak.' },
  { id: 14, question: 'Which method increases groundwater recharge?', options: ['Concrete pavements','Permeable pavements','Asphalt layering','Expanding parking lots'], answerIndex: 1, explanation: 'Permeable pavements allow water to seep underground.' },
  { id: 15, question: 'Which is a natural water conservation practice?', options: ['Mulching soil','Removing all plants','Burning soil','Over-irrigation'], answerIndex: 0, explanation: 'Mulching retains soil moisture and reduces evaporation.' },
  { id: 16, question: 'Which daily habit wastes the MOST water?', options: ['Turning tap off while soaping hands','Using shower for 20 minutes','Using bucket bath','Reusing RO wastewater'], answerIndex: 1, explanation: 'Long showers waste dozens of liters per minute.' },
  { id: 17, question: 'Which water source can be recharged using rainwater?', options: ['Groundwater','Electricity grid','Gas pipelines','Air conditioners'], answerIndex: 0, explanation: 'Harvested rainwater can refill aquifers.' },
  { id: 18, question: 'A first-flush system in rainwater harvesting is used to?', options: ['Collect initial dirty rainwater','Increase pressure','Measure rainfall','Stop filtration'], answerIndex: 0, explanation: 'It removes initial contaminated rainwater off rooftops.' },
  { id: 19, question: 'Which of these is a benefit of rainwater harvesting?', options: ['Higher electricity bill','Reduced water scarcity','More plastic waste','Less groundwater'], answerIndex: 1, explanation: 'It reduces scarcity by storing usable water.' },
  { id: 20, question: 'RO wastewater can be reused for?', options: ['Drinking','Mopping & gardening','Cooking','Medical use'], answerIndex: 1, explanation: 'RO wastewater is suitable for cleaning floors and watering plants.' },
  { id: 21, question: 'Which crop requires minimal water?', options: ['Rice','Wheat','Millets','Sugarcane'], answerIndex: 2, explanation: 'Millets are naturally drought-resistant.' },
  { id: 22, question: 'Which step is required before storing rainwater?', options: ['Cleaning roof and gutters','Painting roof','Covering drains','Keeping roof dirty'], answerIndex: 0, explanation: 'Clean catchment = clean water.' },
  { id: 23, question: 'The unit of annual rainfall is usually?', options: ['Meters','Liters','Millimeters','Kilograms'], answerIndex: 2, explanation: 'Rainfall is measured in millimeters.' },
  { id: 24, question: 'Which regulation often promotes rainwater harvesting?', options: ['Building codes','Traffic signals','Cinema rules','ATM guidelines'], answerIndex: 0, explanation: 'Many cities require harvesting systems in buildings.' },
  { id: 25, question: 'Which factor improves rainwater quality?', options: ['Open storage','Good filtration system','Dirty surfaces','Rusty pipes'], answerIndex: 1, explanation: 'Filtration ensures quality water.' },
  { id: 26, question: 'Which irrigation method saves the MOST water?', options: ['Flood irrigation','Drip irrigation','Overhead sprinklers','Uncontrolled flow'], answerIndex: 1, explanation: 'Drip irrigation delivers water directly to roots.' },
  { id: 27, question: 'Which is a sign of groundwater depletion?', options: ['Rising water tables','Declining borewell yield','Increased rainfall','Wet soil always'], answerIndex: 1, explanation: 'Low borewell yield indicates falling groundwater.' },
  { id: 28, question: 'A common indicator used to assess water quality?', options: ['pH','Color alone','TV shows','Building height'], answerIndex: 0, explanation: 'pH indicates acidity or alkalinity.' },
  { id: 29, question: 'Which water body benefits from stormwater recharge?', options: ['Ground aquifers','Washing machines','Telecom towers','Buses'], answerIndex: 0, explanation: 'Recharge benefits underground aquifers.' },
  { id: 30, question: 'Urban flooding can be reduced by?', options: ['Increasing concrete surfaces','Improving drainage & harvesting','Blocking drains','Removing vegetation'], answerIndex: 1, explanation: 'Better drainage + harvesting reduces runoff.' },
  { id: 31, question: 'Which of these is a challenge in rainwater harvesting?', options: ['Contamination if poorly maintained','Free water','Low cost','Simple installation'], answerIndex: 0, explanation: 'Poor maintenance leads to contamination.' },
  { id: 32, question: 'Which technique reduces soil erosion?', options: ['Contour bunding','Open grazing','Unplanned farming','Over-irrigation'], answerIndex: 0, explanation: 'Contour bunds slow runoff.' },
  { id: 33, question: 'Why should rainwater tanks be covered?', options: ['Aesthetic reasons','Prevent mosquito breeding & dirt','To add sunlight','Make water hot'], answerIndex: 1, explanation: 'Covers protect from contamination.' },
  { id: 34, question: 'Which is a large-scale rainwater harvesting system?', options: ['Roof bucket collection','Check dams','Plastic bottles','Tea cups'], answerIndex: 1, explanation: 'Check dams store large volumes of water.' },
  { id: 35, question: 'Which practice saves water in kitchens?', options: ['Using running tap continuously','Using a basin to wash dishes','Waste more water to clean fast','Throwing wastewater'], answerIndex: 1, explanation: 'Using a basin reduces wastage.' },
  { id: 36, question: 'Which is an advanced water treatment system?', options: ['Sand filter','Reverse osmosis','Cloth filter','Bucket settling'], answerIndex: 1, explanation: 'RO purifies water deeply.' },
  { id: 37, question: 'Groundwater is stored in?', options: ['Aquifers','Clouds','Plastic tanks','Mountains only'], answerIndex: 0, explanation: 'Aquifers hold groundwater naturally.' },
  { id: 38, question: 'What reduces contamination in harvested water?', options: ['Ignoring tank cleaning','Regular maintenance','Leaving tank open','Adding waste'], answerIndex: 1, explanation: 'Maintenance keeps water safe.' },
  { id: 39, question: 'Which is a household water audit step?', options: ['Tracking water usage','Ignoring leaks','Using more water','Removing meters'], answerIndex: 0, explanation: 'Tracking helps detect wastage.' },
  { id: 40, question: 'Why is water conservation important?', options: ['Unlimited supply exists','Water scarcity is increasing','Water is not needed','Rainfall is always constant'], answerIndex: 1, explanation: 'Growing demand + scarcity makes conservation necessary.' }
];

export default function QuizInterface() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [questionStatus, setQuestionStatus] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Track which questions have been answered to prevent re-answering
  const [answeredMap, setAnsweredMap] = useState({});
  
  // Store user's selected answer for each question
  const [userAnswers, setUserAnswers] = useState({});

  // Initialize quiz with 10 random questions
  useEffect(() => {
    const pick = shuffleArray(allQuizData).slice(0, 10);
    setSelectedQuestions(pick);
    setQuestionStatus(Array(10).fill(null));
    setAnsweredMap({});
    setUserAnswers({});
  }, []);

  // Auto-finish quiz when all questions are answered
  useEffect(() => {
    if (selectedQuestions.length > 0 && Object.keys(answeredMap).length === selectedQuestions.length) {
      setShowResult(true);
      setShowExplanation(false);
    }
  }, [answeredMap, selectedQuestions.length]);

  // Reset timer and state when question changes
  useEffect(() => {
    setTimeRemaining(20);
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    // If this question was already answered, show the previous answer
    if (answeredMap[currentQuestionIndex] && userAnswers[currentQuestionIndex] !== undefined) {
      setSelectedAnswer(userAnswers[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, answeredMap, userAnswers]);

  // Timer effect
  useEffect(() => {
    if (showResult || selectedQuestions.length === 0 || answeredMap[currentQuestionIndex]) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, showResult, selectedQuestions.length, answeredMap]);

  const handleTimeUp = () => {
    if (answeredMap[currentQuestionIndex] || selectedQuestions.length === 0) return;

    const newStatus = [...questionStatus];
    newStatus[currentQuestionIndex] = 'skipped';
    setQuestionStatus(newStatus);
    
    // Mark as answered (skipped)
    setAnsweredMap((m) => ({ ...m, [currentQuestionIndex]: true }));
    setUserAnswers((m) => ({ ...m, [currentQuestionIndex]: null }));
    
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return;
    if (selectedQuestions.length === 0) return;
    
    // Prevent double-scoring and re-answering
    if (answeredMap[currentQuestionIndex]) return;

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answerIndex;
    
    const newStatus = [...questionStatus];
    newStatus[currentQuestionIndex] = isCorrect ? 'correct' : 'incorrect';
    setQuestionStatus(newStatus);

    // Mark this question answered and save user's choice
    setAnsweredMap((m) => ({ ...m, [currentQuestionIndex]: true }));
    setUserAnswers((m) => ({ ...m, [currentQuestionIndex]: selectedAnswer }));

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setShowExplanation(true);
  };

  const selectOption = (idx) => {
    // Don't allow selecting if already answered
    if (answeredMap[currentQuestionIndex]) return;
    setSelectedAnswer(idx);
  };

  const handleQuestionClick = (index) => {
    if (showResult) return;
    setCurrentQuestionIndex(index);
  };

  const handleQuizComplete = () => {
    setShowResult(true);
  };

  const handleRestartQuiz = () => {
    const pick = shuffleArray(allQuizData).slice(0, 10);
    setSelectedQuestions(pick);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setTimeRemaining(20);
    setQuestionStatus(Array(10).fill(null));
    setScore(0);
    setUserAnswers({});
    setAnsweredMap({});
    setShowResult(false);
    setShowExplanation(false);
  };

  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">Preparing your quiz...</div>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const wasAnswered = !!answeredMap[currentQuestionIndex];
  const userSelected = userAnswers[currentQuestionIndex];
  const progress = (timeRemaining / 20) * 283;
  const answeredCount = Object.keys(answeredMap).length;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
            <div className="mb-8">
              <div className="text-6xl font-bold text-teal-600 mb-2">
                {score}/{selectedQuestions.length}
              </div>
              <p className="text-gray-600">
                You scored {Math.round((score / selectedQuestions.length) * 100)}%
              </p>
            </div>

            <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
              {selectedQuestions.map((question, index) => {
                const ua = userAnswers[index];
                const isCorrect = ua === question.answerIndex;
                const status = questionStatus[index];
                const userText = ua != null ? `${String.fromCharCode(65 + ua)}. ${question.options[ua]}` : 'Not answered';
                const correctText = `${String.fromCharCode(65 + question.answerIndex)}. ${question.options[question.answerIndex]}`;

                return (
                  <div
                    key={question.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect
                        ? 'border-green-500 bg-green-50'
                        : status === 'skipped'
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 text-left">
                        Q{index + 1}. {question.question}
                      </h3>
                      {isCorrect ? (
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
                      ) : status === 'skipped' ? (
                        <X className="w-6 h-6 text-yellow-600 flex-shrink-0 ml-2" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600 space-y-1 text-left">
                      <p>
                        <span className="font-medium">Your answer:</span>{' '}
                        <span className={isCorrect ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                          {userText}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p>
                          <span className="font-medium">Correct answer:</span>{' '}
                          <span className="font-semibold">{correctText}</span>
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2 italic">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleRestartQuiz}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Restart Quiz (New 10 Questions)
            </button>
            <p className="text-xs text-gray-400 mt-4">
              Tip: Each session shows 10 random questions from a pool of 40 — great for quick tests.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="hover:text-gray-900 cursor-pointer">Quiz List</span>
          <span className="mx-2">›</span>
          <span className="text-teal-600">Rainwater Harvesting & Water Management Quiz</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Rainwater Harvesting & Water Management Quiz
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    10 random easy-to-hard MCQs each session — practical water-saving knowledge.
                  </p>
                  <span className="text-sm text-gray-700">
                    Question {currentQuestionIndex + 1} of {selectedQuestions.length}
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
                  >
                    Restart Quiz
                  </button>
                  <div className="text-sm text-gray-600">Score: {score}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-lg font-medium text-gray-800">
                  {currentQuestion.question}
                </div>
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentQuestion.answerIndex;
                  const showFeedback = (showExplanation || wasAnswered) && (isSelected || isCorrect);
                  const isWrongSelected = (showExplanation || wasAnswered) && userSelected === idx && idx !== currentQuestion.answerIndex;

                  return (
                    <button
                      key={idx}
                      onClick={() => selectOption(idx)}
                      disabled={wasAnswered}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${
                        isSelected
                          ? wasAnswered
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-teal-500 bg-teal-50'
                          : showFeedback && isCorrect
                          ? 'border-green-500 bg-green-50'
                          : isWrongSelected
                          ? 'border-red-500 bg-red-50'
                          : wasAnswered && !isCorrect && !isWrongSelected
                          ? 'border-gray-200 opacity-60'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${wasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-semibold text-gray-700">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 text-gray-700">
                        {option}
                      </span>
                      {isSelected && !wasAnswered && (
                        <Check className="w-6 h-6 text-teal-600" />
                      )}
                      {showFeedback && isCorrect && (
                        <Check className="w-6 h-6 text-green-600" />
                      )}
                      {isWrongSelected && (
                        <X className="w-6 h-6 text-red-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {(showExplanation || wasAnswered) && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                  <div className="font-semibold text-gray-800 mb-2">
                    {userSelected === currentQuestion.answerIndex ? (
                      <span className="text-green-600">✓ Correct!</span>
                    ) : (
                      <span className="text-red-600">✗ {wasAnswered ? 'Answer recorded.' : 'Not quite.'}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    {currentQuestion.explanation}
                  </div>
                  <div className="text-xs text-gray-500">
                    Correct answer: {String.fromCharCode(65 + currentQuestion.answerIndex)}. {currentQuestion.options[currentQuestion.answerIndex]}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={handleAnswerSubmit}
                  disabled={selectedAnswer === null || wasAnswered}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    selectedAnswer === null || wasAnswered
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  {wasAnswered ? 'Answered' : 'Check Answer'}
                </button>

                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Answered: {answeredCount} / {selectedQuestions.length}
                  </div>
                  <button
                    onClick={moveToNextQuestion}
                    disabled={currentQuestionIndex === selectedQuestions.length - 1 || !wasAnswered}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                      currentQuestionIndex === selectedQuestions.length - 1 || !wasAnswered
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {currentQuestionIndex === selectedQuestions.length - 1 ? 'Finish' : 'Next'}
                    {currentQuestionIndex < selectedQuestions.length - 1 && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              {/* Timer */}
              {!wasAnswered && (
                <div className="flex flex-col items-center mb-8">
                  <div className="relative w-24 h-24">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        stroke="#14b8a6"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="283"
                        strokeDashoffset={283 - progress}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-teal-600">
                        0:{timeRemaining.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Timer Remaining:</p>
                </div>
              )}

              {/* Quiz Questions List */}
              <div>
                <div className="w-full flex items-center justify-between text-left font-semibold text-gray-800 mb-4">
                  <span>Quiz Questions List</span>
                  <span className="text-gray-400">^</span>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedQuestions.map((question, index) => {
                    const status = questionStatus[index];
                    const isCurrent = index === currentQuestionIndex;
                    const isCompleted = status === 'correct' || status === 'incorrect' || status === 'skipped';

                    return (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionClick(index)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded text-sm transition-colors ${
                          isCurrent
                            ? 'bg-teal-100 border-2 border-teal-500'
                            : isCompleted
                            ? status === 'correct'
                              ? 'bg-green-50 hover:bg-green-100 border border-green-300'
                              : status === 'skipped'
                              ? 'bg-yellow-50 hover:bg-yellow-100 border border-yellow-300'
                              : 'bg-red-50 hover:bg-red-100 border border-red-300'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-400'
                        }`}
                      >
                        <span>Q{index + 1}</span>
                        {status === 'correct' && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                        {status === 'incorrect' && (
                          <X className="w-4 h-4 text-red-600" />
                        )}
                        {status === 'skipped' && (
                          <X className="w-4 h-4 text-yellow-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Score Display */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Current Score</div>
                <div className="text-2xl font-bold text-teal-600">
                  {score}/{selectedQuestions.length}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Answered: {answeredCount} / {selectedQuestions.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
