
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Check, X, Delete, Sparkles, Star, Zap } from 'lucide-react';

interface Exercise {
  id: number;
  minuend: number;
  subtrahend: number;
  result: number;
  userAnswer?: number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

interface ExerciseDetailProps {
  exercise: Exercise;
  onBack: () => void;
  onAnswer: (answer: number) => void;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  onBack,
  onAnswer
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (exercise.isCompleted && exercise.userAnswer !== undefined) {
      setCurrentAnswer(exercise.userAnswer.toString());
      setShowFeedback(true);
    } else {
      setCurrentAnswer('');
      setShowFeedback(false);
    }
  }, [exercise]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(6, '0');
  };

  const handleNumberClick = (num: string) => {
    if (currentAnswer.length < 6) {
      setCurrentAnswer(currentAnswer + num);
    }
  };

  const handleDelete = () => {
    setCurrentAnswer(currentAnswer.slice(0, -1));
  };

  const handleSubmit = () => {
    if (currentAnswer.length > 0) {
      const answer = parseInt(currentAnswer);
      onAnswer(answer);
      setShowFeedback(true);
    }
  };

  const handleClear = () => {
    setCurrentAnswer('');
    setShowFeedback(false);
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100 p-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="floating-shape w-20 h-20 bg-kidPink rounded-full top-10 left-10"></div>
        <div className="floating-shape w-16 h-16 bg-kidBlue rounded-full top-20 right-20"></div>
        <div className="floating-shape w-24 h-24 bg-kidYellow rounded-full bottom-20 left-20"></div>
        <div className="floating-shape w-12 h-12 bg-kidGreen rounded-full bottom-40 right-40"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Botón de regreso mejorado */}
        <Button
          onClick={onBack}
          className="mb-8 kid-button text-xl group"
        >
          <ArrowLeft className="h-6 w-6 mr-3 group-hover:animate-bounce" />
          Volver a los ejercicios
        </Button>

        {/* Ejercicio principal mejorado */}
        <Card className="kid-card p-12 mb-10 interactive-hover">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Star className="h-10 w-10 text-kidYellow sparkle-effect" />
              <h2 className="text-4xl font-bold text-gradient">
                Ejercicio #{exercise.id}
              </h2>
              <Sparkles className="h-10 w-10 text-kidPink sparkle-effect" />
            </div>

            {/* Operación matemática grande mejorada */}
            <div className="space-y-8">
              <div className="math-number text-7xl shadow-2xl hover:scale-105 transition-all duration-300">
                {formatNumber(exercise.minuend)}
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <span className="text-8xl font-bold text-kidRed animate-pulse">-</span>
                <div className="math-number text-7xl shadow-2xl hover:scale-105 transition-all duration-300">
                  {formatNumber(exercise.subtrahend)}
                </div>
              </div>
              
              <div className="border-t-8 border-gradient-to-r from-gray-300 to-gray-500 w-3/4 mx-auto"></div>
              
              {/* Respuesta mejorada */}
              <div className="h-32 flex items-center justify-center">
                <div className={`number-input-large ${
                  showFeedback
                    ? exercise.isCorrect
                      ? 'text-green-700 bg-gradient-to-br from-green-100 to-emerald-100 border-green-400'
                      : 'text-red-700 bg-gradient-to-br from-red-100 to-pink-100 border-red-400'
                    : 'text-gray-800 border-kidBlue/40'
                }`}>
                  {currentAnswer.padStart(6, '0') || '000000'}
                </div>
              </div>

              {/* Feedback mejorado */}
              {showFeedback && (
                <div className={`text-center p-6 rounded-3xl text-3xl font-bold shadow-2xl ${
                  exercise.isCorrect
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 celebration border-4 border-green-300'
                    : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-4 border-red-300'
                }`}>
                  {exercise.isCorrect ? (
                    <div className="flex items-center justify-center space-x-4">
                      <Check className="h-12 w-12 animate-bounce" />
                      <span>¡Increíble! ¡Eres un genio matemático!</span>
                      <Sparkles className="h-12 w-12 sparkle-effect" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-4">
                      <X className="h-12 w-12 animate-pulse" />
                      <span>¡Casi lo tienes! ¡Inténtalo de nuevo!</span>
                      <Zap className="h-12 w-12 animate-bounce" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Teclado numérico mejorado */}
        {!exercise.isCompleted && (
          <Card className="kid-card p-8 interactive-hover">
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold text-gradient mb-6">
                🎯 Toca los números para escribir tu respuesta 🎯
              </h3>
              
              {/* Grid de números mejorado */}
              <div className="grid grid-cols-5 gap-6 max-w-4xl mx-auto">
                {numbers.map((num) => (
                  <Button
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className="answer-button h-20 text-4xl group"
                    disabled={currentAnswer.length >= 6}
                  >
                    <span className="group-hover:animate-bounce">{num}</span>
                  </Button>
                ))}
              </div>

              {/* Controles mejorados */}
              <div className="flex justify-center space-x-6 mt-10">
                <Button
                  onClick={handleDelete}
                  className="bg-gradient-to-r from-kidOrange to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 text-xl"
                  disabled={currentAnswer.length === 0}
                >
                  <Delete className="h-6 w-6 mr-3" />
                  Borrar
                </Button>
                
                <Button
                  onClick={handleClear}
                  className="bg-gradient-to-r from-kidRed to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 text-xl"
                  disabled={currentAnswer.length === 0}
                >
                  Limpiar
                </Button>
                
                <Button
                  onClick={handleSubmit}
                  className="kid-button text-2xl py-4 px-10 group"
                  disabled={currentAnswer.length === 0}
                >
                  <Zap className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                  ¡Enviar respuesta!
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Botón para continuar mejorado */}
        {exercise.isCompleted && (
          <div className="text-center mt-8">
            <Button
              onClick={onBack}
              className="kid-button text-3xl py-6 px-12 group"
            >
              <Star className="h-8 w-8 mr-4 group-hover:animate-bounce" />
              ¡Continuar con más desafíos!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetail;
