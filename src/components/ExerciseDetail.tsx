
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Check, X, Delete } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Botón de regreso */}
        <Button
          onClick={onBack}
          className="mb-6 kid-button"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a los ejercicios
        </Button>

        {/* Ejercicio principal */}
        <Card className="kid-card p-8 mb-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-kidPurple mb-8">
              Ejercicio #{exercise.id}
            </h2>

            {/* Operación matemática grande */}
            <div className="space-y-6">
              <div className="font-mono text-6xl font-bold text-gray-800 bg-white/70 px-6 py-4 rounded-2xl border-4 border-gray-200 inline-block">
                {formatNumber(exercise.minuend)}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <span className="text-6xl font-bold text-kidRed">-</span>
                <div className="font-mono text-6xl font-bold text-gray-800 bg-white/70 px-6 py-4 rounded-2xl border-4 border-gray-200">
                  {formatNumber(exercise.subtrahend)}
                </div>
              </div>
              
              <div className="border-t-8 border-gray-400 w-3/4 mx-auto"></div>
              
              {/* Respuesta */}
              <div className="h-24 flex items-center justify-center">
                <div className={`font-mono text-6xl font-bold px-6 py-4 rounded-2xl border-4 min-w-[400px] ${
                  showFeedback
                    ? exercise.isCorrect
                      ? 'text-green-700 bg-green-100 border-green-400'
                      : 'text-red-700 bg-red-100 border-red-400'
                    : 'text-gray-800 bg-white/70 border-gray-200'
                }`}>
                  {currentAnswer.padStart(6, '0') || '000000'}
                </div>
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`text-center p-4 rounded-2xl text-2xl font-bold ${
                  exercise.isCorrect
                    ? 'bg-green-100 text-green-700 celebration'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {exercise.isCorrect ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Check className="h-8 w-8" />
                      <span>¡Excelente! ¡Respuesta correcta!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <X className="h-8 w-8" />
                      <span>¡Inténtalo de nuevo!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Teclado numérico */}
        {!exercise.isCompleted && (
          <Card className="kid-card p-6">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-kidBlue mb-4">
                Toca los números para escribir tu respuesta
              </h3>
              
              {/* Grid de números */}
              <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
                {numbers.map((num) => (
                  <Button
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className="answer-button h-16 text-3xl"
                    disabled={currentAnswer.length >= 6}
                  >
                    {num}
                  </Button>
                ))}
              </div>

              {/* Controles */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button
                  onClick={handleDelete}
                  className="bg-kidOrange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-2xl"
                  disabled={currentAnswer.length === 0}
                >
                  <Delete className="h-5 w-5 mr-2" />
                  Borrar
                </Button>
                
                <Button
                  onClick={handleClear}
                  className="bg-kidRed hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl"
                  disabled={currentAnswer.length === 0}
                >
                  Limpiar
                </Button>
                
                <Button
                  onClick={handleSubmit}
                  className="kid-button text-xl py-3 px-8"
                  disabled={currentAnswer.length === 0}
                >
                  ¡Enviar respuesta!
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Botón para continuar si ya está completado */}
        {exercise.isCompleted && (
          <div className="text-center">
            <Button
              onClick={onBack}
              className="kid-button text-xl py-4 px-8"
            >
              ¡Continuar con otros ejercicios!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetail;
